import React, { useState, useRef, useEffect, useCallback } from 'react'

const SONG_A = 'https://pub-5b5da887d0d44388ac15fa702af1c2c6.r2.dev/claude/a-deep-house-track-with-a-four-on-the-floor-kick.wav'
const SONG_B = 'https://pub-5b5da887d0d44388ac15fa702af1c2c6.r2.dev/chatgpt/minimalist-repetition-with-subtle-variations.wav'

const MODELS = [
	{ company: 'ANTHROPIC', name: 'Claude', color: '#d97757', image: 'https://cdn.midjourney.com/3a45bb45-929b-47d0-baa1-d043df6912cf/0_0.png' },
	{ company: 'OPENAI', name: 'ChatGPT', color: '#10a37f', image: 'https://cdn.midjourney.com/e3c988a8-78d0-46d2-9638-ec6d66c660b3/0_0.png' },
	{ company: 'GOOGLE', name: 'Gemini', color: '#4285f4', image: 'https://cdn.midjourney.com/be7d14e2-325a-4d31-96bc-a33550273e36/0_0.png' },
]

const SONGS = [
	{ title: 'Industrial Havoc', artist: 'Gemini', src: SONG_A },
	{ title: 'City Lights Pull', artist: 'ChatGPT', src: SONG_A },
	{ title: 'Redline Pursuit', artist: 'Claude', src: SONG_A },
	{ title: 'Dust on the Dashboard', artist: 'Claude', src: SONG_A },
	{ title: 'Midnight Frequencies', artist: 'Claude', src: SONG_B },
	{ title: 'Stayin\' On The Floor', artist: 'Claude', src: SONG_B },
	{ title: 'Slap City Strut', artist: 'Claude', src: SONG_B },
	{ title: 'Fuego en la Calle', artist: 'Claude', src: SONG_B },
]

function getArtistImage(artist: string) {
	switch (artist) {
		case 'Claude': return 'https://cdn.midjourney.com/3a45bb45-929b-47d0-baa1-d043df6912cf/0_0.png'
		case 'ChatGPT': return 'https://cdn.midjourney.com/e3c988a8-78d0-46d2-9638-ec6d66c660b3/0_0.png'
		case 'Gemini': return 'https://cdn.midjourney.com/be7d14e2-325a-4d31-96bc-a33550273e36/0_0.png'
		default: return ''
	}
}

function formatTime(s: number) {
	const m = Math.floor(s / 60)
	const sec = Math.floor(s % 60)
	return `${m}:${sec.toString().padStart(2, '0')}`
}

const ClaudeIcon = () => (
	<svg className="inline-block size-3" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
		<path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
	</svg>
)

const ChatGPTIcon = () => (
	<svg className="inline-block size-3" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
		<path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
	</svg>
)

const GeminiIcon = () => (
	<svg className="inline-block size-3" viewBox="0 0 296 298" fill="none">
		<mask id="gemini__a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' as const }}>
			<path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
		</mask>
		<g mask="url(#gemini__a)">
			<ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
			<ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5" style={{ filter: 'blur(32px)' }}></ellipse>
			<ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5" style={{ filter: 'blur(32px)' }}></ellipse>
			<path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z" style={{ filter: 'blur(32px)' }}></path>
			<path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z" style={{ filter: 'blur(32px)' }}></path>
			<path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z" style={{ filter: 'blur(32px)' }}></path>
			<path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z" style={{ filter: 'blur(32px)' }}></path>
		</g>
	</svg>
)

export const DaijDemo: React.FC = () => {
	const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)
	const audioRef = useRef<HTMLAudioElement | null>(null)

	const currentSong = currentSongIndex !== null ? SONGS[currentSongIndex] : null

	useEffect(() => {
		const audio = new Audio()
		audioRef.current = audio

		audio.addEventListener('timeupdate', () => setCurrentTime(audio.currentTime))
		audio.addEventListener('loadedmetadata', () => setDuration(audio.duration))
		audio.addEventListener('ended', () => setIsPlaying(false))

		return () => {
			audio.pause()
			audio.src = ''
		}
	}, [])

	const playSong = useCallback((index: number) => {
		const audio = audioRef.current
		if (!audio) return

		if (currentSongIndex === index) {
			if (isPlaying) {
				audio.pause()
				setIsPlaying(false)
			} else {
				audio.play()
				setIsPlaying(true)
			}
			return
		}

		audio.src = SONGS[index].src
		audio.play()
		setCurrentSongIndex(index)
		setIsPlaying(true)
		setCurrentTime(0)
	}, [currentSongIndex, isPlaying])

	const togglePlay = useCallback(() => {
		const audio = audioRef.current
		if (!audio || currentSongIndex === null) return
		if (isPlaying) {
			audio.pause()
			setIsPlaying(false)
		} else {
			audio.play()
			setIsPlaying(true)
		}
	}, [isPlaying, currentSongIndex])

	const playPrev = useCallback(() => {
		if (currentSongIndex === null) return
		const prev = (currentSongIndex - 1 + SONGS.length) % SONGS.length
		playSong(prev)
	}, [currentSongIndex, playSong])

	const playNext = useCallback(() => {
		if (currentSongIndex === null) return
		const next = (currentSongIndex + 1) % SONGS.length
		playSong(next)
	}, [currentSongIndex, playSong])

	const seek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		const audio = audioRef.current
		if (!audio || !duration) return
		const rect = e.currentTarget.getBoundingClientRect()
		const pct = (e.clientX - rect.left) / rect.width
		audio.currentTime = pct * duration
	}, [duration])

	const progress = duration ? (currentTime / duration) * 100 : 0

	return (
		<article className="relative max-w-4xl mt-12">
			<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="relative flex h-full w-full flex-col overflow-hidden rounded-md border border-black bg-white">
				<div className="flex gap-1 border-b border-black p-2">
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
				</div>
				<div className="px-4 py-7 sm:px-8">
					{/* Header */}
					{/* <h3 className="text-center text-5xl font-semibold tracking-wide uppercase">
						SEE S<ClaudeIcon />NGS
						<br />
						FR<ChatGPTIcon />M M<GeminiIcon />DELS
					</h3> */}

					{/* Model Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
						{MODELS.map((model) => (
							<div key={model.name} className="group block">
								<div className="mb-2">
									<div className="flex items-center gap-1">
										{model.name === 'ChatGPT' ? <ChatGPTIcon /> : model.name === 'Gemini' ? <GeminiIcon /> : <ClaudeIcon />}
										<p className="text-[11px] font-medium tracking-wider uppercase text-gray-400">{model.company}</p>
									</div>
									<p className="font-medium tracking-wider">{model.name}</p>
								</div>
								<div className="relative overflow-hidden rounded-2xl">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={model.image}
										alt={model.name}
										className="aspect-square w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:blur-[3px]"
									/>
									<div className="pointer-events-none absolute inset-0 rounded-2xl ring-[0.5px] ring-black/15 ring-inset"></div>
								</div>
							</div>
						))}
					</div>

					{/* Top Songs */}
					<div className="mt-10">
						<h4 className="mb-3 text-[22px] font-medium leading-tight">
							Top songs
							<svg className="ml-1 inline size-4" viewBox="0 0 64 64" fill="currentColor">
								<path d="M19.817 61.863c1.48 0 2.672-.515 3.702-1.546l24.243-23.63c1.352-1.385 1.996-2.737 2.028-4.443 0-1.674-.644-3.09-2.028-4.443L23.519 4.138c-1.03-.998-2.253-1.513-3.702-1.513-2.994 0-5.409 2.382-5.409 5.344 0 1.481.612 2.833 1.739 3.96l20.99 20.347-20.99 20.283c-1.127 1.126-1.739 2.478-1.739 3.96 0 2.93 2.415 5.344 5.409 5.344Z"></path>
							</svg>
						</h4>
						<div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
							{SONGS.map((song, i) => (
								<div
									key={song.title}
									onClick={() => playSong(i)}
									className="group relative flex cursor-pointer items-center gap-3 py-2 pr-2 transition-colors hover:bg-gray-50"
								>
									<div className="absolute right-0 bottom-0 left-0 h-[0.5px] bg-black/[0.15]"></div>
									<div className="relative size-10 shrink-0 overflow-hidden rounded-md">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img src={getArtistImage(song.artist)} alt={song.title} className="size-full object-cover" />
										<div className="pointer-events-none absolute inset-0 rounded-md ring-[0.5px] ring-black/10 ring-inset"></div>
										<div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
											<span className="text-sm text-white">{currentSongIndex === i && isPlaying ? '⏸' : '▶'}</span>
										</div>
									</div>
									<div className="min-w-0 flex-1 font-medium tracking-wider">
										<p className={`truncate text-xs ${currentSongIndex === i ? 'text-[#d97757]' : ''}`}>{song.title}</p>
										<p className="truncate text-xs text-gray-400">{song.artist}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Player Bar */}
					{currentSong && (
						<div className="mt-8 rounded-xl mx-auto border border-black/10 w-72 md:w-96 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
							<div className="flex items-center gap-3 p-3">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									alt={currentSong.title}
									className="size-10 rounded-md object-cover"
									src={getArtistImage(currentSong.artist)}
								/>
								<div className="min-w-0 flex-1">
									<p className="truncate text-xs font-normal">{currentSong.title}</p>
									<p className="text-[11px] text-gray-400">
										{currentSong.artist} · {formatTime(currentTime)} / {formatTime(duration)}
									</p>
								</div>
								<div className="flex shrink-0 items-center gap-1">
									<button
										onClick={playPrev}
										className="flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-gray-100"
										aria-label="Previous"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
											<rect x="4" y="4" width="3" height="16"></rect>
											<polygon points="20,4 9,12 20,20"></polygon>
										</svg>
									</button>
									<button
										onClick={togglePlay}
										className="flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-gray-100"
										aria-label={isPlaying ? 'Pause' : 'Play'}
									>
										{isPlaying ? (
											<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
												<rect x="5" y="4" width="4" height="16"></rect>
												<rect x="15" y="4" width="4" height="16"></rect>
											</svg>
										) : (
											<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
												<polygon points="6,4 20,12 6,20"></polygon>
											</svg>
										)}
									</button>
									<button
										onClick={playNext}
										className="flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-gray-100"
										aria-label="Next"
									>
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
											<polygon points="4,4 15,12 4,20"></polygon>
											<rect x="17" y="4" width="3" height="16"></rect>
										</svg>
									</button>
								</div>
							</div>
							<div className="px-3 pb-3">
								<div
									className="relative h-1 w-full cursor-pointer overflow-hidden rounded-full bg-black/10"
									onClick={seek}
								>
									<div
										className="h-full rounded-full bg-black transition-[width] duration-75"
										style={{ width: `${progress}%` }}
									></div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</article>
	)
}
