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
			<a
				href="https://polaroids.dema.ai"
				target="_blank"
				rel="noreferrer"
				className="group absolute -top-16 right-0 z-[3] hidden grid-cols-2 lg:grid"
			>
				<Image
					src={WinnerImage}
					alt="Winner polaroid"
					className="z-[1] w-40 translate-x-1 -rotate-3 border-[3px] border-black transition-all duration-100 group-hover:translate-x-0 group-hover:rotate-0"
				/>
				<Image
					src={SelfieImage}
					alt="Selfie polaroid"
					className="w-40 -translate-y-2 border-[3px] border-black transition-all duration-100 group-hover:-translate-x-2 group-hover:translate-y-3 group-hover:rotate-6"
				/>
				<Image
					src={CompanyUpdateImage}
					alt="Company update polaroid"
					className="w-40 -translate-y-8 translate-x-6 rotate-3 border-[3px] border-black transition-all duration-100 group-hover:translate-x-2 group-hover:rotate-6"
				/>
				<Image
					src={WiredImage}
					alt="Wired polaroid"
					className="w-40 -translate-y-4 translate-x-0 border-[3px] border-black transition-all duration-100 group-hover:-translate-x-2 group-hover:-rotate-6"
				/>

				<div className="absolute -left-3 top-32 -translate-x-full transition-all duration-100 group-hover:left-0 group-hover:-rotate-3">
					<Image src={PolaroidsArrow} alt="Polaroid arrow" className="w-64" />
				</div>
			</a>
			<div className="relative z-[1]">
				<ProjectTitle>Dema.ai</ProjectTitle>
				<ProjectDescription>
					Software engineer, April 2023 - Now
					<br />
					<br />
					<ul className="max-w-[80ch] list-disc space-y-2 pl-5">
						<li>
							Full-stack ownership of the web-app (core product).
							<ul className="list-disc space-y-1 pl-5">
								<li>Owned internal state management with Jotai</li>
								<li>
									Led and developed a <b>Product Segmentation</b> feature on my own that single-handedly secured
									multiple clients. This featured handles and labels tens-of-thousands of products per day.{' '}
									<a
										href="https://www.dema.ai/changelog/segmentations-label-your-products"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1 border-b border-b-current hover:font-medium"
									>
										See it here <ExternalLink className="h-4 w-4" />
									</a>
								</li>
								<li>
									Developed our <b>Marketing Mix Model</b> feature on the application side.{' '}
									<a
										href="https://www.dema.ai/platform/marketing-mix-modeling"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1 border-b border-b-current hover:font-medium"
									>
										See it here <ExternalLink className="h-4 w-4" />
									</a>
								</li>
								<li>
									Migrated legacy SASS components to custom Chakra UI (moral of the story, chakra is a mistake, just use
									tailwind)
								</li>
								<li>Worked on dashboards</li>
								<li>Worked on teams and role-based access control</li>
							</ul>
						</li>
						<li>
							Owned and wrote almost all of the changelogs,{' '}
							<a
								href="https://www.dema.ai/changelog"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-1 border-b border-b-current hover:font-medium"
							>
								See it here <ExternalLink className="h-4 w-4" />
							</a>
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
								className="inline-flex items-center gap-1 border-b border-b-current hover:font-medium"
							>
								See it here <ExternalLink className="h-4 w-4" />
							</a>
						</li>
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
