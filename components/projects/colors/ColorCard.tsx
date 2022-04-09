import React from 'react'
import { X, Plus } from 'react-feather'
import Color from 'color'
import chroma from 'chroma-js'

interface ColorCardProps {
	color: string
	index: number
	colors: string[]
	setColors: React.Dispatch<React.SetStateAction<string[]>>
}

const ColorCard: React.FC<ColorCardProps> = ({ color, index, colors, setColors }) => {
	const isLight = Color(color).isLight()

	function removeColor() {
		const _colors = [...colors]
		_colors.splice(index, 1)
		setColors(_colors)
	}

	const addColor = () => {
		if (colors.length >= 8) return
		const _colors = [...colors]

		let i = index + 1
		const newColors = chroma
			.scale([_colors[index], _colors[i] || '#000000'])
			.mode('lch')
			.colors(3)
		_colors.splice(i, 0, newColors[1])
		console.log(_colors)
		setColors(_colors)
	}
	return (
		<div
			className={`relative flex flex-1 items-center justify-between px-10 md:items-end md:justify-center md:px-0 md:pb-4 ${
				isLight ? 'text-black' : 'text-white'
			}`}
			style={{ backgroundColor: color }}
		>
			{colors.length < 8 && (
				<>
					{index === 0 && (
						<div className="group left-0 top-0 bottom-0 z-30 hidden w-1/3 cursor-pointer items-center justify-center text-black md:absolute ">
							<div
								onClick={() => {
									const newColors = chroma.scale(['#ffffff', colors[index]]).mode('lch').colors(3)

									colors.unshift(newColors[1].replaceAll('#', ''))
								}}
								className="z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-gray-100 shadow-md group-hover:flex"
							>
								<Plus />
							</div>
						</div>
					)}

					<div
						className={`group right-0 top-0 bottom-0 z-30 flex hidden w-1/3 cursor-pointer items-center justify-center text-black md:absolute ${
							index === colors.length - 1 ? '-translate-x-1/5' : 'translate-x-1/2'
						}`}
					>
						<div
							onClick={addColor}
							className="z-10 hidden h-11 w-11 items-center justify-center rounded-full bg-gray-100 shadow-md group-hover:flex"
						>
							<Plus />
						</div>
					</div>
				</>
			)}

			<p className="text-lg font-semibold">{color}</p>
			<div className="group md:absolute md:inset-0">
				<div className="md:absolute md:left-1/2 md:top-1/2 md:hidden md:-translate-x-1/2 md:-translate-y-1/2 md:group-hover:block">
					<div className="mb-4 cursor-pointer transition-colors last:mb-0" onClick={removeColor}>
						<X />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColorCard
