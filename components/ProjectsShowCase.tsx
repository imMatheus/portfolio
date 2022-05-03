import React from 'react'
import StackCard from '@/components/ProjectShowCaseCard'

interface Props {
	pinnedItems: any
}

const ProjectsShowCase: React.FC<Props> = ({ pinnedItems }) => {
	const projectLinks = ['luciocode', 'firedum', 'sorter', 'colors', 'blog']
	return (
		<>
			<h2 className="mb-5 text-center text-3xl font-semibold sm:text-4xl">Some of my projects</h2>
			<section className="mx-auto mb-12 grid max-w-[85rem] grid-cols-1 justify-center gap-6 bg-blue-600/0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
				{pinnedItems?.map((pinnedItem: any, index: number) => (
					<StackCard
						title={pinnedItem.name}
						color={pinnedItem.primaryLanguage.color}
						stars={pinnedItem.stargazerCount}
						description={pinnedItem.description}
						language={pinnedItem.primaryLanguage.name}
						link={projectLinks[index]}
						commits={pinnedItem.refs.nodes[0].target.history.totalCount}
						key={pinnedItem.name}
					>
						A website that aims to simplified all aspects of teaching code in classrooms environment
					</StackCard>
				))}
			</section>
		</>
	)
}

export default ProjectsShowCase
