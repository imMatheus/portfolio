import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { ExternalLink, GitHub } from 'react-feather'
import { DaijDemo } from './DaijDemo'

export const Daij: React.FC = () => {
	return (
		<div id="daij">
			<ProjectTitle>Daij</ProjectTitle>
			<ProjectDescription>
				March 2026, <ProjectTag isWork={false} />
				<br />
				<br />I used <a href="https://strudel.cc/">Strudel</a> to generate the music via each of the 3 big models via
				their CLI. Then I made a website where users can listen to all the songs and vote to determine the best LLM
				for music taste.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://daij.net" Icon={ExternalLink} text="Live Site" />
				<Link href="https://github.com/imMatheus/daij" Icon={GitHub} text="GitHub" />
			</LinkWrapper>
			<DaijDemo />
		</div>
	)
}
