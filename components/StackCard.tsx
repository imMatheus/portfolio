import React from 'react'
import { Star, GitCommit } from 'react-feather'

interface StackCardProps {}

const StackCard: React.FC<StackCardProps> = ({ children }) => {
	return (
		<article className="group relative cursor-pointer transition-transform hover:rotate-2 even:hover:-rotate-2">
			<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="relative h-full w-full rounded-md border border-black bg-white">
				<div className="flex gap-1 border-b border-black p-2">
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
				</div>
				<div className="p-2">
					<p className="mb-2 text-lg font-medium">{children}</p>
					<div className="flex flex-wrap gap-4">
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
