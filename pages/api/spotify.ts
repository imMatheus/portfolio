import type { NextApiRequest, NextApiResponse } from 'next'

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!
const REFRESH_TOKEN = process.env.REFRESH_TOKEN!

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const BASE_URL = 'https://api.spotify.com/v1'

let cache: { data: any; timestamp: number } | null = null
const CACHE_TTL = 60_000 // 60 seconds

async function getAccessToken() {
	const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

	const res = await fetch(TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: REFRESH_TOKEN,
		}),
	})

	const data = await res.json()
	return data.access_token as string
}

async function fetchSpotifyData(accessToken: string) {
	const headers = { Authorization: `Bearer ${accessToken}` }

	const [currentlyPlayingRes, recentRes, topArtistsRes, topTracksRes] = await Promise.all([
		fetch(`${BASE_URL}/me/player/currently-playing`, { headers }),
		fetch(`${BASE_URL}/me/player/recently-played?limit=10`, { headers }),
		fetch(`${BASE_URL}/me/top/artists?limit=10`, { headers }),
		fetch(`${BASE_URL}/me/top/tracks?limit=10`, { headers }),
	])

	const currentlyPlaying =
		currentlyPlayingRes.status === 200 ? await currentlyPlayingRes.json() : null

	const recentTracks = recentRes.status === 200 ? await recentRes.json() : { items: [] }
	const topArtists = topArtistsRes.status === 200 ? await topArtistsRes.json() : { items: [] }
	const topTracks = topTracksRes.status === 200 ? await topTracksRes.json() : { items: [] }

	return {
		currentlyPlaying: currentlyPlaying
			? {
				isPlaying: currentlyPlaying.is_playing,
				title: currentlyPlaying.item?.name,
				artist: currentlyPlaying.item?.artists?.map((a: any) => a.name).join(', '),
				albumArt: currentlyPlaying.item?.album?.images?.[0]?.url,
				progressMs: currentlyPlaying.progress_ms,
				durationMs: currentlyPlaying.item?.duration_ms,
			}
			: null,
		recentTracks: recentTracks.items?.map((item: any) => ({
			title: item.track?.name,
			artist: item.track?.artists?.map((a: any) => a.name).join(', '),
			albumArt: item.track?.album?.images?.[1]?.url || item.track?.album?.images?.[0]?.url,
			playedAt: item.played_at,
		})) || [],
		topArtists: topArtists.items?.map((artist: any) => ({
			name: artist.name,
			image: artist.images?.[1]?.url || artist.images?.[0]?.url,
		})) || [],
		topTracks: topTracks.items?.map((track: any) => ({
			title: track.name,
			artist: track.artists?.map((a: any) => a.name).join(', '),
			albumArt: track.album?.images?.[1]?.url || track.album?.images?.[0]?.url,
		})) || [],
	}
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') {
		return res.status(405).json({ error: 'Method not allowed' })
	}

	try {
		if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
			return res.status(200).json(cache.data)
		}

		const accessToken = await getAccessToken()
		const data = await fetchSpotifyData(accessToken)

		cache = { data, timestamp: Date.now() }

		return res.status(200).json(data)
	} catch (error) {
		console.error('Spotify API error:', error)
		return res.status(500).json({ error: 'Failed to fetch Spotify data' })
	}
}
