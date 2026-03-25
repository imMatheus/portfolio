import React from 'react'
import { Linkedin } from 'react-feather'

const Footer: React.FC = () => {
	return (
		<footer className="bg-white py-8">
			<div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4">
				<p className="text-center text-sm text-gray-600">
					Thanks for looking! Feel free to connect with me.
				</p>
				<div className="flex gap-4">
					<a
						href="https://x.com/whosmatu"
						target="_blank"
						rel="noreferrer"
						className="text-gray-500 transition-colors hover:text-black"
					>
						<svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
							<g>
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
							</g>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/matheus-mendes-dev/"
						target="_blank"
						rel="noreferrer"
						className="text-gray-500 transition-colors hover:text-black"
					>
						<Linkedin className="h-5 w-5" />
					</a>
				</div>
				<p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Matheus Mendes</p>
			</div>
		</footer>
	)
}

export default Footer
