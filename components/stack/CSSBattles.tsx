import React from 'react'
import { Title } from './index'
import Image, { StaticImageData } from 'next/image'
import Tetris from './tetris.png'
import LetterA from './letter-a.png'
import LetterB from './letter-b.png'
import Duck from './duck.png'
import Summit from './summit.png'
import Eclipse from './eclipse.png'
import Bee from './bee.png'
import VideoReel from './video-reel.png'
import { cn } from 'lib/utils'

interface CSSBattleCardProps {
	image: StaticImageData
	rank: number
	target: number
	index: number
}

const CSSBattleCard: React.FC<CSSBattleCardProps> = ({ image, rank, target, index }) => {
	return (
		<div className="group relative">
			<div
				className={cn('absolute inset-0', {
					'bg-red-600': index === 0,
					'bg-blue-600': index === 1,
					'bg-green-600': index === 2,
					'bg-yellow-600': index === 3,
					'bg-purple-600': index === 4,
					'bg-orange-600': index === 5,
					'bg-pink-600': index === 6,
					'bg-cyan-600': index === 7
				})}
			></div>
			<a
				href={`https://cssbattle.dev/leaderboard/target/${target}`}
				className="relative block bg-neutral-200 px-2 pt-2 transition-transform hover:translate-x-1.5 group-odd:hover:-translate-y-1.5 group-even:hover:translate-y-1.5"
				target="_blank"
			>
				<Image src={image} className="" alt="Tetris css battles" />
				<div className="py-3">
					<p className="text-base font-medium text-[#6b7b8e] md:text-lg">
						Rank <b>#{rank}</b> in the world
					</p>
				</div>
			</a>
		</div>
	)
}

export default CSSBattleCard

interface CSSBattlesProps {}

export const CSSBattles: React.FC<CSSBattlesProps> = ({}) => {
	const battles = [
		{ image: Tetris, rank: 36, target: 122 },
		{ image: Summit, rank: 74, target: 89 },
		{ image: LetterB, rank: 36, target: 129 },
		{ image: LetterA, rank: 38, target: 126 },
		{ image: Eclipse, rank: 52, target: 140 },
		{ image: Duck, rank: 62, target: 126 },
		{ image: Bee, rank: 86, target: 76 },
		{ image: VideoReel, rank: 74, target: 67 }
	]

	return (
		<div>
			<Title>Rank #1000 on CSS Battles</Title>
			<p className="mb-2 max-w-4xl text-base text-black">
				I really like CSS (I don&apos;t really get the hate), and one of my favorite sites is{' '}
				<a href="https://cssbattles.com" className="underline" target="">
					CSS Battles
				</a>{' '}
				where you can compete with CSS. I used to play it a lot and at one point I got to rank 800, but now im sitting
				at around <b>1000</b>. There is about <b>350k</b> total users on the platform.
			</p>

			<div className="mt-4 grid grid-cols-2 gap-3 bg-[#000] p-3 lg:grid-cols-4">
				{battles.map((battle, index) => (
					<CSSBattleCard key={`${battle.target}-${index}`} {...battle} index={index} />
				))}
			</div>
		</div>
	)
}
