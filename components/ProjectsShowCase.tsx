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
				description={item.description}
				link={link}
			/>
		)
	}

	const cards = [
		<StackCard key="midjourney" title="Midjourney" description="Making images look good" link="midjourney" isWork />,
		makePinnedCard('jefftube', 'jmail'),
		<StackCard key="dema" title="Dema" description="Analytics platform for E-commerce" link="dema" isWork />,
		makePinnedCard('codex', 'codex'),
		makePinnedCard('css-only-rubiks-cube', 'rubiks-cube'),
		makePinnedCard('daij', 'daij'),
		makePinnedCard('vercel-ui', 'vercel-ui'),
		makePinnedCard('lucio', 'luciocode'),
		<StackCard key="acasting" title="Acasting.se" description="Modern casting platform" link="acasting" isWork />
	].filter(Boolean) as React.ReactElement[]

	return (
		<>
			<h2 className="mb-5 text-center text-3xl font-semibold sm:text-4xl">Things I&apos;ve worked on</h2>
			<section className="mx-auto mb-12 grid max-w-[85rem] grid-cols-1 justify-center gap-6 bg-blue-600/0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
				{cards.map((card, i) =>
					React.cloneElement(card, { className: i >= 3 ? 'hidden sm:block' : '' })
				)}
			</section>
		</>
	)
}

export default ProjectsShowCase
