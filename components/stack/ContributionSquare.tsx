import React, { useState } from 'react'
import { cn } from 'lib/utils'

interface ContributionSquareProps {
	count: number
	date: string
	color: string
	index: number
}

const ContributionSquare: React.FC<ContributionSquareProps> = ({ count, color, date, index }) => {
	const [hovered, setHovered] = useState(false)

	const isLeft = index < 50
	const isRight = index > 330
	const isTop = (index - 1) % 7 <= 2

	const label = count === 0 ? `No contributions on ${date}` : `${count} contribution${count > 1 ? 's' : ''} on ${date}`

	return (
		<div
			className={cn(
				index > 175 ? 'block' : 'hidden',
				'relative h-2 w-2 rounded-[1px] sm:block sm:h-2.5 sm:w-2.5 sm:rounded-sm sm:border sm:border-black/10 xl:h-4 xl:w-4'
			)}
			style={{ backgroundColor: color }}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{hovered && (
				<>
					<div
						className={cn(
							'absolute z-10 w-max rounded-md bg-black/90 px-4 py-1 text-xs text-white md:text-sm',
							isTop ? '-bottom-2 translate-y-full' : '-top-2 -translate-y-full',
							isLeft ? '-left-4' : isRight ? '-right-4' : 'left-1/2 -translate-x-1/2'
						)}
					>
						{label}
					</div>
					<div
						className={cn(
							'absolute right-1/2 z-10 h-2 w-2 translate-x-1/2 bg-gradient-to-br from-[#0000_50%] to-[rgb(35_39_42_/_0.9)_50%]',
							isTop ? '-bottom-1 translate-y-full -rotate-[135deg]' : '-top-1 -translate-y-full rotate-45'
						)}
					/>
				</>
			)}
		</div>
	)
}

export default ContributionSquare
