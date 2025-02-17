import React from 'react'
import ProjectsShowCase from './ProjectsShowCase'
import { GitHub, Linkedin } from 'react-feather'
import styles from './spacer.module.scss'

const HeaderSpan: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<span className="mx-2 inline-block transition-transform hover:rotate-2 even:hover:-rotate-2">
			<span className="relative">
				<span className="absolute -bottom-2 -right-2 hidden h-full w-full rounded-md border border-black bg-white transition-all md:inline-block"></span>
				<span className="absolute -bottom-1 -right-1  hidden h-full w-full rounded-md border border-black bg-white transition-all md:inline-block"></span>
				<span className="relative rounded-md border border-black bg-white px-2 py-0">{children}</span>
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
			<main className="relative mx-auto max-w-7xl px-6 py-10 lg:py-20">
				<header className="mb-10">
					<h1 className="max-w-[25ch] font-grotesk text-lg font-semibold leading-relaxed tracking-wide sm:text-3xl lg:text-5xl lg:leading-relaxed">
						Hello! Im <HeaderSpan>Matheus Mendes</HeaderSpan> and im a <HeaderSpan>software engineer</HeaderSpan>
					</h1>
					<div className="flex items-center gap-4">
						<a href="https://github.com/imMatheus" target="_blank" rel="noreferrer" className="group relative">
							<div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors group-hover:bg-gray-800/10 sm:h-10 sm:w-10"></div>
							<GitHub className="relative h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />
						</a>

						<a href="https://x.com/whosmatu" target="_blank" rel="noreferrer" className="group relative">
							<div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors group-hover:bg-gray-800/10 sm:h-10 sm:w-10"></div>
							<svg viewBox="0 0 24 24" aria-hidden="true" className="relative h-5 w-5 cursor-pointer sm:h-6 sm:w-6">
								<g>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
								</g>
							</svg>
						</a>

						<a
							href="https://www.linkedin.com/in/matheus-mendes-dev/"
							target="_blank"
							rel="noreferrer"
							className="group relative"
						>
							<div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors group-hover:bg-gray-800/10 sm:h-10 sm:w-10"></div>
							<Linkedin className="relative h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />
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
