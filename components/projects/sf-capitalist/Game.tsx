import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Play, RotateCcw } from 'react-feather'
import {
	advanceTime,
	Business,
	businesses,
	BuyMode,
	createInitialState,
	formatCompact,
	formatMoney,
	GameState,
	getBusinessImage,
	getBuyQuantity,
	getCashPerSecond,
	getDuration,
	getNextMilestone,
	getPurchaseCost,
	getQuickBuyOption,
	getRevenue,
	getTotalCashPerSecond,
	milestones,
} from './data'
import styles from './Game.module.scss'

const TICK_MS = 100
const MAX_TICK_SECONDS = 60 * 60
const FAST_CYCLE_SECONDS = 0.1

const formatCountdown = (seconds: number): string => {
	const safeSeconds = Math.max(0, seconds)

	if (safeSeconds < 0.1) return '0.0s'
	if (safeSeconds < 10) return `${Math.min(9.9, safeSeconds).toFixed(1)}s`

	const totalSeconds = Math.ceil(safeSeconds)
	const secs = totalSeconds % 60
	const minutes = Math.floor(totalSeconds / 60) % 60
	const hours = Math.floor(totalSeconds / 3_600)

	if (hours > 0) return `${hours}h ${String(minutes).padStart(2, '0')}m`
	if (minutes > 0) return `${minutes}m ${String(secs).padStart(2, '0')}s`

	return `${totalSeconds}s`
}

const splitMoney = (value: number) => {
	const [amount, ...scale] = formatMoney(value).split(' ')

	return { amount, scale: scale.join(' ').toUpperCase() || 'DOLLARS' }
}

const getNextBuyMode = (current: BuyMode): BuyMode => {
	switch (current) {
		case 1:
			return 10
		case 10:
			return 100
		case 100:
			return 'next'
		case 'next':
			return 'max'
		case 'max':
			return 1
	}
}

const getFillScale = (progress: number, duration: number, elapsedSeconds: number, loops: boolean) => {
	if (duration <= 0) return 0

	const totalProgress = Math.max(0, progress + elapsedSeconds)
	const visibleProgress = loops ? totalProgress % duration : Math.min(duration, totalProgress)

	return Math.min(1, Math.max(0, visibleProgress / duration))
}

interface RevenueFillProps {
	active: boolean
	automated: boolean
	duration: number
	fastCycle: boolean
	progress: number
}

// Animates via rAF + transform directly so the bar stays smooth between state ticks.
const RevenueFill: React.FC<RevenueFillProps> = ({ active, automated, duration, fastCycle, progress }) => {
	const fillRef = useRef<HTMLSpanElement | null>(null)
	const baselineRef = useRef({ duration, progress, updatedAt: 0 })
	const initialScale = active && fastCycle ? 1 : active ? getFillScale(progress, duration, 0, automated) : 0

	useLayoutEffect(() => {
		baselineRef.current = { duration, progress, updatedAt: performance.now() }

		if (fillRef.current) {
			fillRef.current.style.transform = `scaleX(${initialScale})`
		}
	}, [active, automated, duration, fastCycle, initialScale, progress])

	useEffect(() => {
		const fill = fillRef.current

		if (!fill) return

		if (!active) {
			fill.style.transform = 'scaleX(0)'
			return
		}

		if (fastCycle) {
			fill.style.transform = 'scaleX(1)'
			return
		}

		let frameId = 0
		const draw = (now: number) => {
			const baseline = baselineRef.current
			const elapsedSeconds = (now - baseline.updatedAt) / 1_000

			fill.style.transform = `scaleX(${getFillScale(baseline.progress, baseline.duration, elapsedSeconds, automated)})`
			frameId = window.requestAnimationFrame(draw)
		}

		frameId = window.requestAnimationFrame(draw)

		return () => window.cancelAnimationFrame(frameId)
	}, [active, automated, duration, fastCycle])

	return (
		<span
			className={`${styles.revenueFill} ${fastCycle ? styles.fastProgress : ''}`}
			ref={fillRef}
			style={{ transform: `scaleX(${initialScale})` }}
		/>
	)
}

interface BusinessRowProps {
	business: Business
	buyMode: BuyMode
	state: GameState
	onBuy: (businessId: string) => void
	onStart: (businessId: string) => void
}

const BusinessRow: React.FC<BusinessRowProps> = ({ business, buyMode, state, onBuy, onStart }) => {
	const businessState = state.businesses[business.id]

	if (businessState.owned === 0) {
		const firstCost = getPurchaseCost(business, 0, 1)
		const canUnlock = state.cash >= firstCost

		return (
			<article className={`${styles.unlockCard} ${canUnlock ? styles.unlockCardAffordable : styles.unlockCardLocked}`}>
				<button type="button" className={styles.unlockButton} disabled={!canUnlock} onClick={() => onBuy(business.id)}>
					<span className={styles.unlockIcon}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img alt="" draggable={false} src={getBusinessImage(business.id)} />
					</span>
					<span className={styles.unlockCopy}>
						<strong>{business.name}</strong>
						<span>{formatMoney(firstCost)}</span>
					</span>
				</button>
			</article>
		)
	}

	const quantity = getBuyQuantity(state, business, buyMode)
	const purchaseCost = getPurchaseCost(business, businessState.owned, quantity)
	const canBuy = quantity > 0 && state.cash >= purchaseCost
	const displayCost = quantity > 0 ? purchaseCost : getPurchaseCost(business, businessState.owned, 1)
	const displayMoney = splitMoney(displayCost)
	const duration = getDuration(state, business)
	const automated = state.managers[business.id]
	const showProgress = businessState.running || automated
	const fastCycle = duration < FAST_CYCLE_SECONDS && showProgress
	const canStart = !businessState.running && !automated
	const timeRemaining = showProgress ? duration - businessState.progress : duration
	const nextMilestone = getNextMilestone(state, business.id)
	const previousGoal = nextMilestone
		? Math.max(0, ...milestones.filter((m) => m.goal < nextMilestone.goal).map((m) => m.goal))
		: 0
	const ownedProgressPercent = nextMilestone
		? Math.min(100, Math.max(0, ((businessState.owned - previousGoal) / (nextMilestone.goal - previousGoal)) * 100))
		: 100
	const revenueLabel = automated
		? `${formatMoney(getCashPerSecond(state, business))} /sec`
		: `${formatMoney(getRevenue(state, business))} /run`

	return (
		<article className={styles.card}>
			<div className={styles.iconWrap}>
				<button
					type="button"
					aria-label={canStart ? `Start ${business.name}` : business.name}
					className={`${styles.icon} ${canStart ? styles.iconReady : ''}`}
					onClick={() => canStart && onStart(business.id)}
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img alt="" draggable={false} src={getBusinessImage(business.id)} />
				</button>
				<div className={styles.ownedCount} style={{ '--owned-progress': `${ownedProgressPercent}%` } as React.CSSProperties}>
					<span>{businessState.owned}</span>
				</div>
			</div>

			<div className={styles.control}>
				<div className={styles.nameRow}>
					<h3>{business.name}</h3>
				</div>
				<button
					type="button"
					className={`${styles.revenueArrow} ${canStart ? styles.revenueArrowReady : ''}`}
					onClick={() => canStart && onStart(business.id)}
					title={canStart ? 'Start production' : undefined}
				>
					<RevenueFill
						active={showProgress}
						automated={automated}
						duration={duration}
						fastCycle={fastCycle}
						progress={showProgress ? Math.min(duration, Math.max(0, businessState.progress)) : 0}
					/>
					<span className={styles.revenueText}>{revenueLabel}</span>
					{canStart ? <Play className={styles.revenuePlay} fill="currentColor" /> : null}
				</button>

				<div className={styles.purchaseRow}>
					<button type="button" className={styles.buyBlock} disabled={!canBuy} onClick={() => onBuy(business.id)}>
						<span>Buy {formatCompact(quantity, 0)}</span>
						<strong>{displayMoney.amount}</strong>
						<em>{displayMoney.scale}</em>
					</button>
					<div className={styles.timeBlock}>{formatCountdown(timeRemaining)}</div>
				</div>
			</div>
		</article>
	)
}

interface Toast {
	key: number
	title: string
	detail: string
	image: string
}

const Game: React.FC = () => {
	const [state, setState] = useState<GameState>(createInitialState)
	const [buyMode, setBuyMode] = useState<BuyMode>(1)
	const [toast, setToast] = useState<Toast | null>(null)
	const [visible, setVisible] = useState(false)
	const rootRef = useRef<HTMLDivElement | null>(null)
	const lastTickRef = useRef(0)
	const toastKeyRef = useRef(0)

	// Only tick while the demo is on screen.
	useEffect(() => {
		const root = rootRef.current

		if (!root) return

		const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))

		observer.observe(root)

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (!visible) return

		lastTickRef.current = performance.now()

		const interval = window.setInterval(() => {
			const now = performance.now()
			const elapsedSeconds = Math.min(MAX_TICK_SECONDS, (now - lastTickRef.current) / 1_000)

			lastTickRef.current = now
			setState((current) => advanceTime(current, elapsedSeconds))
		}, TICK_MS)

		return () => window.clearInterval(interval)
	}, [visible])

	const showMilestoneToast = useCallback((before: GameState, after: GameState, businessId: string) => {
		const business = businesses.find((b) => b.id === businessId)

		if (!business) return

		const crossed = milestones.filter(
			(m) => before.businesses[businessId].owned < m.goal && after.businesses[businessId].owned >= m.goal
		)
		const milestone = crossed.at(-1)

		if (!milestone) return

		toastKeyRef.current += 1
		setToast({
			key: toastKeyRef.current,
			title: `${milestone.kind === 'speed' ? 'Speed' : 'Profit'} x${milestone.multiplier}`,
			detail: business.name,
			image: getBusinessImage(businessId),
		})
	}, [])

	useEffect(() => {
		if (!toast) return

		const timeout = window.setTimeout(() => setToast(null), 2_600)

		return () => window.clearTimeout(timeout)
	}, [toast])

	const handleBuy = useCallback(
		(businessId: string) => {
			setState((current) => {
				const business = businesses.find((b) => b.id === businessId)

				if (!business) return current

				const owned = current.businesses[businessId].owned
				const quantity = owned === 0 ? 1 : getBuyQuantity(current, business, buyMode)
				const cost = getPurchaseCost(business, owned, quantity)

				if (quantity <= 0 || cost > current.cash || !Number.isFinite(cost)) return current

				const next: GameState = {
					...current,
					cash: current.cash - cost,
					businesses: {
						...current.businesses,
						[businessId]: { ...current.businesses[businessId], owned: owned + quantity },
					},
				}

				showMilestoneToast(current, next, businessId)

				return next
			})
		},
		[buyMode, showMilestoneToast]
	)

	const handleStart = useCallback((businessId: string) => {
		setState((current) => {
			const businessState = current.businesses[businessId]

			if (businessState.owned <= 0 || businessState.running || current.managers[businessId]) return current

			return {
				...current,
				businesses: {
					...current.businesses,
					[businessId]: { ...businessState, progress: 0, running: true },
				},
			}
		})
	}, [])

	const handleQuickBuy = useCallback(() => {
		setState((current) => {
			const option = getQuickBuyOption(current)

			if (!option || current.cash < option.cost) return current

			if (option.kind === 'manager') {
				return {
					...current,
					cash: current.cash - option.cost,
					managers: { ...current.managers, [option.id]: true },
				}
			}

			return {
				...current,
				cash: current.cash - option.cost,
				upgrades: [...current.upgrades, option.id],
			}
		})
	}, [])

	const handleReset = useCallback(() => {
		setState(createInitialState())
		setToast(null)
	}, [])

	const money = splitMoney(state.cash)
	const quickBuy = getQuickBuyOption(state)
	const buyModeLabel = buyMode === 'max' ? 'Max' : buyMode === 'next' ? 'Next' : `x${buyMode}`

	return (
		<div ref={rootRef} className={styles.screen}>
			<button type="button" aria-label="Reset the demo" title="Reset" className={styles.reset} onClick={handleReset}>
				<RotateCcw />
			</button>

			<header className={styles.cashRibbon}>
				<div className={styles.portrait}>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img alt="" draggable={false} src="/sf-capitalist/jensen-huang.png" />
				</div>
				<div className={styles.cashInfo}>
					<div className={styles.cashHeadline}>
						<strong>{money.amount}</strong>
						<span>{money.scale}</span>
					</div>
					<div className={styles.cashSubline}>
						<span>{formatMoney(getTotalCashPerSecond(state))} /sec</span>
					</div>
				</div>
				<div className={styles.topControls}>
					{quickBuy ? (
						<div
							className={styles.quickBuy}
							title={`Buy ${quickBuy.name}: ${quickBuy.description} (${formatMoney(quickBuy.cost)})`}
						>
							<button type="button" className={styles.quickBuyButton} onClick={handleQuickBuy}>
								Buy
							</button>
							<button
								type="button"
								className={styles.quickBuyCard}
								onClick={handleQuickBuy}
								aria-label={`Buy ${quickBuy.name}: ${quickBuy.description}`}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img alt="" draggable={false} src={quickBuy.image} />
								<strong>{quickBuy.badge}</strong>
							</button>
						</div>
					) : null}
					<button
						type="button"
						className={styles.buyTag}
						aria-label={`Cycle buy multiplier, currently ${buyModeLabel}`}
						onClick={() => setBuyMode(getNextBuyMode)}
					>
						<span>Buy</span>
						<strong>{buyModeLabel}</strong>
					</button>
				</div>
			</header>

			<div className={styles.grid}>
				{businesses.map((business) => (
					<BusinessRow
						key={business.id}
						business={business}
						buyMode={buyMode}
						state={state}
						onBuy={handleBuy}
						onStart={handleStart}
					/>
				))}
			</div>

			{toast ? (
				<div key={toast.key} className={styles.toast} role="status">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img alt="" draggable={false} src={toast.image} />
					<div>
						<strong>{toast.title}</strong>
						<span>{toast.detail}</span>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default Game
