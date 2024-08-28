import React, { PropsWithChildren, ReactNode } from 'react'
import ContributionView from './ContributionView'
import Image from 'next/image'
import { CSSBattles } from './CSSBattles'

interface Props {
	contributionsCollection: any
}

export const Title: React.FC<PropsWithChildren> = ({ children }) => {
	return <h2 className="mb-3 text-3xl font-bold">{children}</h2>
}

interface ComponentChipProps {
	className?: string
	children?: ReactNode
}

const CompetentChip: React.FC<ComponentChipProps> = ({ className, children }) => {
	return (
		<li className="transition-transform odd:hover:rotate-3 even:hover:-rotate-3">
			<span className={`rounded-md border px-3 py-0.5 text-base ${className}`}>{children}</span>
		</li>
	)
}

const Stack: React.FC<Props> = ({ contributionsCollection }) => {
	return (
		<section className="mx-auto w-screen max-w-7xl space-y-8 bg-white p-5 pb-0 sm:space-y-20 md:pt-10">
			<div>
				<Title>What do I know?</Title>

				<div className="relative mb-5">
					<h3 className="mb-1 text-base font-bold">Front-end development</h3>
					<ul className="flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
						<CompetentChip>React</CompetentChip>
						<CompetentChip>React Native</CompetentChip>
						<CompetentChip>Redux</CompetentChip>
						<CompetentChip>Next.js</CompetentChip>
						<CompetentChip>Svelte</CompetentChip>
						<CompetentChip>Tailwind</CompetentChip>
						<CompetentChip>Chakra UI</CompetentChip>
						<CompetentChip>SASS</CompetentChip>
					</ul>
				</div>

				<h3 className="mb-1 text-base font-bold">API</h3>
				<ul className="mb-5 flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
					<CompetentChip>REST</CompetentChip>
					<CompetentChip>tRPC</CompetentChip>
					<CompetentChip>Node.js</CompetentChip>
					<CompetentChip>GraphQL</CompetentChip>
					<CompetentChip>Apollo</CompetentChip>
				</ul>

				<h3 className="mb-1 text-base font-bold">Back-end development</h3>
				<ul className="mb-5 flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
					<CompetentChip>SQL</CompetentChip>
					<CompetentChip>Express</CompetentChip>
					<CompetentChip>Nest.js</CompetentChip>
					<CompetentChip>MongoDB</CompetentChip>
					<CompetentChip>Mongoose</CompetentChip>
					<CompetentChip>Prisma</CompetentChip>
					<CompetentChip>Firebase</CompetentChip>
				</ul>

				<h3 className="mb-1 text-base font-bold">Languages</h3>
				<ul className="mb-5 flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
					<CompetentChip>Typescript</CompetentChip>
					<CompetentChip>Golang</CompetentChip>
					<CompetentChip>Swedish 🇸🇪</CompetentChip>
					<CompetentChip>English 🏴󠁧󠁢󠁥󠁮󠁧󠁿</CompetentChip>
					<CompetentChip>Portuguese 🇵🇹</CompetentChip>
					<CompetentChip>Spanish 🇪🇸</CompetentChip>
				</ul>

				<h3 className="mb-1 text-base font-bold">Devops & CI/CD</h3>
				<ul className="mb-5 flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
					<CompetentChip>Docker</CompetentChip>
					<CompetentChip>Jest</CompetentChip>
					<CompetentChip>EsLint</CompetentChip>
					<CompetentChip>Puppeteer</CompetentChip>
				</ul>
			</div>

			<div className="pb-8 md:pb-32">
				{/* <Title>What am I up to lately?</Title>
				<p className="mb-2 max-w-4xl text-base text-black">
					I spend most of my time writing code for my side projects. I love learning new stuff and always try to make
					sure I understand the technologies I use. As a competitive person, I&apos;m always up for a challenge and love
					putting my skills to the test on websites like CSS Battles and LeetCode
				</p> */}
				<CSSBattles />

				<ContributionView contributionsCollection={contributionsCollection} />
			</div>
		</section>
	)
}

export default Stack
