import Image from 'next/image'
import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import OverwatchImage from './overwatch-logo.png'
import Winston from './winston.png'
import Lucio from './lucio.png'
import Reinhardt from './reinhardt.png'
import Zarya from './zarya.png'
import Dva from './dva.png'

interface OverwatchProps {}

export const Overwatch: React.FC<OverwatchProps> = ({}) => {
	return (
		<div id="dema" className="pb-5 font-sans">
			<div className="relative">
				<ProjectTitle>
					<p className="gap-4">
						Professional Overwatch Player{' '}
						<Image src={OverwatchImage} alt="Overwatch" className="inline h-14 w-14 object-contain" />
					</p>
				</ProjectTitle>
				<ProjectDescription>
					2017 - 2020
					<br />
					<br />
					<ul className="list-disc space-y-2 pl-5">
						<li>
							I was consistently in the top #500 rankings for europe on playstation with multiple different accounts,
							peking at top #30 at points.
						</li>
						<li>Competed for the scandinavian team in the world cups for Playstation</li>
						<li>For certain heroes I was in the top #100 for and peaked #7 for Winston at a certain point.</li>
						<li>I was 13-16 years old btw</li>
					</ul>
				</ProjectDescription>
				<div className="mt-8 space-y-3">
					<HeroCard name="Winston" image={Winston} width="85%" progressColor="#b1b5c9" />
					<HeroCard name="Reinhardt" image={Reinhardt} width="82%" progressColor="#a4aeb1" />
					<HeroCard name="Zarya" image={Zarya} width="79%" progressColor="#f695c4" />
					<HeroCard name="Lucio" image={Lucio} width="76%" progressColor="#99d675" />
					<HeroCard name="D.Va" image={Dva} width="73%" progressColor="#f9a4d2" />
				</div>
			</div>
		</div>
	)
}

interface HeroCardProps {
	name: string
	image: any
	width: string
	progressColor: string
}

const HeroCard: React.FC<HeroCardProps> = ({ name, image, width, progressColor }) => {
	return (
		<div className="group flex bg-[#f3f5f9]">
			<Image
				src={image}
				alt={name}
				className="h-[60px] w-[60px] shrink-0 bg-gradient-to-b from-[#6b80a0] to-[#c8e1ff]"
				width={60}
				height={60}
			/>
			<div className="w-full">
				<div
					className="flex h-full items-center pl-4 transition-[filter] duration-300 group-hover:[image-rendering:pixelated]"
					style={{ width, backgroundColor: progressColor }}
				>
					<h4 className="text-2xl font-bold uppercase tracking-wider">{name}</h4>
				</div>
			</div>
		</div>
	)
}
