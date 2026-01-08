import React from 'react'
import { GitHub, Linkedin } from 'react-feather'

type SocialLinkProps = {
	href: string
	label: string
	children: React.ReactNode
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, children }) => {
	return (
		<a href={href} target="_blank" rel="noreferrer" aria-label={label} className="group relative">
			<div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors group-hover:bg-gray-800/10 sm:h-10 sm:w-10" />
			<span className="relative">{children}</span>
		</a>
	)
}

const Footer: React.FC = () => {
	const year = new Date().getFullYear()

	return (
		<footer className="border-t border-black bg-gray-100">
			<div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
				<div className="space-y-2">
					<p className="text-base font-semibold">Matheus Mendes</p>
					<p className="text-sm text-gray-600">Full-stack software engineer.</p>
					<p className="text-sm text-gray-600">© {year}</p>
				</div>

				<div className="flex flex-col gap-3 sm:items-end">
					<nav aria-label="Footer links" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
						<a href="#top" className="underline decoration-black/30 underline-offset-4 hover:decoration-black">
							Back to top
						</a>
						<a
							href="https://github.com/imMatheus"
							target="_blank"
							rel="noreferrer"
							className="underline decoration-black/30 underline-offset-4 hover:decoration-black"
						>
							GitHub
						</a>
						<a
							href="https://x.com/whosmatu"
							target="_blank"
							rel="noreferrer"
							className="underline decoration-black/30 underline-offset-4 hover:decoration-black"
						>
							X
						</a>
						<a
							href="https://www.linkedin.com/in/matheus-mendes-dev/"
							target="_blank"
							rel="noreferrer"
							className="underline decoration-black/30 underline-offset-4 hover:decoration-black"
						>
							LinkedIn
						</a>
					</nav>

					<div className="flex items-center gap-4">
						<SocialLink href="https://github.com/imMatheus" label="GitHub">
							<GitHub className="h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />
						</SocialLink>
						<SocialLink href="https://x.com/whosmatu" label="X">
							<svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 cursor-pointer sm:h-6 sm:w-6">
								<g>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
								</g>
							</svg>
						</SocialLink>
						<SocialLink href="https://www.linkedin.com/in/matheus-mendes-dev/" label="LinkedIn">
							<Linkedin className="h-5 w-5 cursor-pointer sm:h-6 sm:w-6" />
						</SocialLink>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
