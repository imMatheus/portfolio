import React from 'react'
import { cn } from 'lib/utils'

interface ContributionSquareProps {
	count: number
	contributionLevel: string
	date: any
	color: string
	index: number
}

const ContributionSquare: React.FC<ContributionSquareProps> = ({ count, color, contributionLevel, date, index }) => {
	const minIndex = 50
	const maxIndex = 330

	const isLeft = index < minIndex
	const isRight = index > maxIndex

	const yLevel = (index - 1) % 7
	const isTopRank = yLevel <= 2
	return (
		<div
			className={cn(
				index > 175 ? 'block' : 'hidden',
				'group relative h-2 w-2 rounded-[1px] sm:block sm:h-2.5 sm:w-2.5 sm:rounded-sm sm:border sm:border-black/10 xl:h-4 xl:w-4'
			)}
			style={{ backgroundColor: color }}
		>
			{/* The dialog over the hovered square */}
			<div
				className={cn(
					`absolute ${isTopRank ? '-bottom-2' : '-top-2'} ${
						isLeft ? '-left-4' : isRight ? '-right-4' : 'left-1/2'
					} z-10 hidden w-max ${isTopRank ? 'translate-y-full' : '-translate-y-full'} ${
						!isLeft && !isRight && '-translate-x-1/2'
					} rounded-md bg-black/90 px-4 py-1 text-xs text-white group-hover:block sm:hover:block md:text-sm`
				)}
			>
				{count == 0
					? `No contributions on ${date}`
					: count == 1
					? '1 contribution on ' + date
					: count + ' contributions on ' + date}
			</div>
			{/* The triangle */}
			<div
				className={cn(
					'absolute right-1/2 hidden h-2 w-2 translate-x-1/2 bg-gradient-to-br from-[#0000_50%] to-[rgb(35_39_42_/_0.9)_50%] hover:block group-hover:block',
					isTopRank ? '-bottom-1 z-10 translate-y-full -rotate-[135deg]' : '-top-1 -translate-y-full rotate-45'
				)}
			/>
		</div>
	)
}

export default ContributionSquare
