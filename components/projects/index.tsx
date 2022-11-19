import React from 'react'
import Firedum from './firedum/Firedum'
import LucioCode from './luciocode/LucioCode'
import Coolors from './colors/Colors'
import Sorter from './sorter/Sorter'
import Spacer from '../Spacer'
import Twitter from './twitter/Twitter'
import Cube from './rubics-cube'
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

			<Spacer url="apple-black.svg" />

			<section className="bg-[#000]">
				<ProjectWrapper>
					<Twitter />
				</ProjectWrapper>
			</section>

			<Spacer url="black-bee.svg" />
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
					<Cube />
				</ProjectWrapper>
			</section>
			<Spacer url="white-white.svg" />
		</div>
	)
}

export default Projects
