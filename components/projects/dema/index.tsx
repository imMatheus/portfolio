import React from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { AlertCircle, ExternalLink } from 'react-feather'
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
					className="z-[1] w-40 translate-x-1 -rotate-3 border-[3px] border-black"
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
					<ul className="max-w-[80ch] list-disc space-y-4 pl-5">
						<li>
							Full-stack ownership of the web-app.
							<ul className="list-disc space-y-1 pl-5">
								<li>Improved performance all over the app</li>
								<li>Fully changed UI and UX flows.</li>
								<li>Owned internal state management with Jotai</li>
								<li>Led many end-to-end features</li>
							</ul>
						</li>
						<li>
							Built our Shopify integration handling all order and inventory data for our Shopify customers. Later, I
							created a monorepo for all our other e-commerce integrations, saving multiple hours of dev-time for our
							engineers. Used Turborepo and deployed it to K8s
						</li>
						<li>
							Bought a Polaroid camera on my very first day, which has taken well over 300 pictures and has been a core
							part of the internal employee branding. I also took it one step further on my 1-year anniversary and
							created a custom page with all Polaroids.{' '}
							<a
								href="https://polaroids.dema.ai"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1 border-b border-b-current"
							>
								See it here <ExternalLink className="h-4 w-4" />
							</a>
						</li>

						{/* <li>- Migrated our app from static in-house SCSS component library to a customized Chakra UI flow</li>
						<li>
							- Led the rebranding of the platform after Dema underwent a full rebrand as a company. Organized a
							hackathon for my team and completed the entire rebranding in one single day.
						</li>
						<li>
							- Bought a Polaroid camera on my very first day, which has taken well over 300 pictures and has been a
							core part of the internal employee branding. I also took it one step further on my 1-year anniversary and
							created a custom page with all Polaroids.{' '}
							<a
								href="https://polaroids.dema.ai"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1 border-b border-b-current"
							>
								See it here <ExternalLink className="h-4 w-4" />
							</a>
						</li>
						<li>
							- Built our Shopify connector handling all order and inventory data for our Shopify customers. Later, I
							created a monorepo for all our e-commerce data services, saving multiple hours of dev-time for our
							engineers. Used Turborepo and deployed it to K8s
						</li>
						<li>
							- Improved table performance by 1000x. Rebuilt internal state flows to use Jotai, which drastically
							improved user experience
						</li> */}
					</ul>
				</ProjectDescription>
				<LinkWrapper>
					<Link href="https://dema.ai/" Icon={ExternalLink} text="Live site" />
				</LinkWrapper>

				<div className="mb-4 flex items-baseline gap-2 rounded-md border border-blue-800 bg-blue-100 p-4 text-blue-800">
					<AlertCircle className="h-4 w-4 flex-shrink-0 translate-y-0.5 text-inherit" />

					<p className="text-sm">
						Dema (the company I work at) is an analytis platform for e-commerce that help companies understand there
						profitably. Its a very cool platform and down below is a small replica I made to showcase sort of how it
						looks but also some things you can do. Of course there is A LOT more to the platform than what is down below
						{':)'}
					</p>
				</div>
				<Demo />
			</div>
		</div>
	)
}

export default Dema
