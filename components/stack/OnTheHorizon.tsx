import React from 'react'
import Image from 'next/image'
import HoverArrow from './hover-arrow.svg'

interface OnTheHorizonProps {}

const OnTheHorizon: React.FC<OnTheHorizonProps> = ({}) => {
	return (
		<div className="text-center">
			<h2 className="mb-2 text-5xl font-bold lg:text-7xl">On the horizon</h2>
			<p className="mx-auto max-w-4xl text-base">
				I have no intention to stop learning new things. As of right now I am learning Go and Kubernetes
			</p>

			<div className="relative flex items-center justify-center p-5 pb-0">
				<div className="group relative -mt-8 flex h-[12rem] w-[12rem] translate-y-[60%] items-center justify-center transition-transform hover:translate-y-1/2">
					<div className="absolute h-[18rem] w-[18rem] rounded-full bg-yellow-200/100 transition-all delay-0 group-hover:h-[21rem] group-hover:w-[21rem]"></div>
					<div className="absolute h-[16rem] w-[16rem] rounded-full bg-yellow-500/100 transition-all delay-150 group-hover:h-[18rem] group-hover:w-[18rem]"></div>
					<div className="absolute h-[14rem] w-[14rem] rounded-full bg-yellow-600/100 transition-all delay-300 group-hover:h-[15rem] group-hover:w-[15rem]"></div>
					<div className="absolute h-[12rem] w-[12rem] rounded-full bg-yellow-700"></div>
				</div>
				<div className="absolute z-10 hidden max-sm:left-0 max-sm:top-4 max-sm:translate-x-7 min-[430px]:block sm:right-1/2 sm:top-1/2 sm:-translate-x-[10rem]">
					<Image alt="hover action arrow" className="w-32" src={HoverArrow} />
				</div>
			</div>
		</div>
	)
}

export default OnTheHorizon
