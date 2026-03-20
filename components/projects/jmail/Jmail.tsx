import React, { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { ExternalLink } from 'react-feather'
import { cn } from 'lib/utils'
import { JmailApp } from './JmailApp'
import { JeffTubeApp } from './JeffTubeApp'
import { JCalApp } from './JCalApp'

export const Jmail: React.FC = () => {
	const [open, setOpen] = useState<'jmail' | 'jefftube' | 'jcal'>('jmail')
	const [indicator, setIndicator] = useState({ left: 0, width: 0 })
	const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

	const items = ['jmail', 'jefftube', 'jcal'] as const
	const icons: Record<typeof items[number], string> = {
		jmail: '/jmail.png',
		jefftube: '/jefftube.png',
		jcal: '/jcal.png',
	}

	const updateIndicator = useCallback(() => {
		const idx = items.indexOf(open)
		const btn = buttonsRef.current[idx]
		if (btn) {
			setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth })
		}
	}, [open])

	useEffect(() => {
		updateIndicator()
	}, [updateIndicator])

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
				February 2026 - Now <ProjectTag isWork={false} />
				<br />
				<br />
				Jmail is project maintained by a group of self organized hackers in the SF area and its goal is to build a platform to make it accessible to learn about the Jeffery Epstein case.
				I build and scrapped all the data for JeffTube on my own initially , and right after launch it got integrated into the Jmail organization where I helped out on the main platform. I later built the entire frontend for JCal which shows a calendar of all the events related to the case.
				<br />
				<br />

				<br />
				<ul className="max-w-[80ch] list-disc space-y-3 pl-5">
					<li>
						<b>JeffTube</b> got over 150k likes and over 10 million views on twitter in total, here are some tweets <a href="https://x.com/whosmatu/status/2019501503581651042" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">here</a> and <a href="https://x.com/jmailarchive/status/2023199834128421106" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">here</a>
					</li>
					<li>
						Videos on <b>JeffTube</b> have gotten over 13 million views
					</li>
					<li>
						<b>Jmail</b> has gotten over 150 million views and has been featured in many news outlets and online
					</li>
				</ul>
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://jmail.world" Icon={ExternalLink} text="Jmail" />
				<Link href="https://jmail.world/jefftube" Icon={ExternalLink} text="JeffTube" />
				<Link href="https://jmail.world/calendar" Icon={ExternalLink} text="JCal" />
			</LinkWrapper>

			<div className="relative my-3 inline-block">
				<div className="absolute -right-2 -bottom-2 h-full w-full rounded-md border border-black bg-white"></div>
				<div className="absolute -right-1 -bottom-1 h-full w-full rounded-md border border-black bg-white"></div>
				<div className="relative flex rounded-md border border-black bg-white p-0.5">
					<div
						className="absolute top-0.5 bottom-0.5 rounded bg-black transition-all duration-300 ease-in-out"
						style={{ left: indicator.left, width: indicator.width }}
					/>
					{items.map((item, i) => (
						<button
							key={item}
							ref={(el) => { buttonsRef.current[i] = el }}
							className={cn(
								"relative z-10 flex items-center gap-1.5 capitalize font-medium text-sm px-3 py-1 rounded cursor-pointer transition-colors duration-300",
								item === open ? "text-white" : "text-black"
							)}
							onClick={() => setOpen(item)}
						>
							<Image src={icons[item]} alt={item} width={18} height={18} className="h-[18px] w-[18px] object-contain" />
							{item}
						</button>
					))}
				</div>
			</div>
			<div className="w-full mt-32 h-[500px]">
				{sorted.map((item, index) => (
					<div key={item}
						className={cn("absolute border rounded-xl bottom-0 left-0 right-0 delay-[200ms] transition-transform duration-500 w-full h-[500px] shadow-sm", index === 0 && "z-[3]", index === 1 && "z-[2] scale-95 -translate-y-12 hover:-translate-y-14 hover:delay-0 hover:duration-150", index === 2 && "z-[1] scale-[0.9] -translate-y-24 hover:-translate-y-28 hover:delay-0 hover:duration-150")} style={{ animation: index === 2 ? `slide-down-and-around 400ms ease-in-out` : '' }}>
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

















































