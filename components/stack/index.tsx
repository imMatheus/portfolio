import React from 'react'
import ContributionView from './ContributionView'
import OnTheHorizon from './OnTheHorizon'
import StackGrid from './StackGrid'

interface Props {
	contributionsCollection: any
}

const Title: React.FC = ({ children }) => {
	return <h2 className="mb-3 text-5xl font-bold lg:text-7xl">{children}</h2>
}

interface ComponentChipProps {
	className?: string
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
		<section className="mx-auto w-screen max-w-7xl space-y-8 bg-white p-5 pb-0 sm:space-y-20 md:pt-10 lg:space-y-28">
			<div>
				<Title>What do i know?</Title>

				<div className="relative mb-5">
					<h3 className="mb-1 text-2xl font-bold">Front-end development</h3>
					<ul className="flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
						<CompetentChip>HTML</CompetentChip>
						<CompetentChip>CSS</CompetentChip>
						<CompetentChip>SASS/SCSS</CompetentChip>
						<CompetentChip>Tailwind</CompetentChip>
						<CompetentChip>Chakra UI</CompetentChip>
						<CompetentChip>UI/UX</CompetentChip>
						<CompetentChip>React</CompetentChip>
						<CompetentChip>React Native</CompetentChip>
						<CompetentChip>Redux</CompetentChip>
						<CompetentChip>Next.js</CompetentChip>
						<CompetentChip>Svelte</CompetentChip>
					</ul>
				</div>

				<h3 className="mb-1 text-2xl font-bold">API</h3>
				<ul className="mb-5 flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
					<CompetentChip>REST</CompetentChip>
					<CompetentChip>AXIOS</CompetentChip>
					<CompetentChip>tRPC</CompetentChip>
					<CompetentChip>Node.js</CompetentChip>
					<CompetentChip>GraphQL</CompetentChip>
					<CompetentChip>Apollo</CompetentChip>
				</ul>

				<h3 className="mb-1 text-2xl font-bold">Back-end development</h3>
				<ul className="mb-5 flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
					<CompetentChip>Express</CompetentChip>
					<CompetentChip>Nest.js</CompetentChip>
					<CompetentChip>MongoDB</CompetentChip>
					<CompetentChip>Mongoose</CompetentChip>
					<CompetentChip>Firebase</CompetentChip>
					<CompetentChip>SQL</CompetentChip>
					<CompetentChip>PlanetScale</CompetentChip>
					<CompetentChip>Prisma</CompetentChip>
				</ul>

				<h3 className="mb-1 text-2xl font-bold">Languages</h3>
				<ul className="mb-5 flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
					<CompetentChip>JavaScript</CompetentChip>
					<CompetentChip>Typescript</CompetentChip>
					<CompetentChip>Swedish 🇸🇪</CompetentChip>
					<CompetentChip>English 🏴󠁧󠁢󠁥󠁮󠁧󠁿</CompetentChip>
					<CompetentChip>Portuguese 🇵🇹</CompetentChip>
					<CompetentChip>Spanish 🇪🇸</CompetentChip>
				</ul>

				<h3 className="mb-1 text-2xl font-bold">Devops & CI/CD</h3>
				<ul className="mb-5 flex max-w-2xl flex-wrap gap-x-2 gap-y-2 pl-0 text-xl">
					<CompetentChip>Docker</CompetentChip>
					<CompetentChip>Git</CompetentChip>
					<CompetentChip>GitHub</CompetentChip>
					<CompetentChip>Jest</CompetentChip>
					<CompetentChip>EsLint</CompetentChip>
					<CompetentChip>Cypress</CompetentChip>
				</ul>
			</div>

			<div>
				<Title>What am i up too lately?</Title>
				<p className="mb-2 max-w-4xl text-base text-black">
					I spend most of my time writing code for my side projects. I love learning new stuff and always try to make
					sure I understand the technologies I use. As a competitive person, I&apos;m always up for a challenge and love
					putting my skills to the test on websites like CSS Battles and LeetCode
				</p>
				<ContributionView contributionsCollection={contributionsCollection} />
			</div>
			<OnTheHorizon />
		</section>
	)
}

export default Stack
