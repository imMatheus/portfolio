import Image from 'next/image'
import React from 'react'
import { MoreHorizontal } from 'react-feather'
import Link from 'next/link'
import MetaData from './Metadata'

interface MarkedProps {
	href: string
	children: React.ReactNode
}

const Marked: React.FC<MarkedProps> = ({ href, children }) => {
	return (
		<Link href={href} passHref>
			<a className="inline-block text-twitter-blue hover:underline" target="_blank" rel="noopener">
				{children}
			</a>
		</Link>
	)
}

const Card: React.FC = ({}) => {
	return (
		<article className="mt-2 max-w-3xl rounded-md bg-white text-[rgb(15_20_25)] transition-colors">
			<div className="flex items-start gap-3 p-3 xl:gap-4 xl:p-4">
				<div className="flex flex-col items-end">
					<div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-white xl:h-12 xl:w-12">
						<Image layout="fill" objectFit="cover" src="/p-2-medium.jpeg" alt={`Matheus profile image`} />
					</div>
				</div>

				<div className="min-w-0 flex-1">
					<div className="flex items-center gap-1.5">
						<h2 className="cursor-pointer font-bold">Matheus Mendes</h2>
						<h3 className="text-sm text-twitter-white-text-grayed">@whosmatu</h3>
						<div className="h-0.5 w-0.5 rounded-full bg-twitter-white-text-grayed" aria-hidden></div>
						<time className="text-sm text-twitter-white-text-grayed" dateTime="18-12-2003">
							18 dec, 2003
						</time>

						<div className="relative ml-auto">
							<div className="group relative">
								<div className="group-hover:bg-carolina/20 absolute top-1/2 left-1/2 h-7 w-7 -translate-y-1/2 -translate-x-1/2 rounded-full bg-transparent transition-colors"></div>
								<MoreHorizontal className="text-text-grayed group-hover:text-carolina relative h-4 w-4" />
							</div>
						</div>
					</div>
					<pre className="min-w-0 whitespace-pre-wrap break-words font-grotesk">
						This is a complete Twitter clone with a lot of the functionality you would see on the real website, such as
						light/dark/dimmed mode, replying and liking other peoples tweets, private accounts, DMs and much much more.
						The full tech-stack for this project is <Marked href="https://nextjs.org/">@Next.js</Marked>,{' '}
						<Marked href="https://tailwindcss.com/">@TailwindCSS</Marked>,{' '}
						<Marked href="https://trpc.io/">@tRPC</Marked>, <Marked href="https://www.prisma.io/">@Prisma</Marked>,
						MySQL via <Marked href="https://planetscale.com/">@PlanetScale</Marked>, and last but not least{' '}
						<Marked href="https://www.typescriptlang.org/">@TypeScript</Marked>
						<br />
						<br />
						Want to check it out? <Marked href="https://twitter-clone-immatheus.vercel.app">#ClickMe</Marked>
					</pre>
					<MetaData />
				</div>
			</div>
		</article>
	)
}

export default Card
