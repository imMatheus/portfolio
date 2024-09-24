import React from 'react'
import StackCard from '@/components/ProjectShowCaseCard'

interface Props {
	pinnedItems: any
}

const ProjectsShowCase: React.FC<Props> = ({ pinnedItems }) => {
	const projectLinks = ['vercel-ui', 'rubiks-cube', 'luciocode']
	return (
		<>
			<h2 className="mb-5 text-center text-3xl font-semibold sm:text-4xl">Things I&apos;ve worked on</h2>
			<section className="mx-auto mb-12 grid max-w-[85rem] grid-cols-1 justify-center gap-6 bg-blue-600/0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
				<StackCard
					title="Dema"
					color="#99c100"
					stars={0}
					description="Analytics platform for E-commerce"
					language=""
					link="dema"
					commits={0}
					isWork
				/>
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
					/>
				))}

				<StackCard
					title="Acasting.se"
					color="#462197"
					stars={0}
					description="Modern casting platform"
					language=""
					link="acasting"
					commits={0}
					isWork
				/>
			</section>
		</>
	)
}

export default ProjectsShowCase
