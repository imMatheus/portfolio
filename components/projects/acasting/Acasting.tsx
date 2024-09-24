import React from 'react'
import LinkWrapper from '../LinkWrapper'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import { ExternalLink } from 'react-feather'
import Link from '../Link'
import Image from 'next/image'
import { Demo } from './Demo'

interface AcastingProps {}

export const Acasting: React.FC<AcastingProps> = ({}) => {
	return (
		<div id="acasting" className="relative text-white">
			<ProjectTitle>Acasting.se</ProjectTitle>
			<ProjectDescription>
				First software engineer, part time consultant, November 2023 - March 2024
				<br />
				<br />
				<ul className="max-w-[80ch] space-y-2 pl-0">
					<li>
						- Built out the entire app, end to end, together with another engineer, and launched the first version in a
						single month
					</li>
					<li>- Scaled from 0 to 20k users</li>
					<li>- Was involved in all technical decisions</li>
					<li>- Handled billions of row reads, and millions of row writes</li>
					<li>- Developed a custom in-house chat to reduce our monthly costs by over $500/month</li>
					<li>- Worked on our recommendation engine</li>
					<li>- Implemented mobile design and responsibility</li>
					<li>- Introduced our location feature, helping 100s of casters find amongst 1000+ locations</li>
				</ul>
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://acasting.se/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>

			{/* <Demo /> */}
		</div>
	)
}
