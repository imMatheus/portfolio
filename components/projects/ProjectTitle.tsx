import React, { PropsWithChildren } from 'react'

const ProjectTitle: React.FC<PropsWithChildren> = ({ children }) => {
	return <h2 className="mb-2 text-5xl font-bold md:text-7xl 2xl:text-8xl">{children}</h2>
}

export default ProjectTitle
