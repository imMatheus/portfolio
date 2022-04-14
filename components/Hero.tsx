import React from 'react'
import ProjectsShowCase from './ProjectsShowCase'
import { GitHub, Linkedin, Instagram } from 'react-feather'
import styles from './spacer.module.scss'

const HeaderSpan: React.FC = ({ children }) => {
	return (
		<span className="mx-1 inline-block transition-transform hover:rotate-2 even:hover:-rotate-2">
			<span className="relative">
				<span className="absolute -bottom-2 -right-2 hidden h-full w-full rounded-md border border-black bg-white transition-all md:inline-block"></span>
				<span className="absolute -bottom-1 -right-1  hidden h-full w-full rounded-md border border-black bg-white transition-all md:inline-block"></span>
				<span className="relative rounded-md border border-black bg-white px-1 py-0">{children}</span>
			</span>
		</span>
	)
}

interface Props {
	pinnedItems: any
}

const Hero: React.FC<Props> = ({ pinnedItems }) => {
	return (
		<div className="relative">
			{/* <div className="absolute top-36 left-1/2 h-20 w-[50vw] animate-spin bg-apple"></div>
			<div className="absolute top-60 left-1/2 h-20 w-[250vw] -translate-x-1/2 rotate-6 bg-bee "></div>
			<div className="absolute bottom-96 left-1/2 h-20 w-[250vw] -translate-x-1/2 rotate-3 bg-carnelian"></div> */}
			<main className="relative mx-auto max-w-7xl px-6 py-10 lg:py-20">
				<header className="mb-10">
					<h1 className="max-w-3xl font-grotesk text-lg font-semibold leading-relaxed tracking-wide sm:text-3xl lg:text-5xl lg:leading-relaxed">
						Hello! Im<HeaderSpan>Matheus Mendes</HeaderSpan> and im a
						<HeaderSpan>full-stack engineer</HeaderSpan>
					</h1>
					<p className="my-3 text-lg font-semibold">
						Young tech enthusiast specialising in web and app development
					</p>
					<div className="flex items-center gap-4">
						<a href="https://github.com/imMatheus" target="_blank" rel="noreferrer">
							<GitHub className="h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />
						</a>

						<a
							href="https://www.linkedin.com/in/matheus-mendes-447993228/"
							target="_blank"
							rel="noreferrer"
						>
							<Linkedin className="h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />
						</a>
						<a href="https://www.instagram.com/matheus.mendeszsz/" target="_blank" rel="noreferrer">
							<Instagram className="h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />
						</a>
					</div>
				</header>

				<ProjectsShowCase pinnedItems={pinnedItems} />
			</main>

			<div className={styles.spacer}></div>
		</div>
	)
}

export default Hero
