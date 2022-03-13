import React from 'react'
import AboutCard from './AboutCard'
import { Calendar, Award, Book } from 'react-feather'

const About: React.FC = () => {
	return (
		<section className="bg-gray-100 p-6 md:p-10">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-3 text-4xl font-bold">About me</h2>
				<p className="mb-2 max-w-[80ch] text-sm md:mb-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aperiam repellat. Voluptas quas
					libero minima ea incidunt! Inventore similique ipsa, animi magnam culpa quia aliquid, reiciendis,
					odit ullam deserunt saepe omnis.
				</p>
				<section className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
					<AboutCard
						title="First line of code"
						subtitle="03 september 2019"
						date="2019-09-03"
						Icon={Calendar}
					/>
					<AboutCard
						title="First software engineering job"
						subtitle="16 august 2021"
						date="2019-08-18"
						Icon={Award}
					/>
					<AboutCard title="Total projects" subtitle="43" Icon={Book} />
				</section>
			</div>
		</section>
	)
}

export default About
