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
				The project you find below was made with a total of ZERO lines of Javascript, its all just CSS. Every animation,
				hover effect and button click is just ta combination of some clever CSS code
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
