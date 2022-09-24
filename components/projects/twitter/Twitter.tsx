import React, { useEffect, useRef } from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub, ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import Card from './Card'

const Twitter: React.FC = ({}) => {
	return (
		<div id="twitter" className="text-[rgb(231_233_234)]">
			<ProjectTitle>Twitter clone</ProjectTitle>
			{/* <ProjectDescription>
				A very simple Twitter built with Next.js and tailwind. As of now, the Twitter does not contain many articles,
				but it was a fun project and one of the first things I built with Next.js. I have plans on updating the project
				but it&apos;s not something on my near bucket list, unfortunately.
			</ProjectDescription> */}
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/twitter-clone" Icon={GitHub} text="Repository" isWhite />
				<Link href="https://twitter-clone-immatheus.vercel.app" Icon={ExternalLink} text="Live site" isWhite />
			</LinkWrapper>
			<Card />
		</div>
	)
}

export default Twitter
