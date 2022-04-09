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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, obcaecati dolore. Iusto tempora porro quasi
				voluptates, doloremque debitis itaque, aliquid hic, impedit expedita obcaecati nobis! Voluptatum unde
				totam corporis repudiandae obcaecati harum, ab aut dolore assumenda voluptatem eum alias repellendus
				sint nulla, nisi iusto quia blanditiis quae impedit quidem fugit vero. Sint nihil natus maiores
				exercitationem accusamus fugiat cupiditate repellat repudiandae atque culpa excepturi nobis veniam
				laboriosam, in quod fuga eos, ab voluptatum vero doloribus quam! Facilis eligendi commodi ducimus?
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/firedum" Icon={GitHub} text="Repository" />
				<Link href="https://www.npmjs.com/package/firedum" Icon={Package} text="NPM page" />
			</LinkWrapper>
		</>
	)
}

export default LucioCode
