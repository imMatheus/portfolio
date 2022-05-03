import React from 'react'
import { Star, GitCommit } from 'react-feather'

interface ProjectShowCaseCardProps {
	title: string
	color: string
	stars: number
	language: string
	description: string
	link: string
	commits: number
}

const ProjectShowCaseCard: React.FC<ProjectShowCaseCardProps> = ({
	title,
	color,
	stars,
	language,
	commits,
	link,
	description
}) => {
	return (
		<a href={`#${link}`}>
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
						<div>
							<h2 className="text-lg font-medium">{title}</h2>
							<p className="text-sm font-light">{description}</p>
						</div>
						<div className="mt-auto flex flex-wrap gap-4 pt-4">
							<div className="flex items-center gap-1 text-xs">
								<div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }}></div> {language}
							</div>
							<div className="flex items-center gap-0.5 text-xs">
								<Star className="-mt-[1px] h-4 w-4" /> {stars}
							</div>
							<div className="flex items-center gap-0.5 text-xs">
								<GitCommit className="-mt-[1px] h-4 w-4" /> {commits}
							</div>
						</div>
					</div>
				</div>
			</article>
		</a>
	)
}

export default ProjectShowCaseCard
