import React from 'react'

interface ProjectShowCaseCardProps {
	title: string
	language?: string
	description: string
	link: string
	isWork?: boolean
	className?: string
}

const ProjectShowCaseCard: React.FC<ProjectShowCaseCardProps> = ({
	title,
	link,
	description,
	isWork,
	className
}) => {
	return (
		<a href={`#${link}`} className={className}>
			<article className="relative transition-transform hover:rotate-2 even:hover:-rotate-2">
				<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4">
					<div className="h-[25px] border-b border-black"></div>
				</div>
				<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2">
					<div className="h-[25px] border-b border-black"></div>
				</div>
				<div className="relative flex h-full w-full flex-col rounded-md border border-black bg-white">
					<div className="flex gap-1 border-b border-black p-2">
						<div className="h-2 w-2 rounded-full border border-black"></div>
						<div className="h-2 w-2 rounded-full border border-black"></div>
						<div className="h-2 w-2 rounded-full border border-black"></div>
					</div>
					<div className="flex h-full flex-col p-2">
						<div className="flex items-center gap-2">
							<h2 className="text-lg font-medium">{title}</h2>
							{isWork ? (
								<p className="border border-dotted border-amber-600 bg-amber-200 px-2 py-0.5 text-[9px] leading-none text-amber-900">
									Work
								</p>
							) : (
								<p className="border border-dotted border-blue-600 bg-blue-200 px-2 py-0.5 text-[9px] leading-none text-blue-900">
									Sideproject
								</p>
							)}
						</div>
						<p className="text-sm font-light">{description}</p>
					</div>
				</div>
			</article>
		</a>
	)
}

export default ProjectShowCaseCard
