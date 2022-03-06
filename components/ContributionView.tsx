import React, { useState } from 'react'
import ContributionSquare from './ContributionSquare'

interface ContributionViewProps {
	contributionsCollection: any
}

const ContributionView: React.FC<ContributionViewProps> = ({ contributionsCollection }) => {
	console.log(contributionsCollection)
	return (
		<div className="">
			<h3 className="mb-1 text-lg font-bold md:text-xl">
				Total contributions: {contributionsCollection.totalContributions}
			</h3>
			<div className="grid w-max grid-flow-col grid-rows-[repeat(7,1fr)] gap-0.5 p-1">
				{/* making sure weekdays line up */}
				{contributionsCollection.weeks[0].contributionDays[0].weekday !== 0 &&
					Array.from(Array(1).keys()).map((i) => <div key={i}></div>)}

				{contributionsCollection.weeks.map((week: any) => {
					return week.contributionDays.map((day: any) => {
						// console.log(day)

						return (
							<ContributionSquare
								key={day.date}
								date={day.date}
								color={day.color}
								count={day.contributionCount}
								contributionLevel={day.contributionLevel}
							/>
						)
					})
				})}
			</div>
		</div>
	)
}

export default ContributionView
