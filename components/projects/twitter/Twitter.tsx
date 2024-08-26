import React, { useEffect, useRef } from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub, ExternalLink } from 'react-feather'
import Card from './Card'

const Twitter: React.FC = ({}) => {
	return (
		<div id="twitter" className="text-[rgb(231_233_234)]">
			<ProjectTitle>Twitter clone</ProjectTitle>

			<LinkWrapper>
				<Link href="https://github.com/imMatheus/twitter-clone" Icon={GitHub} text="Repository" />
				<Link href="https://twitter-clone-immatheus.vercel.app" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
			<Card />
		</div>
	)
}

export default Twitter
