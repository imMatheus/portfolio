import React, { PropsWithChildren } from 'react'
import { cn } from 'lib/utils'

const ProjectTitle: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
	return <h2 className={cn('mb-2 text-5xl font-bold md:text-7xl 2xl:text-8xl', className)}>{children}</h2>
}

export default ProjectTitle
