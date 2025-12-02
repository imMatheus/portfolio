import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import MidjourneyImage from './midjourney-logo.png'
import Image from 'next/image'
import { ExternalLink } from 'react-feather'

interface MidjourneyProps {}

export const Midjourney: React.FC<MidjourneyProps> = ({}) => {
	return (
		<div className="" id="midjourney">
			<ProjectTitle>
				<p className="mr-2 inline-block">Midjourney</p>
				<Image src={MidjourneyImage} alt="Midjourney" className="inline h-20 w-20 object-contain" />
			</ProjectTitle>
			<ProjectDescription>
				<p>Software engineer, February 2025 - Now</p>
				<br />
				<ul className="max-w-[80ch] list-disc space-y-3 pl-5">
					<li>
						Adding ability to have multiple layers and rotate layers in the editor on the website
						<ul className="list-disc space-y-1 pl-5">
							<li>This required a full refactor of the editor to be able to adapt to the new features </li>
							<li>Redesigned the entire editor to work better with the new tools</li>
						</ul>
					</li>

					<li>
						Owned the social profiles feature.{' '}
						<a
							href="https://x.com/whosmatu/status/1991242801691144194"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-1 border-b border-b-current hover:font-medium"
						>
							A tweet about it <ExternalLink className="h-4 w-4" />
						</a>
						<ul className="list-disc space-y-1 pl-5">
							<li>A full new profile page with profile settings and customizability</li>
							<li>Adding the ability to follow other users</li>
							<li>
								Adding a new interaction called <b>&quot;Spotlighting&quot;</b> that lets users highlight the favorite
								creations
							</li>
						</ul>
					</li>
					<li>
						Added a popup that showed when users ran out out of credits that let them buy new onces or upgrade plane
						very easily. This popup alone payed for my salary within a couple of weeks
					</li>
				</ul>
			</ProjectDescription>
		</div>
	)
}
