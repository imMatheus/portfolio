import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface SpotifyData {
	currentlyPlaying: {
		isPlaying: boolean
		title: string
		artist: string
		albumArt: string
		progressMs: number
		durationMs: number
	} | null
	recentTracks: {
		title: string
		artist: string
		albumArt: string
		playedAt: string
	}[]
	topArtists: {
		name: string
		image: string
	}[]
	topTracks: {
		title: string
		artist: string
		albumArt: string
	}[]
}

function timeAgo(dateStr: string) {
	const diff = Date.now() - new Date(dateStr).getTime()
	const minutes = Math.floor(diff / 60000)
	if (minutes < 1) return 'Just now'
	if (minutes < 60) return `${minutes}m ago`
	const hours = Math.floor(minutes / 60)
	if (hours < 24) return `${hours}h ago`
	const days = Math.floor(hours / 24)
	return `${days}d ago`
}

function formatMs(ms: number) {
	const minutes = Math.floor(ms / 60000)
	const seconds = Math.floor((ms % 60000) / 1000)
	return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function Skeleton({ className }: { className?: string }) {
	return <div className={`animate-pulse rounded bg-white/10 ${className || ''}`} />
}

function LoadingSkeleton() {
	return (
		<div className="space-y-6">
			<div>
				<div className="mb-3 flex items-center gap-2">
					<div className="h-2 w-2 rounded-full bg-white/20" />
					<Skeleton className="h-4 w-32" />
				</div>
				<div className="flex items-center gap-4">
					<Skeleton className="h-16 w-16 flex-shrink-0 rounded-md" />
					<div className="flex-1 space-y-2">
						<Skeleton className="h-5 w-48" />
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-1.5 w-full rounded-full" />
					</div>
				</div>
			</div>
			<div>
				<Skeleton className="mb-3 h-4 w-28" />
				<div className="space-y-2">
					{Array.from({ length: 5 }).map((_, i) => (
						<div key={i} className="flex items-center gap-3">
							<Skeleton className="h-10 w-10 flex-shrink-0 rounded" />
							<div className="flex-1 space-y-1">
								<Skeleton className="h-4 w-40" />
								<Skeleton className="h-3 w-24" />
							</div>
							<Skeleton className="h-3 w-12" />
						</div>
					))}
				</div>
			</div>
			<div>
				<Skeleton className="mb-3 h-4 w-24" />
				<div className="flex gap-4">
					{Array.from({ length: 5 }).map((_, i) => (
						<div key={i} className="flex flex-col items-center gap-2">
							<Skeleton className="h-16 w-16 rounded-full" />
							<Skeleton className="h-3 w-14" />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export const SpotilistDemo: React.FC = () => {
	const [data, setData] = useState<SpotifyData | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		fetch('/api/spotify')
			.then((res) => {
				if (!res.ok) throw new Error('Failed to fetch')
				return res.json()
			})
			.then((data) => {
				setData(data)
				setLoading(false)
			})
			.catch(() => {
				setError(true)
				setLoading(false)
			})
	}, [])

	return (
		<div className="mt-6">
			{loading ? (
				<LoadingSkeleton />
			) : error ? (
				<p className="text-sm text-white/50">Could not load Spotify data.</p>
			) : data ? (
				<div className="space-y-6">
					{/* Currently Playing */}
					<div className="relative mb-4 w-max">
						<div className="z-10 py-4">
							<h2 className="text-2xl font-bold leading-9 lg:text-3xl lg:leading-10">Currently playing</h2>
							<p className="text-sm text-gray-400 lg:text-base">
								{data.currentlyPlaying?.isPlaying
									? "This is a certified hood banger! Don't @ me 😤"
									: 'Nothing playing right now'}
							</p>
							<Image
								src="/spotilist-arrow.png"
								alt="Spotilist"
								width={215}
								height={103}
								className="absolute -right-10 top-1/2 h-[103px] w-[215px] -translate-y-1/2 translate-x-full object-contain max-lg:hidden"
							/>
						</div>
						{data.currentlyPlaying ? (
							<div className="flex max-w-max gap-3 rounded-md md:gap-4">
								{data.currentlyPlaying.albumArt && (
									<div className="relative aspect-square h-14 w-14 shrink-0 md:h-20 md:w-20 lg:h-24 lg:w-24">
										<Image
											src={data.currentlyPlaying.albumArt}
											alt="Album art"
											fill
											sizes="(min-width: 1024px) 96px, (min-width: 768px) 80px, 56px"
											className="object-cover"
										/>
									</div>
								)}
								<div>
									<h3 className="mb-1 text-base font-semibold sm:text-lg md:text-xl">{data.currentlyPlaying.title}</h3>
									<p className="text-sm text-gray-300 md:text-base">{data.currentlyPlaying.artist}</p>
									<div className="mt-3">
										<div className="h-1 w-44 overflow-hidden rounded-full bg-[#4d4c4c]">
											<div
												className="h-1 bg-spotify-green"
												style={{
													width: `${(data.currentlyPlaying.progressMs / data.currentlyPlaying.durationMs) * 100}%`
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						) : null}
					</div>

					{/* Recent Streams */}
					{data.recentTracks.length > 0 && (
						<div>
							<h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-white/60">Recent Streams</h3>
							<div className="grid grid-cols-1 gap-1 md:grid-cols-2">
								{data.recentTracks.map((track, i) => (
									<div
										key={`${track.title}-${i}`}
										className={`flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-white/5 ${
											i >= 5 ? 'hidden md:flex' : ''
										}`}
									>
										{track.albumArt && (
											<Image
												src={track.albumArt}
												alt="Album art"
												width={40}
												height={40}
												className="h-10 w-10 flex-shrink-0 rounded"
											/>
										)}
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-medium text-white">{track.title}</p>
											<p className="truncate text-xs text-white/50">{track.artist}</p>
										</div>
										<span className="flex-shrink-0 text-xs text-white/30">{timeAgo(track.playedAt)}</span>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Top Artists */}
					{data.topArtists.length > 0 && (
						<div>
							<h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-white/60">
								Top Artists <span className="normal-case tracking-normal text-white/30">· Last 6 months</span>
							</h3>
							<div className="flex flex-wrap gap-4 overflow-x-auto pb-2">
								{data.topArtists.map((artist) => (
									<div key={artist.name} className="flex flex-shrink-0 flex-col items-center gap-2">
										{artist.image && (
											<Image
												src={artist.image}
												alt={artist.name}
												width={80}
												height={80}
												className="size-14 rounded-full object-cover md:size-20"
											/>
										)}
										<span className="max-w-[80px] truncate text-xs text-white/70">{artist.name}</span>
									</div>
								))}
							</div>
						</div>
					)}

					{/* Top Songs */}
					{data.topTracks.length > 0 && (
						<div>
							<h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-white/60">
								Top Songs <span className="normal-case tracking-normal text-white/30">· Last 6 months</span>
							</h3>
							<div className="grid grid-cols-1 gap-1 md:grid-cols-2">
								{data.topTracks.map((track, i) => (
									<div
										key={`${track.title}-${i}`}
										className={`flex items-center gap-3 rounded-lg p-1.5 transition-colors hover:bg-white/5 ${
											i >= 5 ? 'hidden md:flex' : ''
										}`}
									>
										<span className="w-4 flex-shrink-0 text-right text-sm font-medium text-white/30">{i + 1}</span>
										{track.albumArt && (
											<Image
												src={track.albumArt}
												alt="Album art"
												width={40}
												height={40}
												className="h-10 w-10 flex-shrink-0 rounded"
											/>
										)}
										<div className="min-w-0 flex-1">
											<p className="truncate text-sm font-medium text-white">{track.title}</p>
											<p className="truncate text-xs text-white/50">{track.artist}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			) : null}
		</div>
	)
}
