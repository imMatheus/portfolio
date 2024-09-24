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
				October 2022
				<br />
				<br />
				The project below was made with a total of ZERO lines of Javascript, its all just CSS. Every animation, hover
				effect and button click is just a combination of some clever CSS code.
				<br />
				<br />I made this because a friend told me it was not possible to do, so out of spite, I had to prove him wrong.
				Thats also why if you look very closely in the bakgrund of the real website there is a lot {'"L"s'} in the
				bakgrund
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/css-only-rubiks-cube" Icon={GitHub} text="Repository" />
				<Link href="https://cube.immatheus.com/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
			<Cube />
		</div>
	)
}

export default RubiksCube
