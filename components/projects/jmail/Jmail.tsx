import React, { useState } from 'react'
import Image from 'next/image'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { ExternalLink } from 'react-feather'
import { cn } from 'lib/utils'
import { JmailApp } from './JmailApp'
import { JeffTubeApp } from './JeffTubeApp'
import { JCalApp } from './JCalApp'

export const Jmail: React.FC = () => {
	const [open, setOpen] = useState<'jmail' | 'jefftube' | 'jcal'>('jmail')

	const items = ['jmail', 'jefftube', 'jcal'] as const

	const appComponents: Record<typeof items[number], React.ReactNode> = {
		jmail: <JmailApp onNavigate={setOpen} />,
		jefftube: <JeffTubeApp onNavigate={setOpen} />,
		jcal: <JCalApp onNavigate={setOpen} />,
	}

	const itemsCopy = [...items]
	const idx = itemsCopy.indexOf(open)
	const withoutBeginning = itemsCopy.splice(0, idx)
	const sorted = [...itemsCopy, ...withoutBeginning]

	return (
		<div id="jmail" className="relative">
			<ProjectTitle>
				<div className="inline-block">
					<span className="">Jmail</span>
					<Image src="/jmail.png" width={70} height={70} alt="Jmail" className="inline h-16 w-16 object-contain" />
					<span className="">, JeffTube</span>
					<Image src="/jefftube.png" width={70} height={70} alt="Jmail" className="inline h-16 w-16 object-contain" />
					<span className="">, JCal</span>
					<Image src="/jcal.png" width={70} height={70} alt="Jmail" className="inline -translate-y-2 h-16 w-16 object-contain" />
				</div>
			</ProjectTitle>
			<ProjectDescription>
				February 2026 - Now
				<br />
				<br />
				Jmail is project maintained by a group of self organized hackers in the SF area and its goal is to build a platform to make it accessible to learn about the Jeffery Epstein case.
				I build and scrapped all the data for JeffTube on my own initially , and right after launch it got integrated into the Jmail organization where I helped out on the main platform. I later built the entire frontend for JCal which shows a calendar of all the events related to the case.
				<br />
				<br />
				Jmail has gotten over 150 million views and has been featured in many news outlets and online .
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://jmail.world" Icon={ExternalLink} text="Jmail" />
				<Link href="https://jmail.world/jefftube" Icon={ExternalLink} text="JeffTube" />
				<Link href="https://jmail.world/calendar" Icon={ExternalLink} text="JCal" />
			</LinkWrapper>

			<div className="flex border my-3 w-max bg-border rounded-full">
				{items.map((item) => (
					<button key={item} className={cn("border-2 capitalize font-medium text-lg w-full px-3 h-10 rounded-full cursor-pointer", item === open ? "bg-white border-black" : "border-transparent")} onClick={() => setOpen(item)}>
						{item}
					</button>
				))}
			</div>
			<div className="w-full mt-32 h-[500px]">
				{sorted.map((item, index) => (
					<div key={item}
						className={cn("absolute border rounded-xl bottom-0 left-0 right-0 delay-[200ms] transition-transform duration-500 w-full h-[500px]", index === 0 && "z-[3]", index === 1 && "z-[2] scale-95 -translate-y-12 hover:-translate-y-14 hover:delay-0 hover:duration-150", index === 2 && "z-[1] scale-[0.9] -translate-y-24 hover:-translate-y-28 hover:delay-0 hover:duration-150")} style={{ animation: index === 2 ? `slide-down-and-around 400ms ease-in-out` : '' }}>
						{appComponents[item]}
					</div>
				))}
			</div>
			<style jsx>{`
				@keyframes slide-down-and-around {
					0% { transform: translateY(0); z-index: 3; scale: 1; }
					50% { transform: translateY(100%); scale: 0.95; }
					100% { transform: translateY(-96px); z-index: 1; scale: 0.9; }
				}
			`}</style>
		</div>
	)
}

















































