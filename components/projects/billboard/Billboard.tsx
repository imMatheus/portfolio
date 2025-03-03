import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import Image from 'next/image'
import { MoreHorizontal } from 'react-feather'
import { cn } from 'lib/utils'
import Link from 'next/link'

type Billboard = {
	caption: string
	imgUrl: string
	comments: number
	retweets: number
	likes: string
	views: string
	link: string
	date: string
	className?: string
}

const billboards: Billboard[] = [
	{
		caption: "it's always the CS grads' fault",
		imgUrl: 'https://pbs.twimg.com/media/GiBxSz9bcAAJ0qF?format=jpg&name=medium',
		comments: 58,
		retweets: 514,
		likes: '11k',
		views: '410k',
		link: 'https://x.com/whosmatu/status/1882629609256267776',
		date: 'Jan 24 2025'
	},
	{
		caption: 'ai is a zero sum game',
		imgUrl: 'https://pbs.twimg.com/media/GiXuBheaYAEBZU2?format=jpg&name=small',
		comments: 12,
		retweets: 47,
		likes: '1.4k',
		views: '44k',
		link: 'https://x.com/whosmatu/status/1884176730736451799',
		date: 'Jan 28 2025'
	},

	{
		caption: 'we are only 7 really good tabs away from agi, make it happen @cursor_ai',
		imgUrl: 'https://pbs.twimg.com/media/GhyRG6FbsAA4wdf?format=jpg&name=small',
		comments: 46,
		retweets: 93,
		likes: '2.9k',
		views: '133k',
		link: 'https://x.com/whosmatu/status/1881540556708577790',
		date: 'Jan 21 2025'
	},
	// {
	// 	caption: '/imagine @midjourney',
	// 	imgUrl: 'https://pbs.twimg.com/media/Gh41xSibMAABpT9?format=jpg&name=small',
	// 	comments: 6,
	// 	retweets: 0,
	// 	likes: '61k',
	// 	views: '1.8k',
	// 	link: 'https://x.com/whosmatu/status/1882001319621464145',
	// 	date: 'Jan 22 2025'
	// },
	{
		caption: "money can't buy happiness, but it can get you a $500b cluster",
		imgUrl: 'https://pbs.twimg.com/media/Gh786wCaMAEjpI5?format=jpg&name=small',
		comments: 15,
		retweets: 15,
		likes: '553',
		views: '27k',
		link: 'https://x.com/whosmatu/status/1882219783556592014',
		date: 'Jan 23 2025'
	},
	{
		caption: 'you can just not answer things',
		imgUrl: 'https://pbs.twimg.com/media/GiM64LYbgAE8KhT?format=jpg&name=small',
		comments: 10,
		retweets: 6,
		likes: '178',
		views: '10k',
		link: 'https://x.com/whosmatu/status/1883416653104595276',
		date: 'Jan 26 2025'
	},

	{
		caption: 'pay to win',
		imgUrl: 'https://pbs.twimg.com/media/GiVAsaUagAANQ_P?format=jpg&name=small',
		comments: 24,
		retweets: 20,
		likes: '458',
		views: '63k',
		link: 'https://x.com/whosmatu/status/1883983386496360812',
		date: 'Jan 27 2025'
	}
]

export const Billboard: React.FC = ({}) => {
	return (
		<div className="mx-auto max-w-[90rem] p-4 pb-20">
			<ProjectTitle>
				<p className="gap-4 text-center">Twitter billboards</p>
			</ProjectTitle>
			<ProjectDescription className="mx-auto max-w-[70ch]">
				<p className="text-center">
					I made some fake billboards on my own and posted them to twitter and some of them went pretty well, you might
					have seen some of them even!
				</p>
			</ProjectDescription>

			<div className="mt-5 grid grid-rows-[masonry] gap-2 md:mt-8 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
				{billboards.map((billboard) => (
					<TwitterCard key={billboard.imgUrl} billboard={billboard} />
				))}
			</div>
		</div>
	)
}

const TwitterCard = ({ billboard }: { billboard: Billboard }) => {
	return (
		<Link
			href={billboard.link}
			target="_blank"
			className={cn('h-max rounded-md border text-[rgb(15_20_25)] transition-colors', billboard.className)}
		>
			<div className="flex items-start gap-3 p-3 xl:p-4">
				<div className="flex flex-col items-end">
					<div className="relative flex-shrink-0 overflow-hidden bg-white">
						<Image
							width={40}
							height={40}
							className="rounded-full"
							src="https://pbs.twimg.com/profile_images/1583456375761420288/v10oq8Qa_400x400.jpg"
							alt={`Matheus profile image`}
						/>
					</div>
				</div>

				<div className="min-w-0 flex-1">
					<div className="flex items-center gap-1.5">
						<h2 className="cursor-pointer font-bold">Matheus Mendes</h2>
						<h3 className="text-sm text-twitter-white-text-grayed">@whosmatu</h3>
						<div className="h-0.5 w-0.5 rounded-full bg-twitter-white-text-grayed" aria-hidden></div>
						<time className="text-sm text-twitter-white-text-grayed" dateTime="18-12-2003">
							Nov 21, 2024
						</time>

						<div className="relative ml-auto">
							<div className="group relative">
								<div className="group-hover:bg-carolina/20 absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors"></div>
								<MoreHorizontal className="text-text-grayed group-hover:text-carolina relative h-4 w-4" />
							</div>
						</div>
					</div>
					<pre className="min-w-0 whitespace-pre-wrap break-words font-inter text-[rgb(15_20_25)]">
						{billboard.caption}
						<Image src={billboard.imgUrl} alt="Github billboard" width={780} className="mt-3 rounded-lg" height={500} />
					</pre>
					<div className="text-text-grayed mt-3 flex max-w-md gap-6 text-[#536471]">
						<div className="group flex items-center gap-1.5 hover:text-twitter-blue">
							<div className="relative h-4 w-4">
								<div className="absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors group-hover:bg-twitter-blue/20"></div>

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
							<span className="text-[13px] transition-colors">{billboard.comments}</span>
						</div>
						<div className="group flex items-center gap-1.5 hover:text-twitter-olive">
							<div className="relative h-4 w-4">
								<div className="absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors group-hover:bg-twitter-olive/20"></div>

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
							<span className="text-[13px] transition-colors">{billboard.retweets}</span>
						</div>
						<div className="group flex items-center gap-1.5 hover:text-twitter-candy-pink">
							<div className="relative h-4 w-4">
								<div className="absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors group-hover:bg-twitter-candy-pink/20"></div>
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
							<span className="text-[13px] transition-colors">{billboard.likes}</span>
						</div>
						<div className="group flex items-center gap-1.5 hover:text-twitter-blue">
							<div className="relative h-4 w-4">
								<div className="absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-transparent transition-colors group-hover:bg-twitter-blue/20"></div>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									aria-hidden="true"
									className="transition-colors group-hover:fill-twitter-blue"
								>
									<g>
										<path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
									</g>
								</svg>
							</div>
							<span className="text-[13px] transition-colors">{billboard.views}</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}
