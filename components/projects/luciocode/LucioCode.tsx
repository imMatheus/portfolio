import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub, Package } from 'react-feather'
import ProjectDescription from '../ProjectDescription'

interface LucioCodeProps {}

const LucioCode: React.FC<LucioCodeProps> = ({}) => {
	return (
		<>
			<ProjectTitle>LucioCode 01</ProjectTitle>
			<ProjectDescription>
				LucioCode is a web app that aims to help professors and teachers teach coding to a class of students.
				The web app comes with an inbuilt IDE to provide code and makes it easy for the teacher to test their
				students on their ability to solve problems. I think it is a shame that certain classrooms are so behind
				in development and use old techniques for teaching code, such as having to write your code with a pen
				and paper. LucioCode hopes to solve those problems and make every aspect of teaching code easier and
				more fun for everyone.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/firedum" Icon={GitHub} text="Repository" />
				<Link href="https://www.npmjs.com/package/firedum" Icon={Package} text="NPM page" />
			</LinkWrapper>
		</>
	)
}

export default LucioCode
