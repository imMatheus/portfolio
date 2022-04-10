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
			className={`flex cursor-pointer items-center gap-1 border-b border-transparent text-sm ${
				isWhite ? 'hover:border-b-white' : 'hover:border-b-black'
			}`}
		>
			<Icon className="h-4 w-4 flex-shrink-0" /> {text}
		</a>
	)
}

export default Link
