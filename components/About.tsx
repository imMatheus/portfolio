import React from 'react'
import AboutCard from './AboutCard'
import { Calendar, Award, AlertTriangle } from 'react-feather'
import Link from 'next/link'
import Image from 'next/image'
import AboutArrow from './about-arrow.svg'

const About: React.FC = () => {
	return (
		<section className="bg-gray-100 p-6 md:p-10">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col-reverse justify-between gap-2 md:flex-row">
					<div className="max-w-[70ch]">
						<h2 className="mb-3 text-4xl font-bold">About me</h2>
						<p className="mb-2 max-w-[80ch] text-base md:mb-4">
							I am a full-stack developer with experience in web applications and apps.
							<br /> <br /> At my current job, I work as a software engineer working on implement a data driven web ui
							for an analytics platform{' '}
							<Link
								href="https://dema.ai"
								passHref
								target="_blank"
								rel="noopener noreferrer"
								className="cursor-pointer font-medium transition-all hover:text-dema-dark"
							>
								@Dema
							</Link>
						</p>
					</div>

					<article className="relative h-32 w-32 flex-shrink-0 self-end max-md:mb-6 md:mb-10 md:h-52 md:w-52 lg:h-64 lg:w-64">
						<div className="absolute left-2 -translate-x-full max-md:-top-6 md:-left-4">
							<Image alt="hover action arrow" className="w-48 md:w-32 lg:w-48" src={AboutArrow} />
						</div>
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
							<div className="flex h-full w-full flex-col">
								<div className="relative h-full w-full">
									<Image src="/p-2-medium.jpeg" className="" layout="fill" objectFit="cover" alt="headshot" />
								</div>
							</div>
						</div>
					</article>
				</div>
				<section className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
					<AboutCard title="First line of code" subtitle="September 2019" date="2019-09-07" Icon={Calendar} />
					<AboutCard title="First software engineering job" subtitle="May 2021" date="2021-06-03" Icon={Award} />
					<AboutCard
						title="Total prod crashes"
						subtitle={
							<>
								1 <span className="inline-block -translate-y-0.5 pl-1 text-xs text-gray-500">oops {':('}</span>
							</>
						}
						Icon={AlertTriangle}
					/>
				</section>
			</div>
		</section>
	)
}

export default About
