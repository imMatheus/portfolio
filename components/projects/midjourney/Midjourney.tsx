import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import MidjourneyImage from './midjourney-logo.png'
import Image from 'next/image'

interface MidjourneyProps {}

export const Midjourney: React.FC<MidjourneyProps> = ({}) => {
	return (
		<div className="" id="midjourney">
			<ProjectTitle>
				<p className="mr-2 inline-block">Midjourney</p>
				<Image src={MidjourneyImage} alt="Midjourney" className="inline h-20 w-20 object-contain" />
			</ProjectTitle>
			<ProjectDescription>Software engineer, February 2025 - Now</ProjectDescription>
		</div>
	)
}
