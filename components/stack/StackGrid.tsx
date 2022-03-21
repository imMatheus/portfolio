import React from 'react'
import StackCard from './StackCard'

const StackGrid: React.FC = ({}) => {
	return (
		<div className="grid aspect-square grid-cols-4 grid-rows-4 gap-1 bg-slate-700 p-1 md:aspect-[10/3] md:grid-rows-3 lg:grid-cols-6 lg:grid-rows-4">
			<div className="bg-red-500 text-red-100 lg:col-span-2">
				<StackCard>HTML</StackCard>
			</div>
			<div className="bg-yellow-400 text-yellow-900 lg:col-span-3">
				<StackCard>Javascript</StackCard>
			</div>
			<div className="col-span-2 bg-blue-400 text-blue-900 md:col-span-1">
				<StackCard>Typescript</StackCard>
			</div>
			<div className="bg-cyan-400 text-cyan-900 lg:row-span-3 lg:[writing-mode:_vertical-rl]">
				<StackCard>Tailwind</StackCard>
			</div>
			<div className="bg-sky-400 text-sky-900 lg:col-span-2">
				<StackCard>CSS</StackCard>
			</div>
			<div className="bg-pink-600 text-pink-100">
				<StackCard>Sass/Scss</StackCard>
			</div>
			<div className="bg-green-400 text-green-900 lg:col-span-2">
				<StackCard>Mongo DB</StackCard>
			</div>
			<div className="bg-amber-500 text-amber-900 lg:row-span-2">
				<StackCard>Firebase</StackCard>
			</div>
			<div className="col-span-3 bg-black text-white md:col-span-1">
				<StackCard>Next.js</StackCard>
			</div>
			<div className="col-span-2 bg-sky-400 text-sky-900 md:col-span-1 lg:col-span-3">
				<StackCard>React</StackCard>
			</div>
			<div className="bg-rose-700 text-rose-100 lg:col-span-3">
				<StackCard>NPM</StackCard>
			</div>
			<div className="bg-lime-400 text-lime-900">
				<StackCard>Node</StackCard>
			</div>
		</div>
	)
}

export default StackGrid
