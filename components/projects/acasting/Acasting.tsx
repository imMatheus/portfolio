import React from 'react'
import LinkWrapper from '../LinkWrapper'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import { ExternalLink } from 'react-feather'
import Link from '../Link'
import Image from 'next/image'

export const Acasting: React.FC = ({}) => {
	return (
		<div id="acasting" className="relative text-white">
			<ProjectTitle>Acasting.se</ProjectTitle>
			<ProjectDescription>
				First software engineer, part-time consultant, November 2023 - March 2024
				<br />
				<br />
				<ul className="max-w-[80ch] list-disc space-y-3 pl-5">
					<li>
						Built out the entire app, end to end, together with another engineer, and launched the first version in a
						single month
					</li>
					<li>Scaled from 0 to 20k users</li>
					<li>Was involved in all technical decisions</li>
					<li>Handled billions of row reads, and millions of row writes</li>
					<li>Developed a custom in-house chat to reduce our monthly costs by over $500/month</li>
					<li>Worked on our recommendation engine</li>
					<li>Implemented mobile design and responsiveness</li>
					<li>Introduced our location feature, helping 100s of casters find amongst 1000+ locations</li>
				</ul>
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://acasting.se/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>

			{/* <div className="mt-4 flex w-full gap-4">
				<ProjectImage src="https://cdn.midjourney.com/39bc997f-49c8-4bc5-a1c2-a0e09fd3c804/0_2.png" alt="Acasting" />
				<ProjectImage src="https://cdn.midjourney.com/39bc997f-49c8-4bc5-a1c2-a0e09fd3c804/0_2.png" alt="Acasting" />
				<ProjectImage src="https://cdn.midjourney.com/39bc997f-49c8-4bc5-a1c2-a0e09fd3c804/0_2.png" alt="Acasting" />
				<ProjectImage src="https://cdn.midjourney.com/39bc997f-49c8-4bc5-a1c2-a0e09fd3c804/0_2.png" alt="Acasting" />
				<ProjectImage src="https://cdn.midjourney.com/39bc997f-49c8-4bc5-a1c2-a0e09fd3c804/0_2.png" alt="Acasting" />
			</div> */}
		</div>
	)
}

interface ImageProps {
	src: string
	alt: string
}

const ProjectImage: React.FC<ImageProps> = ({ src, alt }) => {
	return (
		<div className="relative flex w-full min-w-0 shrink-0 grow-0 basis-[60%] font-sans sm:basis-[36%] md:basis-1/3 lg:basis-[25%] 2xl:basis-1/3">
			<div className="relative aspect-[0.8/1] h-full w-full">
				<img src={src} alt={alt} className="h-full w-full rounded-2xl object-cover" />
				<div className="absolute inset-0 rounded-2xl bg-black/30"></div>
			</div>

			<div className="absolute bottom-0 w-full p-4 text-white md:px-5 md:py-4">
				<span className="inline text-[11px]">25 years old</span>
				<h3 className="mb-1.5 text-[13px] font-semibold">hek</h3>
				<div className="flex gap-1.5">
					<div className="rounded-full border border-white/20 px-2.5 py-1 text-center text-[11px]">Actor</div>
					<div className="rounded-full border border-white/20 px-2.5 py-1 text-center text-[11px]">Actor</div>
				</div>
			</div>
		</div>
	)
}
