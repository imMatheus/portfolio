import React from 'react'
import ContributionView from './ContributionView'
import OnTheHorizon from './OnTheHorizon'
import StackGrid from './StackGrid'

interface Props {
	contributionsCollection: any
}

const Stack: React.FC<Props> = ({ contributionsCollection }) => {
	return (
		<section className="mx-auto min-h-screen w-screen max-w-7xl space-y-8 bg-white p-5 pb-0 md:pt-10 lg:space-y-12">
			<div>
				<h2 className="mb-2 text-5xl font-bold lg:text-7xl">What do i know?</h2>

				<h3 className="mt-10 mb-1 text-3xl font-bold">Javascript frameworks</h3>
				<ul className="mb-20 list-disc space-y-2 pl-5 text-xl">
					<li>
						<span className="rounded-md border border-black px-2 py-0">Tailiwnd</span>
					</li>
					<li>
						<span className="rounded-md border border-black px-2 py-0">Tailiwnd</span>
					</li>
					<li>
						<span className="rounded-md border border-black px-2 py-0">Tailiwnd</span>
					</li>
					<li>
						<span className="rounded-md border border-black px-2 py-0">Tailiwnd</span>
					</li>
				</ul>

				<StackGrid />
			</div>

			<div>
				<h2 className="mb-2 text-5xl font-bold lg:text-7xl">What am i up too lately?</h2>
				<p className="mb-2 max-w-4xl text-black">
					I spend most of time writing code for side project of mine with my main focus being on LucioCode. I
					love learning new stuff and and always try to make sure i understand the technologies I use. Im
					always up for a challenge and love coding challenges from CSS battles and LeetCode
				</p>
				<ContributionView contributionsCollection={contributionsCollection} />
			</div>

			<OnTheHorizon />
		</section>
	)
}

export default Stack
