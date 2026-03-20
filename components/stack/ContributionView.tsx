import React from 'react'
import ContributionSquare from './ContributionSquare'
import { Title } from '.'

interface ContributionViewProps {
	contributionsCollection: any
}

const ContributionView: React.FC<ContributionViewProps> = ({ contributionsCollection }) => {
	let index = 0
	const firstWeekday = contributionsCollection.weeks[0].contributionDays[0].weekday

	return (
		<div className="mt-6 w-full max-w-max overflow-x-visible">
			<Title>{contributionsCollection.totalContributions} total public github contributions in the last year</Title>

			<div
				className={`
					relative flex w-full max-w-max justify-end
					before:absolute before:-bottom-2 before:-right-2 before:h-full before:w-full before:rounded-md before:border before:border-black before:bg-white before:transition-all after:absolute after:-bottom-1
					after:-right-1 after:h-full after:w-full after:rounded-md after:border after:border-black after:bg-white after:transition-all lg:before:-bottom-4 lg:before:-right-4 lg:after:-bottom-2 lg:after:-right-2
				`}
			>
				<div className="relative z-10 grid grid-flow-col grid-rows-[repeat(7,1fr)] gap-0.5 rounded-md border border-black bg-white p-2 lg:max-w-max xl:gap-1">
					{Array.from({ length: firstWeekday }, (_, i) => (
						<div key={`spacer-${i}`} />
					))}

					{contributionsCollection.weeks.map((week: any) =>
						week.contributionDays.map((day: any) => (
							<ContributionSquare
								key={day.date}
								date={day.date}
								index={++index}
								color={day.color}
								count={day.contributionCount}
							/>
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default ContributionView
