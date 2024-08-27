import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { ExternalLink, GitHub } from 'react-feather'
import { ComponentDemo } from './ComponentDemo'
import { ProjectWrapper } from '..'

interface VercelUiProps {}

const VercelUi: React.FC<VercelUiProps> = ({}) => {
	return (
		<div id="vercel-ui" className="vercel-ui-style-wrapper font-sans text-white">
			<ProjectWrapper>
				<ProjectTitle>Vercel UI</ProjectTitle>
				<ProjectDescription>
					Design library inspired by Vercels design system. It&apos;s the same concept as ShadcnUI but does tackle some
					issue I felt ShadcnUI skips ove. Like handling multi-part components with multiple different sizes, for
					example
				</ProjectDescription>
				<LinkWrapper>
					{/* <Link href="https://github.com/imMatheus/vercel-ui" Icon={GitHub} text="Repository" />
				<Link href="https://vercel-ui-phi.vercel.app/" Icon={ExternalLink} text="Live site" /> */}
					<a
						className="flex h-8 max-w-full select-none items-center justify-center gap-0.5 text-ellipsis rounded-md border border-transparent bg-[var(--ds-gray-1000)] px-1.5 text-sm font-medium leading-5 text-[var(--ds-background-100)] transition-colors hover:bg-[#ccc]"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/imMatheus/vercel-ui"
					>
						<GitHub className="h-4 w-4 flex-shrink-0" /> Repository
					</a>
					<a
						className="flex h-8 max-w-full select-none items-center justify-center gap-0.5 text-ellipsis rounded-md border border-transparent bg-[var(--ds-gray-1000)] px-1.5 text-sm font-medium leading-5 text-[var(--ds-background-100)] transition-colors hover:bg-[#ccc]"
						target="_blank"
						rel="noreferrer"
						href="https://vercel-ui-phi.vercel.app/"
					>
						<ExternalLink className="h-4 w-4 flex-shrink-0" /> Live site
					</a>
				</LinkWrapper>
			</ProjectWrapper>
			<div className="mt-6">
				<ComponentDemo />
			</div>
		</div>
	)
}

export default VercelUi
