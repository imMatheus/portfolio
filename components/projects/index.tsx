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
	return <div className="mx-auto w-screen max-w-7xl overflow-hidden p-4 sm:py-6 sm:px-8">{children}</div>
}

const Projects: React.FC<Props> = ({}) => {
	return (
		<div className="relative w-screen">
			{/* <ProjectsText /> */}
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
			<Spacer url="bee-blurple.svg" />
			<section className="bg-blurple">
				<ProjectWrapper>
					<Sorter />
				</ProjectWrapper>
			</section>
			<Spacer url="blurple-black.svg" />

			<Coolors />
			<Spacer url="black-white.svg" />

			<section className="bg-white">
				<ProjectWrapper>
					<Blog />
				</ProjectWrapper>
			</section>
			<Spacer url="white-white.svg" />
		</div>
	)
}

export default Projects
