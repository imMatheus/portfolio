import React from 'react'
import DemoCode from './DemoCode'
import DemoQuestion from './DemoQuestion'

interface DemoProps {}

const Demo: React.FC<DemoProps> = ({}) => {
	return (
		<div className="grid grid-cols-[1fr_auto_1fr] bg-red-600">
			<DemoQuestion />
			<div className="flex flex-col items-center justify-center gap-1 bg-gray-900 px-1 py-3">
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
