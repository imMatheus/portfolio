import React, { useEffect, useRef, useState } from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub, ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import ActionButton from '../ActionButton'
import { Slider } from '@mantine/core'

const Sorter: React.FC = ({}) => {
	const [numberOfBars, setNumberOfBars] = useState(5)
	const dummy = useRef<any[]>([])
	const containerRef = useRef<HTMLDivElement>(null)
	const [loading, setLoading] = useState(false)
	const [animationSpeed, setAnimationSpeed] = useState(500)
	const [, updateState] = React.useState<any>()
	const forceUpdate = React.useCallback(() => updateState({}), [])

	enum State {
		STALE,
		FOCUS,
		SWAP,
		FINAL
	}

	function getRandomBars() {
		return Array.from({ length: numberOfBars }, () => ({
			num: Math.floor(Math.random() * 70) + 20,
			state: State.STALE
		}))
	}

	type INumber = { num: number; state: State }
	const [numbers, setNumbers] = useState<INumber[]>(getRandomBars())
	// const [animations, setAnimations] = useState<number[][]>()

	function getWidth() {
		return Math.ceil(500 / numbers.length)
	}

	function getMargin() {
		return Math.ceil(200 / numbers.length)
	}

	useEffect(() => {
		setNumbers(getRandomBars())
	}, [numberOfBars])

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	function update(nums: INumber[]) {
		setNumbers([...nums])
	}

	useEffect(() => {
		async function goer() {
			if (!loading) return
			let _numbers = [...numbers]

			for (let i = 0; i < _numbers.length; i++) {
				for (let j = 0; j < _numbers.length - i - 1; j++) {
					_numbers = _numbers.map((num, index) => (index < _numbers.length - i ? { ...num, state: State.STALE } : num))
					_numbers[j].state = State.FOCUS
					_numbers[j + 1].state = State.FOCUS
					await sleep(animationSpeed / 2)
					update(_numbers)
					forceUpdate()
					if (_numbers[j].num > _numbers[j + 1].num) {
						let temp = { ..._numbers[j], state: State.SWAP }
						_numbers[j] = { ..._numbers[j + 1], state: State.SWAP }
						_numbers[j + 1] = temp
					}

					await sleep(animationSpeed / 2)
					update(_numbers)
					forceUpdate()
				}
				_numbers[_numbers.length - 1 - i].state = State.FINAL
			}
			setLoading(false)
		}
		goer()
	}, [loading])

	const DELAY = 200

	return (
		<div id="sorter" className="text-white">
			<ProjectTitle>Sorting Algorithm Visualizer</ProjectTitle>
			<ProjectDescription>
				This project holds a special part in my heart as it was the first semi-big project I completed after around 3
				months of coding experience. It took many sleepless nights but I came through in the end. I am interested in
				computer science to the point where I started watching Harvard&apos;s algorithms and data structures on YouTube.
				The project down below is pretty straightforward, it demonstrates the most basic of sorting algorithms, Bubble
				sort.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/Sorting-algo-Visualizer" Icon={GitHub} text="Repository" />
				<Link href="https://fantastic-faun-a021c6.netlify.app/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>

			<div className="flex flex-wrap items-center gap-x-6 lg:gap-x-8">
				<div className="flex min-w-[11rem] flex-col">
					<label htmlFor="sorter-number-of-bars" className="text-lg font-bold">
						Number of bars: {numberOfBars}
					</label>
					<div className="w-36 flex-col items-center">
						<Slider
							name="sorter-number-of-bars"
							id="sorter-number-of-bars"
							color="dark"
							disabled={loading}
							value={numberOfBars}
							onChange={setNumberOfBars}
							min={5}
							max={60}
							showLabelOnHover={false}
							// step={0.1}
							// styles={{ markLabel: { display: 'none' } }}
						/>
					</div>
				</div>

				<div className="flex min-w-[14rem] flex-col">
					<label htmlFor="sorter-animation-speed" className="text-lg font-bold">
						Animation speed: {animationSpeed}ms
					</label>

					<div className="w-36 flex-col items-center">
						<Slider
							name="sorter-animation-speed"
							id="sorter-animation-speed"
							color="dark"
							disabled={loading}
							value={animationSpeed}
							onChange={setAnimationSpeed}
							min={1}
							max={1000}
							showLabelOnHover={false}
							// step={0.1}
							// styles={{ markLabel: { display: 'none' } }}
						/>
					</div>
				</div>
				<ActionButton onClick={() => setNumbers(getRandomBars())} disabled={loading}>
					Generate new array
				</ActionButton>
				<ActionButton onClick={() => setLoading(true)} disabled={loading}>
					Sort with Bubble sort
				</ActionButton>
			</div>

			{/* <button onClick={bubbelSort}>sort</button> */}
			<div className="flex h-96 w-full justify-center overflow-scroll rounded-md bg-black" ref={containerRef}>
				{numbers.map((number, index) => {
					return (
						<div
							style={{
								height: number.num + '%',
								width: getWidth() + 'px',
								marginLeft: getMargin() + 'px',
								backgroundColor:
									number.state === State.SWAP
										? '#eb459e'
										: number.state === State.FOCUS
										? '#fee75c'
										: number.state === State.FINAL
										? '#57f287'
										: '#fff'
							}}
							key={index}
						></div>
					)
				})}
			</div>
		</div>
	)
}

export default Sorter
