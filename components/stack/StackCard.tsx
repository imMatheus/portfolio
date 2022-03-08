import React from 'react'

interface StackCardProps {
	title: string
	date: string
}

const StackCard: React.FC<StackCardProps> = ({ title, date, children }) => {
	return (
		<article className="relative">
			<div className="relative space-y-1.5 rounded-md bg-black p-4 transition-transform group-odd:group-hover:-rotate-2 group-even:group-hover:rotate-2 md:space-y-3">
				<h3 className="text-lg font-bold tracking-wide md:text-xl">{title}</h3>
				<p className="text-sm leading-5 text-gray-300 md:text-base">{children}</p>
				<p className="text-xs text-gray-500">{date}</p>
			</div>
		</article>
	)
}

export default StackCard
