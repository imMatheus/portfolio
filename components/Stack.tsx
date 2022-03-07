import React from 'react'
import ContributionView from './ContributionView'

interface Props {
	contributionsCollection: any
}

const Stack: React.FC<Props> = ({ contributionsCollection }) => {
	return (
		<section className="sticky top-0 min-h-screen w-screen bg-white p-5 md:p-10">
			<h2 className="mb-3 text-7xl font-bold">What do i know?</h2>

			<ContributionView contributionsCollection={contributionsCollection} />
		</section>
	)
}

export default Stack
