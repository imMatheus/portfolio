import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub, ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import Demo from './Demo'

const LucioCode: React.FC = ({}) => {
	return (
		<div id="luciocode">
			<ProjectTitle>LucioCode</ProjectTitle>
			<ProjectDescription>
				LucioCode is a web app that aims to help professors and teachers teach coding to a class of students. The web
				app comes with an inbuilt IDE to provide code and makes it easy for the teacher to test their students on their
				ability to solve problems. I think it is a shame that certain classrooms are so behind in development and use
				old techniques for teaching code, such as having to write your code with a pen and paper. LucioCode hopes to
				solve those problems and make every aspect of teaching code easier and more fun for everyone. The link below
				links to a very early version built over one year ago, I am not yet done with an MVP of what I want LucioCode to
				be. But a new, updated version is coming in a near future
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/lucio/tree/old_master" Icon={GitHub} text="Repository" />
				<Link href="https://lucioocode.web.app/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
			{/* <Demo /> */}
		</div>
	)
}

export default LucioCode
