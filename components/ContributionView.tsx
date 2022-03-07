import React, { useState } from 'react'
import ContributionSquare from './ContributionSquare'

interface ContributionViewProps {
	contributionsCollection: any
}

const ContributionView: React.FC<ContributionViewProps> = ({ contributionsCollection }) => {
	console.log(contributionsCollection)
	return (
		<div className="w-full max-w-max overflow-x-visible">
			<h3 className="mb-1 text-lg font-bold md:text-xl">
				Total contributions: {contributionsCollection.totalContributions}
			</h3>
			<div className="relative flex w-full justify-end">
				<div className="absolute -bottom-2 -right-2 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4"></div>
				<div className="absolute -bottom-1 -right-1 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2"></div>
				<div className="relative grid grid-flow-col grid-rows-[repeat(7,1fr)] gap-0.5 rounded-md border border-black bg-white p-2">
					{/* making sure weekdays line up */}
					{contributionsCollection.weeks[0].contributionDays[0].weekday !== 0 &&
						Array.from(Array(1).keys()).map((i) => <div key={i}></div>)}

					{contributionsCollection.weeks.map((week: any) =>
						week.contributionDays.map((day: any) => (
							<ContributionSquare
								key={day.date}
								date={day.date}
								color={day.color}
								count={day.contributionCount}
								contributionLevel={day.contributionLevel}
							/>
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default ContributionView
