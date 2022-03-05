import React from 'react'
import { Icon as IconType } from 'react-feather'

interface AboutCardProps {
	title: string
	subtitle: string
	Icon: IconType
	date: string
}

const AboutCard: React.FC<AboutCardProps> = ({ title, subtitle, Icon }) => {
	return (
		<article className="rounded-md border border-black p-3 md:p-4">
			<h3 className="mb-1 text-lg font-black md:mb-2 lg:text-xl">{title}</h3>

			<div className="flex items-center gap-2">
				<Icon className="h-5 w-5 md:h-7 md:w-7" strokeWidth={1} />
				<p className="text-xl font-thin md:text-3xl">{subtitle}</p>
			</div>
		</article>
	)
}

export default AboutCard
