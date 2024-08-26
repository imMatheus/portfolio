import React from 'react'
import { Nav } from './components/Nav'
import { Sidebar } from './components/Sidebar'
import { Content } from './components/Content'
import { Provider } from 'jotai';

interface DemoProps {}

export const Demo: React.FC<DemoProps> = ({}) => {
	return (
		<Provider>
			
		<article className="relative">
			<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="relative flex h-full w-full flex-col overflow-hidden rounded-md border border-black bg-white">
				<div className="flex gap-1 border-b border-black p-2">
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
				</div>
				<div className="flex h-full flex-col">
					<Nav />
					<div className="flex">
						<Sidebar />
						<Content />
					</div>
				</div>
			</div>
		</article>
		</Provider>
	)
}
