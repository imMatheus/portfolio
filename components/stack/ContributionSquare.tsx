import React from 'react'

interface ContributionSquareProps {
	count: number
	contributionLevel: string
	date: any
	color: string
}

const ContributionSquare: React.FC<ContributionSquareProps> = ({ count, color, contributionLevel, date }) => {
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
	return (
		<div
			className={`group relative h-2 w-2 rounded-sm border border-black/10  md:h-2.5 md:w-2.5`}
			style={{ backgroundColor: color }}
		>
			<div className="absolute -top-2 right-1/2 z-10 hidden w-max -translate-y-full translate-x-1/2 rounded-md bg-black/90 py-1 px-4 text-xs text-white hover:block group-hover:block md:text-sm">
				{count == 0
					? `No contributions on ${date}`
					: count == 1
					? '1 contribution on ' + date
					: count + ' contributions on ' + date}
			</div>
			<div className="absolute -top-1 right-1/2 hidden h-2 w-2 translate-x-1/2 -translate-y-full rotate-45 bg-gradient-to-br from-[#0000_50%] to-[rgb(35_39_42_/_0.9)_50%] hover:block group-hover:block"></div>
		</div>
	)
}

export default ContributionSquare
