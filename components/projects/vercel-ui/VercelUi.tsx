import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { ExternalLink, GitHub } from 'react-feather'
import { ComponentDemo } from './ComponentDemo'

interface VercelUiProps {}

const VercelUi: React.FC<VercelUiProps> = ({}) => {
	return (
		<div id="vercel-ui" className="text-white">
			<ProjectTitle>Vercel UI</ProjectTitle>
			<ProjectDescription>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit illum inventore nisi eos quis sequi aperiam
				non earum sapiente. Debitis aperiam dignissimos quia sint earum fugit officiis! Autem minima reprehenderit
				suscipit vero, rerum odio sed quis nesciunt repellat doloremque reiciendis esse corporis eos hic ad aspernatur
				perferendis illum itaque. Sit.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/vercel-ui" Icon={GitHub} text="Repository" />
				<Link href="https://vercel-ui-phi.vercel.app/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
			<ComponentDemo />
		</div>
	)
}

export default VercelUi
