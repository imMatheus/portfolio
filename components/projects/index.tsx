import React from 'react'
import Firedum from '@/components/projects/firedum/Firedum'
import ProjectsText from './ProjectsText'
import LucioCode from './luciocode/LucioCode'
import Blog from './blog/Blog'
import Coolors from './colors/Colors'
import Sorter from './sorter/Sorter'
import Spacer from '../Spacer'
interface Props {
	contributionsCollection: any
}

export const ProjectWrapper: React.FC = ({ children }) => {
	return <div className="w-screen overflow-hidden p-4 sm:p-8">{children}</div>
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

			<Spacer url="apple-bee.svg" />
			<section className="bg-bee">
				<ProjectWrapper>
					<Firedum />
				</ProjectWrapper>
			</section>
			<Spacer url="bee-white.svg" />
			<section className="bg-white">
				<ProjectWrapper>
					<Blog />
				</ProjectWrapper>
			</section>
			<Spacer url="white-black.svg" />

			<Coolors />
			<Spacer url="black-red.svg" />

			<section className="bg-carnelian">
				<ProjectWrapper>
					<Sorter />
				</ProjectWrapper>
			</section>
		</div>
	)
}

export default Projects
