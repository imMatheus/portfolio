'use client'

import React, { PropsWithChildren } from 'react'
import LucioCode from './luciocode/LucioCode'

import Sorter from './sorter/Sorter'
import Spacer from '../Spacer'
import Twitter from './twitter/Twitter'
import Cube from './rubics-cube'
import Dema from './dema'
import VercelUi from './vercel-ui/VercelUi'
interface Props {
	contributionsCollection: any
}

export const ProjectWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="mx-auto w-screen max-w-7xl overflow-hidden p-4 sm:px-8 sm:py-6">{children}</div>
}

const Projects: React.FC<Props> = ({}) => {
	return (
		<div className="relative w-screen">
			<section className="bg-dema">
				<ProjectWrapper>
					<Dema />
				</ProjectWrapper>
			</section>

			<Spacer url="dema-black.svg" />

			<section className="bg-[#000]">
				<ProjectWrapper>
					<VercelUi />
				</ProjectWrapper>
			</section>

			<Spacer url="black-white.svg" />

			<section className="bg-white">
				<ProjectWrapper>
					<Cube />
				</ProjectWrapper>
			</section>

			<Spacer url="white-apple.svg" />

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
