import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { ExternalLink, GitHub } from 'react-feather'
import { SpotilistDemo } from './SpotilistDemo'

export const Spotilist: React.FC = () => {
	return (
		<div id="spotilist" className="text-white">
			<ProjectTitle>
				<span className="text-spotify-green">Spotilist</span>
			</ProjectTitle>
			<ProjectDescription className="text-white/80">
				March 2024, <ProjectTag isWork={false} />
				<br />
				<br />
				I absolutely love music and listen to it all the time. I get over 100,000 minutes on my Spotify Wrapped, but I did not want to wait until the end of the year to see what I enjoy listening to, so I reverse-engineered the Spotify API to get my listening stats and display them on a website.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://music.immatheus.com" Icon={ExternalLink} text="Live Site" />
				<Link href="https://github.com/imMatheus/spotilist" Icon={GitHub} text="GitHub" />
			</LinkWrapper>
			<SpotilistDemo />
		</div>
	)
}
