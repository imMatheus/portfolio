import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import { Demo } from './Demo'

const Dema: React.FC = ({}) => {
	return (
		<div id="dema" className="pb-5">
			<ProjectTitle>Dema.ai</ProjectTitle>
			<ProjectDescription>Software engineer</ProjectDescription>
			<LinkWrapper>
				<Link href="https://dema.ai/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
			<Demo />
		</div>
	)
}

export default Dema
