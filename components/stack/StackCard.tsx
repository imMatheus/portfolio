import React from 'react'
import { Star, GitCommit } from 'react-feather'

interface StackCardProps {
	title: string
}

const StackCard: React.FC<StackCardProps> = ({ title, children }) => {
	return (
		<article className="relative cursor-pointer transition-transform hover:rotate-2 even:hover:-rotate-2">
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
						<p className="text-sm font-light">{children}</p>
					</div>
					<div className="mt-auto flex flex-wrap gap-4 pt-4">
						<div className="flex items-center gap-1 text-xs">
							<div className="h-2 w-2 rounded-full bg-sky-700"></div> Typescript
						</div>
						<div className="flex items-center gap-0.5 text-xs">
							<Star className="-mt-[1px] h-4 w-4" /> 14&apos;344
						</div>
						<div className="flex items-center gap-0.5 text-xs">
							<GitCommit className="-mt-[1px] h-4 w-4" /> 934
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default StackCard
