import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import { MoreHorizontal } from 'react-feather'
import Link from 'next/link'
import Image from 'next/image'

interface MarkedProps {
	href: string
	children: React.ReactNode
}

const Marked: React.FC<MarkedProps> = ({ href, children }) => {
	return (
		<Link
			href={href}
			passHref
			className="inline-block text-twitter-blue hover:underline"
			target="_blank"
			rel="noopener"
		>
			{children}
		</Link>
	)
}

export const Lovable: React.FC = ({}) => {
	return (
		<div className="font-inter text-[#f4f4f5]">
			<ProjectTitle>
				Lovable{' '}
				<video autoPlay loop muted playsInline className="inline h-20 w-20 -translate-y-1" src="/lovable-heart.mp4" />
			</ProjectTitle>
			<ProjectDescription>
				<p>Part-time consultant, November 2024</p>

				<br />

				<p className="mb-4">
					Built their landing page over a couple days while i was solo traveling in Thailand. This was part of their
					rebrand for their third launch, which happened to make them the fastest growing company in Europe ever.
				</p>

				<Link href="https://x.com/lovable_dev/status/1859507339319267744" target="_blank">
					<article className="mt-2 max-w-3xl rounded-md bg-white text-[rgb(15_20_25)] transition-colors">
						<div className="flex items-start gap-3 p-3 xl:gap-4 xl:p-4">
							<div className="flex flex-col items-end">
								<div className="relative flex-shrink-0 overflow-hidden bg-white">
									<Image
										width={40}
										height={40}
										className="rounded-md"
										src="https://pbs.twimg.com/profile_images/1899496737913348097/QI4DSMeL_400x400.jpg"
										alt={`Matheus profile image`}
									/>
								</div>
							</div>

							<div className="min-w-0 flex-1">
								<div className="flex items-center gap-1.5">
									<h2 className="cursor-pointer font-bold">Lovable</h2>
									<h3 className="text-sm text-twitter-white-text-grayed">@lovable_dev</h3>
									<div className="h-0.5 w-0.5 rounded-full bg-twitter-white-text-grayed" aria-hidden></div>
									<time className="text-sm text-twitter-white-text-grayed" dateTime="18-12-2003">
										Nov 21, 2024
									</time>

									<div className="relative ml-auto">
										<div className="group relative">
											<div className="group-hover:bg-carolina/20 absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors"></div>
											<MoreHorizontal className="text-text-grayed group-hover:text-carolina relative h-4 w-4" />
										</div>
									</div>
								</div>
								<pre className="min-w-0 whitespace-pre-wrap break-words font-inter text-[rgb(15_20_25)]">
									Building products takes too long. We started Lovable to fix this.
									<br />
									<br />
									Today, we`&apos;re officially launching the world`&apos;s first AI Full Stack Engineer
									<br />
									<br />
									Lovable reliably replicates the capabilities of a full stack engineer and handles everything from
									design to database operations by integrating with Supabase.
									<br />
									<br />
									So what`&apos;s new exactly? 🧵
								</pre>
								<div className="text-text-grayed mt-3 flex max-w-md justify-between text-[#536471]">
									<div className="group flex items-center gap-1 hover:text-twitter-blue">
										<div className="relative h-4 w-4 xl:h-5 xl:w-5">
											<div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors group-hover:bg-twitter-blue/20 xl:h-8 xl:w-8"></div>

											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												aria-hidden="true"
												className="transition-colors group-hover:fill-twitter-blue"
											>
												<g>
													<path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
												</g>
											</svg>
										</div>
										<span className="text-sm transition-colors xl:text-base">73</span>
									</div>
									<div className="group flex items-center gap-1 hover:text-twitter-olive">
										<div className="relative h-4 w-4 xl:h-5 xl:w-5">
											<div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors group-hover:bg-twitter-olive/20 xl:h-8 xl:w-8"></div>

											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												aria-hidden="true"
												className="transition-colors group-hover:fill-twitter-olive"
											>
												<g>
													<path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z" />
												</g>
											</svg>
										</div>
										<span className="text-sm transition-colors xl:text-base">142</span>
									</div>
									<div className="group flex items-center gap-1 hover:text-twitter-candy-pink">
										<div className="relative h-4 w-4 xl:h-5 xl:w-5">
											<div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors group-hover:bg-twitter-candy-pink/20 xl:h-8 xl:w-8"></div>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												aria-hidden="true"
												className="transition-colors group-hover:fill-twitter-candy-pink"
											>
												<g>
													<path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z" />
												</g>
											</svg>
										</div>
										<span className="text-sm transition-colors xl:text-base">642</span>
									</div>
									<div className="group flex items-center gap-1 hover:text-twitter-blue">
										<div className="relative h-4 w-4 xl:h-5 xl:w-5">
											<div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors group-hover:bg-twitter-blue/20 xl:h-8 xl:w-8"></div>

											<svg
												viewBox="0 0 24 24"
												aria-hidden="true"
												className="transition-colors group-hover:fill-twitter-blue"
											>
												<g>
													<path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
												</g>
											</svg>
										</div>
										<span className="text-sm transition-colors xl:text-base">759</span>
									</div>
								</div>
							</div>
						</div>
					</article>
				</Link>
			</ProjectDescription>
		</div>
	)
}
