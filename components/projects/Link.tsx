import React from 'react'
import type { Icon as IconType } from 'react-feather'

interface LinkProps {
	href: string
	Icon: IconType
	text: string
	isWhite?: boolean
}

const Link: React.FC<LinkProps> = ({ href, Icon, text, isWhite }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="relative mb-4 mt-5 inline-block cursor-pointer text-black transition-transform hover:-rotate-2"
		>
			<div className="absolute -right-2 -bottom-2 h-full w-full rounded-md border border-black bg-white"></div>
			<div className="absolute -right-1 -bottom-1 h-full w-full rounded-md border border-black bg-white"></div>
			<div className="relative flex items-center gap-1 rounded-md border border-black bg-white py-1 px-2">
				<Icon className="h-4 w-4 flex-shrink-0 2xl:h-5 2xl:w-5" /> {text}
			</div>
		</a>
	)
}

export default Link
