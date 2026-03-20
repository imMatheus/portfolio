import React from 'react'
import Image from 'next/image'

export const JeffTubeApp: React.FC<{ onNavigate?: (app: 'jmail' | 'jefftube' | 'jcal') => void }> = ({
	onNavigate
}) => {
	const videos = [
		{ title: 'EFTA01648780.mp4', views: '771.9K views', likes: '3.3K likes', duration: '0:01' },
		{ title: 'EFTA01648923.mp4', views: '525.1K views', likes: '5.1K likes', duration: '0:58' },
		{ title: 'EFTA01648735.mp4', views: '473K views', likes: '781 likes', duration: '0:02' },
		{ title: 'EFTA01683436.mp4', views: '388.2K views', likes: '838 likes', duration: '0:36' },
		{ title: 'EFTA01648901.mp4', views: '312.5K views', likes: '1.2K likes', duration: '0:14' },
		{ title: 'EFTA01683147.mp4', views: '298.7K views', likes: '2.1K likes', duration: '1:23' },
		{ title: 'EFTA01683512.mp4', views: '245.1K views', likes: '654 likes', duration: '0:08' },
		{ title: 'EFTA01648799.mp4', views: '219.3K views', likes: '491 likes', duration: '0:45' }
	]

	return (
		<div className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-jmail-surface font-roboto text-jmail-text">
			{/* Top navbar */}
			<div
				className="flex shrink-0 cursor-pointer items-center border-b border-jmail-border bg-jmail-surface px-4 py-2"
				onClick={() => onNavigate?.('jefftube')}
			>
				<div className="flex shrink-0 items-center gap-1">
					<Image src="/jefftube.png" width={28} height={28} alt="JeffTube" className="h-7 w-7 object-contain" />
					<span className="text-base font-bold tracking-tight text-jmail-text">JeffTube</span>
				</div>
				<div className="flex-1" />
				<div className="flex shrink-0 items-center gap-3">
					<div className="relative flex h-7 w-7 items-center justify-center">
						<svg className="absolute inset-0 h-7 w-7" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z"
								fill="#F6AD01"
							/>
							<path
								d="M32.15,33.27C28.95,36.21,24.68,38,20,38c-6.95,0-12.98-3.95-15.99-9.73l-1.79,0.91C5.55,35.61,12.26,40,20,40c5.2,0,9.93-1.98,13.48-5.23L32.15,33.27z"
								fill="#249A41"
							/>
							<path
								d="M33.49,34.77C37.49,31.12,40,25.85,40,20c0-5.86-2.52-11.13-6.54-14.79l-1.37,1.46C35.72,9.97,38,14.72,38,20c0,5.25-2.26,9.98-5.85,13.27L33.49,34.77z"
								fill="#3174F1"
							/>
							<path
								d="M20,2c4.65,0,8.89,1.77,12.09,4.67l1.37-1.46C29.91,1.97,25.19,0,20,0l0,0C12.21,0,5.46,4.46,2.16,10.96L3.88,12C6.83,6.08,12.95,2,20,2"
								fill="#E92D18"
							/>
						</svg>
						<Image src="/jeff-profile.png" width={22} height={22} alt="Profile" className="rounded-full object-cover" />
					</div>
				</div>
			</div>

			{/* Body */}
			<div className="flex min-h-0 flex-1 overflow-hidden">
				{/* Sidebar */}
				<div className="w-[120px] shrink-0 overflow-y-auto border-r border-jmail-border bg-jmail-surface px-1.5 py-2">
					<div className="flex items-center gap-3 rounded-lg bg-jmail-surface-hover px-2 py-1.5">
						<svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-jmail-text" fill="currentColor">
							<path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z" />
						</svg>
						<span className="text-xs font-medium text-jmail-text">Home</span>
					</div>
					<div className="flex items-center gap-3 rounded-lg px-2 py-1.5 text-jmail-text-secondary">
						<svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
							<path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" />
						</svg>
						<span className="text-xs text-jmail-text-secondary">Shorts</span>
					</div>
					<div className="my-2 border-t border-jmail-border-lighter" />
					<div className="flex items-center justify-between px-2 py-1.5">
						<span className="text-xs font-medium text-jmail-text">Explore more</span>
						<svg viewBox="0 0 24 24" className="h-4 w-4 text-jmail-text" fill="currentColor">
							<path d="M9.4 18.4l-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z" />
						</svg>
					</div>
					{[
						{ name: 'JMail', icon: '/jmail.png', app: 'jmail' as const },
						{ name: 'JCal', icon: '/jcal.png', app: 'jcal' as const }
					].map((item) => (
						<button
							key={item.name}
							onClick={(e) => {
								e.stopPropagation()
								onNavigate?.(item.app)
							}}
							className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-jmail-text-secondary hover:bg-jmail-surface-hover"
						>
							<Image
								src={item.icon}
								width={20}
								height={20}
								alt={item.name}
								className="h-5 w-5 shrink-0 rounded-sm object-contain"
							/>
							<span className="text-xs">{item.name}</span>
						</button>
					))}
				</div>

				{/* Main content */}
				<div className="flex-1 overflow-y-auto overflow-x-hidden">
					{/* Banner */}
					<Image
						src="/jefftube-banner.png"
						width={600}
						height={120}
						alt="Banner"
						className="h-[120px] w-full object-cover"
					/>

					{/* Channel info */}
					<div className="flex gap-3 px-4 py-3">
						<Image
							src="/jeff-profile.png"
							width={48}
							height={48}
							alt="Jeffrey Epstein"
							className="h-14 w-14 shrink-0 rounded-full border border-jmail-border object-cover"
						/>
						<div className="min-w-0 flex-1">
							<div className="flex items-center gap-1">
								<span className="text-base font-bold text-jmail-text">Jeffrey Epstein</span>
								<svg className="h-4 w-4 text-jmail-text-dim" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
								</svg>
							</div>
							<div className="text-xs text-jmail-text-dim">
								@jeevacation · 1102 videos · 9,496,123 views · 68,056 likes
							</div>
							<div className="mt-0.5 line-clamp-1 text-xs leading-snug text-jmail-text-secondary">
								All of the videos released by the DOJ from the Epstein files.
							</div>
							<div className="mt-2 flex items-center gap-1">
								<button className="flex items-center gap-1.5 rounded-full bg-jmail-surface-hover px-3 py-1.5 text-xs font-medium text-jmail-text">
									<svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
										<path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15c0-2.92 1.56-5.22 4-5.98V3.96c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z" />
									</svg>
									Subscribed
									<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
										<path d="M12 15.7l-5.6-5.6.7-.7 4.9 4.9 4.9-4.9.7.7z" />
									</svg>
								</button>
							</div>
						</div>
					</div>

					{/* Tabs */}
					<div className="flex items-center border-b border-jmail-border px-4">
						<div className="border-b-2 border-jmail-text px-3 py-2 text-sm font-semibold text-jmail-text">Videos</div>
						<div className="px-3 py-2 text-sm text-jmail-text-dim">Playlists</div>
						<div className="ml-auto">
							<svg
								className="h-5 w-5 text-jmail-text-dim"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</div>
					</div>

					{/* Video grid */}
					<div className="grid grid-cols-4 gap-3 p-4">
						{videos.map((video, i) => (
							<div key={i} className="flex flex-col">
								<div className="relative aspect-video w-full overflow-hidden rounded-lg">
									<Image
										src="/jefftube-empty.png"
										width={200}
										height={112}
										alt=""
										className="absolute inset-0 h-full w-full object-cover"
									/>
									<div className="bg-jmail-text/80 absolute bottom-1 right-1 rounded px-1 py-0.5 text-[10px] leading-tight text-jmail-surface">
										{video.duration}
									</div>
								</div>
								<div className="mt-1.5">
									<div className="line-clamp-2 text-xs font-medium leading-snug text-jmail-text">{video.title}</div>
									<div className="mt-0.5 text-[11px] text-jmail-text-dim">
										{video.views} · {video.likes}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
