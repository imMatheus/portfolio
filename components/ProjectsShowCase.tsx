import React from 'react'
import StackCard from '@/components/stack/StackCard'

const ProjectsShowCase: React.FC = ({}) => {
	return (
		<>
			<h2 className="mb-5 text-center text-3xl">Some of my projects</h2>
			<section className="mx-auto mb-12 grid max-w-[85rem] grid-cols-1 justify-center gap-6 bg-blue-600/0 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
				<StackCard title="LucioCode">
					A website that aims to simplified all aspects of teaching code in classrooms
				</StackCard>
				<StackCard title="Firedum">NPM package to help populate a firebase database with data</StackCard>
				<StackCard title="LucioCode">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore numquam itaque.
				</StackCard>
				<StackCard title="LucioCode">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci.
				</StackCard>
				<StackCard title="LucioCode">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci.
				</StackCard>
			</section>
		</>
	)
}

export default ProjectsShowCase
