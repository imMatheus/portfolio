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
		<div className={`group relative h-2.5 w-2.5 rounded-sm`} style={{ backgroundColor: color }}>
			<div className="absolute top-0 right-1/2 z-10 hidden w-max -translate-y-full translate-x-1/2 rounded-md bg-black/90 py-1 px-4 text-xs text-white group-hover:block md:text-sm">
				{count == 0
					? `No contributions on ${date}`
					: count == 1
					? '1 contribution on ' + date
					: count + ' contributions on ' + date}
			</div>
		</div>
	)
}

export default ContributionSquare
