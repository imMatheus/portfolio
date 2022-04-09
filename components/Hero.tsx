import React from 'react'
import ProjectsShowCase from './ProjectsShowCase'
import { GitHub, Linkedin } from 'react-feather'
import Link from 'next/link'

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
		<main className="mx-auto max-w-7xl px-6 py-10 lg:py-20">
			<header className="mb-10">
				<h1 className="max-w-3xl font-grotesk text-2xl font-semibold leading-relaxed tracking-wide lg:text-5xl lg:leading-relaxed">
					Hello! Im<HeaderSpan>Matheus Mendes</HeaderSpan> and im a
					<HeaderSpan>full-stack engineer</HeaderSpan>
				</h1>
				<div className="flex items-center gap-4">
					<a href="https://github.com/imMatheus" target="_blank" rel="noreferrer">
						<GitHub className="h-5 w-5 cursor-pointer" />
					</a>

					<a href="https://www.linkedin.com/in/matheus-mendes-447993228/" target="_blank" rel="noreferrer">
						<Linkedin className="h-5 w-5 cursor-pointer" />
					</a>
				</div>
			</header>

			<ProjectsShowCase pinnedItems={pinnedItems} />
		</main>
	)
}

export default Hero
