import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub, ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
	return (
		<>
			<ProjectTitle>Blog 03</ProjectTitle>
			<ProjectDescription>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nisi natus eveniet aspernatur
				excepturi sed, sit delectus fuga magnam voluptatibus. Reiciendis ex quaerat reprehenderit culpa,
				voluptatem dolor dolorem inventore sunt enim repudiandae dicta voluptatibus hic modi animi officia
				aliquid expedita quia consequatur quo eligendi repellendus quam. Nam sapiente nesciunt, porro libero
				consequuntur eius corporis temporibus, accusantium iure delectus, asperiores eum.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/blog" Icon={GitHub} text="Repository" />
				<Link href="https://matus-blog.vercel.app/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
		</>
	)
}

export default Blog
