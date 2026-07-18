export interface Business {
	id: string
	name: string
	baseCost: number
	costMultiplier: number
	baseRevenue: number
	baseDuration: number
	managerCost: number
	managerName: string
	accent: string
}

export interface Upgrade {
	id: string
	name: string
	target: string | 'all'
	cost: number
	multiplier: number
}

export interface Milestone {
	goal: number
	kind: 'speed' | 'profit'
	multiplier: number
}

export interface BusinessState {
	owned: number
	progress: number
	running: boolean
}

export interface GameState {
	cash: number
	businesses: Record<string, BusinessState>
	managers: Record<string, boolean>
	upgrades: string[]
}

export type BuyMode = 1 | 10 | 100 | 'next' | 'max'

// The ten Silicon Valley businesses from the real game. Manager costs are
// scaled down ~10x so automation kicks in within a portfolio-visit session.
export const businesses: Business[] = [
	{
		id: 'bitcoin-miner',
		name: 'Bitcoin Miner',
		baseCost: 4,
		costMultiplier: 1.07,
		baseRevenue: 1,
		baseDuration: 0.6,
		managerCost: 100,
		managerName: 'Ada Lovelace Ops',
		accent: '#f7d94c',
	},
	{
		id: 'yc',
		name: 'YC',
		baseCost: 60,
		costMultiplier: 1.15,
		baseRevenue: 60,
		baseDuration: 3,
		managerCost: 1_500,
		managerName: 'Ray Tracey',
		accent: '#63d2ff',
	},
	{
		id: 'waymo',
		name: 'Waymo',
		baseCost: 720,
		costMultiplier: 1.14,
		baseRevenue: 540,
		baseDuration: 6,
		managerCost: 10_000,
		managerName: 'Max Tokens',
		accent: '#9af06f',
	},
	{
		id: 'stanford-dropout',
		name: 'Stanford Dropout',
		baseCost: 8_640,
		costMultiplier: 1.13,
		baseRevenue: 4_320,
		baseDuration: 12,
		managerCost: 50_000,
		managerName: 'Grad Descent',
		accent: '#ff8a5b',
	},
	{
		id: 'h100-gpu-cluster',
		name: 'H100 GPU Cluster',
		baseCost: 103_680,
		costMultiplier: 1.12,
		baseRevenue: 51_840,
		baseDuration: 24,
		managerCost: 120_000,
		managerName: 'Holly Aisle',
		accent: '#ff6f91',
	},
	{
		id: 'cursor-tab',
		name: 'Cursor Tab',
		baseCost: 1_244_160,
		costMultiplier: 1.11,
		baseRevenue: 622_080,
		baseDuration: 96,
		managerCost: 1_000_000,
		managerName: 'Hash Gordon',
		accent: '#c59bff',
	},
	{
		id: 'polymarket',
		name: 'Polymarket',
		baseCost: 14_929_920,
		costMultiplier: 1.1,
		baseRevenue: 7_464_960,
		baseDuration: 384,
		managerCost: 11_111_111,
		managerName: 'Reg Ion',
		accent: '#78f5c5',
	},
	{
		id: 'chatgpt-3-5',
		name: 'ChatGPT-3.5',
		baseCost: 179_159_040,
		costMultiplier: 1.09,
		baseRevenue: 89_579_520,
		baseDuration: 1_536,
		managerCost: 55_555_555,
		managerName: 'Carrie Capacity',
		accent: '#ffcb8a',
	},
	{
		id: 'nvidia',
		name: 'Nvidia',
		baseCost: 2_149_908_480,
		costMultiplier: 1.08,
		baseRevenue: 1_074_954_240,
		baseDuration: 6_144,
		managerCost: 1_000_000_000,
		managerName: 'Vector Prime',
		accent: '#a4e86f',
	},
	{
		id: 'agi',
		name: 'AGI',
		baseCost: 25_798_901_760,
		costMultiplier: 1.07,
		baseRevenue: 29_668_737_024,
		baseDuration: 36_864,
		managerCost: 10_000_000_000,
		managerName: 'Nova Station',
		accent: '#8ad9ff',
	},
]

// One profit upgrade per business plus one global one — the "very minimal" set.
export const upgrades: Upgrade[] = [
	{ id: 'cooling-fan-mod', name: 'Cooling Fan Mod', target: 'bitcoin-miner', cost: 25_000, multiplier: 3 },
	{ id: 'hn-frontpage', name: 'Hacker News Frontpage', target: 'yc', cost: 50_000, multiplier: 3 },
	{ id: 'geofence-expansion', name: 'Geofence Expansion', target: 'waymo', cost: 150_000, multiplier: 3 },
	{ id: 'dorm-room-pivot', name: 'Dorm Room Pivot', target: 'stanford-dropout', cost: 500_000, multiplier: 3 },
	{ id: 'rack-density-boost', name: 'Rack Density Boost', target: 'h100-gpu-cluster', cost: 1_000_000, multiplier: 3 },
	{ id: 'tab-acceptance-rate', name: 'Tab Acceptance Rate', target: 'cursor-tab', cost: 5_000_000, multiplier: 3 },
	{ id: 'whale-spotter', name: 'Whale Spotter', target: 'polymarket', cost: 25_000_000, multiplier: 3 },
	{ id: 'tokenizer-upgrade', name: 'Tokenizer Upgrade', target: 'chatgpt-3-5', cost: 100_000_000, multiplier: 3 },
	{ id: 'foundry-allocation', name: 'Foundry Allocation', target: 'nvidia', cost: 500_000_000, multiplier: 3 },
	{ id: 'inference-optimizer', name: 'Inference Optimizer', target: 'agi', cost: 2_000_000_000, multiplier: 3 },
	{ id: 'tam', name: 'Total Addressable Market', target: 'all', cost: 10_000_000_000, multiplier: 3 },
]

export const milestones: Milestone[] = [
	{ goal: 25, kind: 'speed', multiplier: 2 },
	{ goal: 50, kind: 'speed', multiplier: 2 },
	{ goal: 100, kind: 'speed', multiplier: 2 },
	{ goal: 200, kind: 'speed', multiplier: 2 },
	{ goal: 400, kind: 'speed', multiplier: 2 },
	{ goal: 1_000, kind: 'profit', multiplier: 3 },
]

export const getBusinessImage = (id: string) => `/sf-capitalist/${id}.png`

export const createInitialState = (): GameState => ({
	cash: 4,
	businesses: Object.fromEntries(businesses.map((b) => [b.id, { owned: 0, progress: 0, running: false }])),
	managers: Object.fromEntries(businesses.map((b) => [b.id, false])),
	upgrades: [],
})

const shortScale = [
	'',
	'thousand',
	'million',
	'billion',
	'trillion',
	'quadrillion',
	'quintillion',
	'sextillion',
	'septillion',
	'octillion',
	'nonillion',
	'decillion',
]

export const formatCompact = (value: number, fractionDigits = 2): string => {
	if (!Number.isFinite(value)) return 'Infinity'

	const absolute = Math.abs(value)

	if (absolute < 1_000) {
		return value.toLocaleString('en-US', { maximumFractionDigits: absolute < 100 ? fractionDigits : 0 })
	}

	const tier = Math.floor(Math.log10(absolute) / 3)

	if (tier >= shortScale.length) return value.toExponential(2)

	const scaled = value / 1_000 ** tier

	return `${scaled.toLocaleString('en-US', { maximumFractionDigits: scaled >= 100 ? 0 : fractionDigits })} ${
		shortScale[tier]
	}`.trim()
}

export const formatMoney = (value: number) => `$${formatCompact(value)}`

export const getSpeedMultiplier = (state: GameState, businessId: string) =>
	milestones
		.filter((m) => m.kind === 'speed' && state.businesses[businessId].owned >= m.goal)
		.reduce((total, m) => total * m.multiplier, 1)

export const getProfitMultiplier = (state: GameState, businessId: string) => {
	const milestoneMultiplier = milestones
		.filter((m) => m.kind === 'profit' && state.businesses[businessId].owned >= m.goal)
		.reduce((total, m) => total * m.multiplier, 1)
	const upgradeMultiplier = upgrades
		.filter((u) => state.upgrades.includes(u.id) && (u.target === 'all' || u.target === businessId))
		.reduce((total, u) => total * u.multiplier, 1)

	return milestoneMultiplier * upgradeMultiplier
}

export const getDuration = (state: GameState, business: Business) =>
	Math.max(0.05, business.baseDuration / getSpeedMultiplier(state, business.id))

export const getRevenue = (state: GameState, business: Business) =>
	business.baseRevenue * state.businesses[business.id].owned * getProfitMultiplier(state, business.id)

export const getCashPerSecond = (state: GameState, business: Business) => {
	if (state.businesses[business.id].owned <= 0) return 0

	return getRevenue(state, business) / getDuration(state, business)
}

export const getTotalCashPerSecond = (state: GameState) =>
	businesses.reduce((total, business) => {
		if (!state.managers[business.id]) return total

		return total + getCashPerSecond(state, business)
	}, 0)

export const getPurchaseCost = (business: Business, owned: number, quantity: number): number => {
	if (quantity <= 0) return 0

	const firstCost = business.baseCost * business.costMultiplier ** owned

	if (quantity === 1) return firstCost

	return firstCost * ((business.costMultiplier ** quantity - 1) / (business.costMultiplier - 1))
}

export const getMaxAffordableQuantity = (business: Business, owned: number, cash: number) => {
	if (cash < getPurchaseCost(business, owned, 1)) return 0

	let low = 1
	let high = 1

	while (Number.isFinite(getPurchaseCost(business, owned, high)) && getPurchaseCost(business, owned, high) <= cash) {
		high *= 2
		if (high > 100_000) break
	}

	while (low < high) {
		const mid = Math.ceil((low + high) / 2)
		const cost = getPurchaseCost(business, owned, mid)

		if (Number.isFinite(cost) && cost <= cash) {
			low = mid
		} else {
			high = mid - 1
		}
	}

	return low
}

export const getNextMilestone = (state: GameState, businessId: string) =>
	milestones.find((m) => m.goal > state.businesses[businessId].owned)

export const getBuyQuantity = (state: GameState, business: Business, mode: BuyMode) => {
	const owned = state.businesses[business.id].owned

	if (mode === 'max') return getMaxAffordableQuantity(business, owned, state.cash)

	if (mode === 'next') {
		const next = getNextMilestone(state, business.id)

		if (!next) return 0

		return Math.max(0, next.goal - owned)
	}

	return mode
}

export interface QuickBuyOption {
	kind: 'manager' | 'upgrade'
	id: string
	name: string
	description: string
	cost: number
	image: string
	badge: string
}

export const getQuickBuyOption = (state: GameState): QuickBuyOption | null => {
	const managerOptions: QuickBuyOption[] = businesses
		.filter((business) => !state.managers[business.id] && state.cash >= business.managerCost)
		.map((business) => ({
			kind: 'manager',
			id: business.id,
			name: business.managerName,
			description: `Automates ${business.name}`,
			cost: business.managerCost,
			image: getBusinessImage(business.id),
			badge: 'Mgr',
		}))
	const upgradeOptions: QuickBuyOption[] = upgrades
		.filter((upgrade) => !state.upgrades.includes(upgrade.id) && state.cash >= upgrade.cost)
		.map((upgrade) => ({
			kind: 'upgrade',
			id: upgrade.id,
			name: upgrade.name,
			description:
				upgrade.target === 'all'
					? `All profits x${upgrade.multiplier}`
					: `${businesses.find((b) => b.id === upgrade.target)?.name} profits x${upgrade.multiplier}`,
			cost: upgrade.cost,
			image: upgrade.target === 'all' ? '/sf-capitalist/currency.png' : getBusinessImage(upgrade.target),
			badge: `x${upgrade.multiplier}`,
		}))

	return [...managerOptions, ...upgradeOptions].sort((a, b) => a.cost - b.cost)[0] ?? null
}

// Advances every owned business by `elapsedSeconds`, collecting completed runs.
export const advanceTime = (state: GameState, elapsedSeconds: number): GameState => {
	if (elapsedSeconds <= 0) return state

	let earnings = 0
	let changed = false
	const nextBusinesses = { ...state.businesses }

	for (const business of businesses) {
		const current = nextBusinesses[business.id]

		if (current.owned <= 0) continue

		const automated = state.managers[business.id]

		if (!automated && !current.running) continue

		const duration = getDuration(state, business)
		const revenue = getRevenue(state, business)
		const totalProgress = current.progress + elapsedSeconds

		changed = true

		if (automated) {
			const completions = Math.floor(totalProgress / duration)

			if (completions > 0) earnings += revenue * completions

			nextBusinesses[business.id] = { ...current, running: true, progress: totalProgress % duration }
		} else if (totalProgress >= duration) {
			earnings += revenue
			nextBusinesses[business.id] = { ...current, running: false, progress: 0 }
		} else {
			nextBusinesses[business.id] = { ...current, progress: totalProgress }
		}
	}

	if (!changed) return state

	return { ...state, cash: state.cash + earnings, businesses: nextBusinesses }
}
