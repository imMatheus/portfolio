import React from 'react'
import StackCard from '@/components/ProjectShowCaseCard'

interface Props {
	pinnedItems: any
}

const ProjectsShowCase: React.FC<Props> = ({ pinnedItems }) => {
	const pinnedByName: Record<string, any> = {}
	pinnedItems?.forEach((item: any) => {
		pinnedByName[item.name] = item
	})

	const makePinnedCard = (name: string, link: string) => {
		const item = pinnedByName[name]
		if (!item) return null
		return (
			<StackCard
				key={name}
				title={item.name}
				color={item.primaryLanguage?.color ?? '#888'}
				stars={item.stargazerCount}
				description={item.description}
				language={item.primaryLanguage?.name ?? ''}
				link={link}
				commits={item.refs?.nodes?.[0]?.target?.history?.totalCount ?? 0}
			/>
		)
	}

	return (
		<>
			<h2 className="mb-5 text-center text-3xl font-semibold sm:text-4xl">Things I&apos;ve worked on</h2>
			<section className="mx-auto mb-12 grid max-w-[85rem] grid-cols-1 justify-center gap-6 bg-blue-600/0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
				<StackCard title="Midjourney" color="#99c100" stars={0} description="Making images look good" language="" link="midjourney" commits={0} isWork />
				{makePinnedCard('jefftube', 'jmail')}
				<StackCard title="Dema" color="#99c100" stars={0} description="Analytics platform for E-commerce" language="" link="dema" commits={0} isWork />
				{makePinnedCard('codex', 'codex')}
				{makePinnedCard('css-only-rubiks-cube', 'rubiks-cube')}
				{makePinnedCard('daij', 'daij')}
				{makePinnedCard('vercel-ui', 'vercel-ui')}
				{makePinnedCard('lucio', 'luciocode')}
				<StackCard title="Acasting.se" color="#462197" stars={0} description="Modern casting platform" language="" link="acasting" commits={0} isWork />
			</section>
		</>
	)
}

export default ProjectsShowCase
