import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { GitHub, Package, Twitter } from 'react-feather'
import Demo from './Demo'

export const SpideySense: React.FC = () => {
	return (
		<div id="spidey-sense" className="text-[#f4f4f5]">
			<ProjectTitle>Spidey Sense</ProjectTitle>
			<ProjectDescription>
				April 2026 <ProjectTag isWork={false} />
				<br />
				<br />
				An npm package that lets you vibe code directly from your website. Add the Vite or Next.js plugin, click any
				element in your local React app, type what you want changed and Claude or Codex edits the source files on
				disk. Multiple jobs run in parallel, each element keeping a colored outline and status badge while its agent
				works.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://x.com/whosmatu/status/2052794347209589216" Icon={Twitter} text="My tweet" />
				<Link href="https://github.com/imMatheus/spidey-sense" Icon={GitHub} text="Repository" />
				<Link href="https://www.npmjs.com/package/spidey-sense" Icon={Package} text="npm" />
			</LinkWrapper>
			<Demo />
		</div>
	)
}

export default SpideySense
