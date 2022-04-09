import React from 'react'
import Firedum from '@/components/projects/firedum/Firedum'
import ProjectsText from './ProjectsText'
import LucioCode from './luciocode/LucioCode'
import Blog from './blog/Blog'
import Coolors from './colors/Colors'

interface Props {
	contributionsCollection: any
}

export const ProjectWrapper: React.FC = ({ children }) => {
	return <div className="w-screen overflow-hidden p-10">{children}</div>
}

const Projects: React.FC<Props> = ({}) => {
	return (
		<div className="relative w-screen">
			<ProjectsText />
			<section className="bg-apple">
				<ProjectWrapper>
					<LucioCode />
				</ProjectWrapper>
			</section>
			<section className="bg-bee">
				<ProjectWrapper>
					<Firedum />
				</ProjectWrapper>
			</section>
			<section className="bg-blurple">
				<ProjectWrapper>
					<Blog />
				</ProjectWrapper>
			</section>

			<Coolors />

			<section className="min-h-screen w-screen overflow-hidden bg-carnelian p-10 font-bold">
				<h2 className="text-7xl font-bold">Design skills 03</h2>
			</section>
		</div>
	)
}

export default Projects
