import React from 'react'
import { ExternalLink } from 'react-feather'

interface ResumeButtonProps {
	className?: string
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ className = '' }) => {
	return (
		<a
			href="/Matheus-Mendes-Resume.pdf"
			target="_blank"
			rel="noopener noreferrer"
			className={`relative inline-block cursor-pointer text-black transition-transform hover:-rotate-2 ${className}`}
		>
			<div className="absolute -bottom-2 -right-2 h-full w-full rounded-md border border-black bg-white"></div>
			<div className="absolute -bottom-1 -right-1 h-full w-full rounded-md border border-black bg-white"></div>
			<div className="relative flex items-center gap-1 rounded-md border border-black bg-white px-2 py-1 font-medium">
				<ExternalLink className="h-4 w-4 flex-shrink-0 2xl:h-5 2xl:w-5" /> View resume
			</div>
		</a>
	)
}

export default ResumeButton
