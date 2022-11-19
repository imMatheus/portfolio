import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import ProjectDescription from '../ProjectDescription'
import { GitHub, ExternalLink } from 'react-feather'
import Cube from './Cube'

const RubiksCube: React.FC = ({}) => {
	return (
		<div id="rubiks-cube">
			<ProjectTitle>CSS only Rubiks cube</ProjectTitle>
			<ProjectDescription>
				A very simple blog built with Next.js and tailwind. As of now, the blog does not contain many articles, but it
				was a fun project and one of the first things I built with Next.js. I have plans on updating the project but
				it&apos;s not something on my near bucket list, unfortunately.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/css-only-rubiks-cube" Icon={GitHub} text="Repository" />
				<Link href="https://rubiks-cube-eight.vercel.app/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
			<Cube />
		</div>
	)
}

export default RubiksCube
