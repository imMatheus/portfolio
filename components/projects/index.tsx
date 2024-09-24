import React, { PropsWithChildren } from 'react'
import LucioCode from './luciocode/LucioCode'

import Sorter from './sorter/Sorter'
import Spacer from '../Spacer'
import Twitter from './twitter/Twitter'
import Cube from './rubics-cube'
import Dema from './dema'
import VercelUi from './vercel-ui/VercelUi'
import { Acasting } from './acasting/Acasting'
interface Props {
	contributionsCollection: any
}

export const ProjectWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="mx-auto w-screen max-w-7xl overflow-hidden p-4 sm:px-8 sm:py-6">{children}</div>
}

const Projects: React.FC<Props> = ({}) => {
	return (
		<div className="relative w-screen">
			<section className="relative bg-dema">
				<ProjectWrapper>
					<Dema />
				</ProjectWrapper>
			</section>

			<Spacer url="dema-black.svg" />

			<section className="bg-[#000]">
				<VercelUi />
			</section>

			<Spacer url="black-white.svg" />

			<section className="bg-white">
				<ProjectWrapper>
					<Cube />
				</ProjectWrapper>
			</section>

			<Spacer url="white-purple.svg" />

			{/* <Spacer url="apple-white.svg" /> */}

			{/* <section className="bg-purple-800"> */}
			{/* <section className="bg-purple-800"> */}
			{/* <section className="bg-[#8338ec]"> */}
			{/* <section className="bg-[#8E68DE]"> */}
			{/* <section className="bg-[#3E1D86]"> */}
			<section className="bg-[#462197]">
				{/* <section className="bg-[#7f56dae6]"> */}
				<ProjectWrapper>
					<Acasting />
				</ProjectWrapper>
			</section>

			<Spacer url="purple-apple-2.svg" />

			<section className="bg-apple">
				<ProjectWrapper>
					<LucioCode />
				</ProjectWrapper>
			</section>

			<Spacer url="apple-white.svg" />

			{/* <section className="bg-[#000]">
				<ProjectWrapper>
					<Twitter />
				</ProjectWrapper>
			</section>

			<Spacer url="black-bee.svg" /> */}

			{/* <Spacer url="bee-blurple.svg" />
			<section className="bg-blurple">
				<ProjectWrapper>
					<Sorter />
				</ProjectWrapper>
			</section>
			<Spacer url="blurple-white.svg" /> */}
		</div>
	)
}

export default Projects
