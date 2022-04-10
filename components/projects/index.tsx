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
			<section className="bg-white">
				<ProjectWrapper>
					<Blog />
				</ProjectWrapper>
			</section>

			<Coolors />
		</div>
	)
}

export default Projects
