import React from 'react'
import Firedum from '@/components/projects/firedum/Firedum'
import ProjectsText from './ProjectsText'

interface Props {
	contributionsCollection: any
}

const Projects: React.FC<Props> = ({ contributionsCollection }) => {
	return (
		<div className="relative w-screen">
			{/* <div className="relative min-h-[500vh] w-screen"> */}
			<ProjectsText />
			<section className="min-h-screen w-screen overflow-hidden bg-apple p-10 font-bold">
				<h2 className="text-7xl font-bold">LucioCode 01</h2>
			</section>
			<Firedum />
			<section className="min-h-screen w-screen overflow-hidden bg-carnelian p-10 font-bold">
				<h2 className="text-7xl font-bold">Design skills 03</h2>
			</section>
		</div>
	)
}

export default Projects
