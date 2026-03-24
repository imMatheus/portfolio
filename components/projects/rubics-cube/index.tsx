import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import { GitHub, ExternalLink } from 'react-feather'
import Cube from './Cube'

const RubiksCube: React.FC = ({}) => {
	return (
		<div id="rubiks-cube">
			<ProjectTitle>CSS only Rubik&apos;s cube</ProjectTitle>
			<ProjectDescription>
				October 2022 <ProjectTag isWork={false} />
				<br />
				<br />
				The project below was made with a total of ZERO lines of Javascript, it&apos;s all just CSS. Every animation, hover
				effect and button click is just a combination of some clever CSS code.
				<br />
				<br />I made this because a friend told me it was not possible to do, so out of spite, I had to prove him wrong.
				That&apos;s also why if you look very closely in the background of the real website there are a lot of {'"L"s'} in the
				background
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
