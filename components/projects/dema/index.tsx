import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import { Demo } from './Demo'
import Image from 'next/image'
import WinnerImage from './polaroids/winner.png'
import SelfieImage from './polaroids/selfie.png'
import CompanyUpdateImage from './polaroids/company-update.png'
import WiredImage from './polaroids/wired.png'
import PolaroidsArrow from './polaroids-arrow.svg'

const Dema: React.FC = ({}) => {
	return (
		<div id="dema" className="pb-5 font-sans">
			<div className="pointer-events-none absolute -top-16 right-0 hidden grid-cols-2  lg:grid">
				<Image
					src={WinnerImage}
					alt="Winner polaroid"
					className="z-[1] w-40 translate-x-1 -rotate-3  border-[3px] border-black"
				/>
				<Image src={SelfieImage} alt="Selfie polaroid" className="w-40 -translate-y-2 border-[3px] border-black" />
				<Image
					src={CompanyUpdateImage}
					alt="Company update polaroid"
					className="w-40 -translate-y-8 translate-x-6 rotate-3 border-[3px] border-black"
				/>
				<Image
					src={WiredImage}
					alt="Wired polaroid"
					className="w-40 -translate-y-4 translate-x-0 border-[3px] border-black"
				/>

				<div className="absolute -left-3 top-32 -translate-x-full">
					<Image src={PolaroidsArrow} alt="Polaroid arrow" className="w-64" />
				</div>
			</div>
			<div className="relative z-[1]">
				<ProjectTitle>Dema.ai</ProjectTitle>
				<ProjectDescription>
					Software engineer, April 2023 - Now
					<br />
					<br />
					<p className="font-medium underline">Contributions:</p>
					<ul className="list-disc pl-4">
						<li>Built our Shopify connector handling all order and inventory data for our Shopify customers</li>
						<li>
							Created a monorepo for all 4 connectors saving multipe ours of dev time for our engineers. Used turborepo
							and deployed it to k8s
						</li>
						<li>
							Lead the rebranding of the platform after Dema underwhent a full rebrand as a company. Organzied a one-day
							hackothon for my team and did the entire rebranding in one day. This involed color changes, layout changes
							and and component api changes
						</li>
						<li>Worked on our dashboard page</li>
						<li>Worked on our MMM page which helped our users</li>
						<li>Took ownership of our public website and helping development on woards</li>
						<li>
							Bought a polaroid camera on my very first day, which has taken well over 300 pictures and has been a core
							part of the internal employee branding. I also took it one step further on my 1 year anniversary and
							created a custom page with all polaroids.{' '}
							<a href="https://polaroids.dema.ai" target="_blank" rel="noreferrer" className="underline">
								See it here
							</a>
						</li>
					</ul>
				</ProjectDescription>
				<LinkWrapper>
					<Link href="https://dema.ai/" Icon={ExternalLink} text="Live site" />
				</LinkWrapper>

				<Demo />
			</div>
		</div>
	)
}

export default Dema
