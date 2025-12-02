import { cn } from 'lib/utils'
import React, { PropsWithChildren } from 'react'

const ProjectDescription: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
	return <div className={cn('mb-2 max-w-4xl text-sm font-normal lg:text-base 2xl:text-xl', className)}>{children}</div>
}

export default ProjectDescription
