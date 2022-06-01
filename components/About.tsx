import React from 'react'
import AboutCard from './AboutCard'
import { Calendar, Award, Book } from 'react-feather'

const About: React.FC = () => {
	return (
		<section className="bg-gray-100 p-6 md:p-10">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-3 text-4xl font-bold">About me</h2>
				<p className="mb-2 max-w-[80ch] text-base md:mb-4">
					I am a full-stack developer with a lot of experience in web applications and apps. I have a big
					passion for programming and I always try my best to keep evolving in my role as a developer by
					learning new things. <br /> <br /> I have professional experience working with the MERN stack
					(MongoDB, Express, React, Node.js), Typescript, Firebase, and React Native. But my arsenal of tools
					spread much more than I can fit here. <br />
					<br /> At my current job, I work with introducing and teaching new technologies to passionate
					students at a programming Bootcamp in central Stockholm.
				</p>
				<section className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
					<AboutCard
						title="First line of code"
						subtitle="07 september 2019"
						date="2019-09-07"
						Icon={Calendar}
					/>
					<AboutCard
						title="First software engineering job"
						subtitle="03 juli 2021"
						date="2021-06-03"
						Icon={Award}
					/>
					<AboutCard title="Total projects" subtitle="62" Icon={Book} />
				</section>
			</div>
		</section>
	)
}

export default About
