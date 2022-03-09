import React from 'react'

interface ContributionSquareProps {
	count: number
	contributionLevel: string
	date: any
	color: string
	index: number
}

const ContributionSquare: React.FC<ContributionSquareProps> = ({ count, color, contributionLevel, date, index }) => {
	// const color =
	// 	contributionLevel === 'NONE'
	// 		? 'bg-gray-300'
	// 		: contributionLevel === 'FIRST_QUARTILE'
	// 		? 'bg-rose-300'
	// 		: contributionLevel === 'SECOND_QUARTILE'
	// 		? 'bg-rose-500'
	// 		: contributionLevel === 'THIRD_QUARTILE'
	// 		? 'bg-rose-700'
	// 		: 'bg-rose-900'
	const minIndex = 50
	const maxIndex = 330

	const isLeft = index < minIndex
	const isRight = index > maxIndex

	const yLevel = (index - 1) % 7
	const isTopRank = yLevel <= 2
	return (
		<div
			className={`${
				index > 175 ? 'block' : 'hidden'
			} group relative h-2 w-2 rounded-[1px] sm:block sm:h-2.5 sm:w-2.5 sm:rounded-sm sm:border sm:border-black/10 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4`}
			style={{ backgroundColor: color }}
		>
			{/* The dialog over the hovered square */}
			<div
				className={`absolute ${isTopRank ? '-bottom-2' : '-top-2'} ${
					isLeft ? '-left-4' : isRight ? '-right-4' : 'left-1/2'
				} z-10 hidden w-max ${isTopRank ? 'translate-y-full' : '-translate-y-full'} ${
					!isLeft && !isRight && '-translate-x-1/2'
				} rounded-md bg-black/90 py-1 px-4 text-xs text-white group-hover:block sm:hover:block md:text-sm`}
			>
				{count == 0
					? `No contributions on ${date}`
					: count == 1
					? '1 contribution on ' + date
					: count + ' contributions on ' + date}
			</div>
			{/* The triangle */}
			<div
				className={`absolute ${
					isTopRank
						? '-bottom-1 z-10 translate-y-full -rotate-[135deg]'
						: '-top-1 -translate-y-full rotate-45'
				} right-1/2 hidden h-2 w-2 translate-x-1/2 bg-gradient-to-br from-[#0000_50%] to-[rgb(35_39_42_/_0.9)_50%] hover:block group-hover:block`}
			></div>
		</div>
	)
}

export default ContributionSquare
