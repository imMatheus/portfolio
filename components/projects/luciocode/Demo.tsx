import React from 'react'
import DemoCode from './DemoCode'
import DemoQuestion from './DemoQuestion'

interface DemoProps {}

const Demo: React.FC<DemoProps> = ({}) => {
	return (
		<div className="mt-5 grid md:grid-cols-[1fr_auto_1fr] md:grid-rows-1">
			<DemoQuestion />
			<div className="flex items-center justify-center gap-1 bg-[#111] p-1 py-2 md:flex-col md:py-3">
				<div className="h-1 w-1 rounded-full bg-white"></div>
				<div className="h-1 w-1 rounded-full bg-white"></div>
				<div className="h-1 w-1 rounded-full bg-white"></div>
				<div className="h-1 w-1 rounded-full bg-white"></div>
			</div>
			<DemoCode />
		</div>
	)
}

export default Demo
