import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { ExternalLink, GitHub } from 'react-feather'
import Demo from './Demo'

export const SfCapitalist: React.FC = () => {
	return (
		<div id="sf-capitalist" className="text-[#fff7ee]">
			<ProjectTitle>SF Capitalist</ProjectTitle>
			<ProjectDescription>
				May 2026 <ProjectTag isWork={false} />
				<br />
				<br />
				An AdVenture Capitalist style idle game about the San Francisco tech scene. You start out mining bitcoin and
				work your way up to funding YC batches, racking H100 clusters and shipping AGI. The full game has three worlds
				(Silicon Valley, China and Europe), managers, upgrades, unlocks, achievements and prestige investors. Below is
				a stripped down but fully playable demo of the Silicon Valley world.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://sf-capitalist.vercel.app" Icon={ExternalLink} text="Play the full game" />
				<Link href="https://github.com/imMatheus/sf-capitalist" Icon={GitHub} text="Repository" />
			</LinkWrapper>
			<Demo />
		</div>
	)
}

export default SfCapitalist
