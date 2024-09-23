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

interface CSSBattleCardProps {
	image: StaticImageData
	rank: number
	target: number
}

const CSSBattleCard: React.FC<CSSBattleCardProps> = ({ image, rank, target }) => {
	return (
		<div className="group relative">
			<div className="absolute inset-0 bg-dema group-odd:bg-[#ffdf00]"></div>
			<a
				href={`https://cssbattle.dev/leaderboard/target/${target}`}
				className="relative block bg-neutral-200 px-2 pt-2 transition-transform hover:translate-x-1.5 group-odd:hover:-translate-y-1.5 group-even:hover:translate-y-1.5"
				target="_blank"
			>
				<Image src={image} className="" alt="Tetris css battles" />
				<div className="py-3">
					<p className="text-lg font-medium text-[#6b7b8e]">
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
				where you can compete with CSS. I used to play it a lot and at one point I got to rank 800, but now im siting at
				around <b>1000</b>. There is about <b>350k</b> total users on the platform.
			</p>

			<div className="rounded-2xl bg-[#07080b]">
				<div className="flex items-center justify-between rounded-2xl bg-[linear-gradient(95.41deg,rgba(45,55,64,0.5)_0,rgba(39,45,52,0.5)_101.76%)] px-4 py-3 shadow-[0px_8px_20px_rgba(0,0,0,.1),0px_24px_50px_rgba(0,0,0,.15),inset_1px_1px_3px_hsla(0,0%,100%,.1)]">
					<div className="flex items-center gap-4">
						<div className="relative h-10 w-10 rounded-full border-2 border-[#ffdf00]">
							<Image
								src="/p-2-medium.jpeg"
								className="rounded-full border-2 border-gray-800"
								layout="fill"
								objectFit="cover"
								alt="headshot"
							/>
						</div>
						<p className="font-semibold text-[#ffdf00]">Matheus Mendes</p>
					</div>
					<div className="text-[#cbd1e1]">53700.24</div>
					<div className="text-[#cbd1e1]">(84 Targets)</div>
					<div className="text-xl text-[#6b7b8e]">#1146</div>
				</div>
			</div>

			<div className="mt-4 grid grid-cols-2 gap-3 bg-[#000] p-3 lg:grid-cols-4">
				{battles.map((battle, index) => (
					<CSSBattleCard key={index} {...battle} />
				))}
			</div>
		</div>
	)
}
