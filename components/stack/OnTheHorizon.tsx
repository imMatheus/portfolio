import React from 'react'

interface OnTheHorizonProps {}

const OnTheHorizon: React.FC<OnTheHorizonProps> = ({}) => {
	return (
		<div className="text-center">
			<h2 className="mb-2 text-5xl font-bold lg:text-7xl">On the horizon</h2>
			<p className="mx-auto max-w-4xl">
				I have no intention to stop learning new things. As of right now I am learning Nest.js, Graphql and
				Vue.js
			</p>

			<div className="flex items-center justify-center p-5 pb-0">
				<div className="relative -mt-8 flex h-[12rem] w-[12rem] translate-y-[60%] items-center justify-center transition-transform hover:translate-y-1/2">
					<div className="absolute h-[18rem] w-[18rem] rounded-full bg-yellow-200/100"></div>
					<div className="absolute h-[16rem] w-[16rem] rounded-full bg-yellow-500/100"></div>
					<div className="absolute h-[14rem] w-[14rem] rounded-full bg-yellow-600/100"></div>
					<div className="absolute h-[12rem] w-[12rem] rounded-full bg-yellow-700"></div>
				</div>
			</div>
		</div>
	)
}

export default OnTheHorizon
