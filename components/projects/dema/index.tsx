import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import { Demo } from './Demo'

const Dema: React.FC = ({}) => {
	return (
		<div id="dema" className="pb-5 font-sans">
			<ProjectTitle>Dema.ai</ProjectTitle>
			<ProjectDescription>
				Software engineer, April 2023 - Now
				{/* <br />
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cumque ea corporis! Doloribus at eveniet
				consequatur iusto suscipit, inventore praesentium obcaecati blanditiis, est repellat itaque ea earum error qui
				rem. */}
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://dema.ai/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
			<Demo />
		</div>
	)
}

export default Dema
