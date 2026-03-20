import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub } from 'react-feather'
import { Twitter } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import Demo from './Demo'

export const Codex: React.FC = () => {
	return (
		<div className="text-[#f4f4f5]">
			<ProjectTitle>Codex</ProjectTitle>
			<ProjectDescription>
				2025 <ProjectTag isWork={false} />
				<br />
				<br />
				I forked  fork of OpenAI&apos;s Codex CLI. An open-source coding agent that runs in your terminal.
				Try the Tetris game below.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://x.com/whosmatu/status/2028292331708039518" Icon={Twitter} text="My tweet" />
				<Link href="https://github.com/imMatheus/codex" Icon={GitHub} text="Repository" />
			</LinkWrapper>
			<Demo />
		</div>
	)
}

export default Codex
