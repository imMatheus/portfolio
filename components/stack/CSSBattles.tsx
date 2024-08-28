import React from 'react'
import { Title } from './index'
import Image from 'next/image'
import Tetris from './tetris.png'
import LetterA from './letter-a.png'
import LetterB from './letter-b.png'
import Duck from './duck.png'
import Summit from './summit.png'
import Eclipse from './eclipse.png'
import Bee from './bee.png'
import VideoReel from './video-reel.png'

interface CSSBattlesProps {}

export const CSSBattles: React.FC<CSSBattlesProps> = ({}) => {
	return (
		<div>
			<Title>Rank 1000 on CSS Battles</Title>
			<p className="mb-2 max-w-4xl text-base text-black">
				I really like CSS (I don&apos;t really get the hate), and one of my favorite sites is{' '}
				<a href="https://cssbattles.com" className="underline" target="">
					CSS Battles
				</a>{' '}
				where you can compete with CSS. I used to play it a lot and got to rank 800, but now im sitting at around{' '}
				<b>1000</b>. There is about <b>350k</b> users on the platform.
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

			<div className="mt-4 grid grid-cols-2 gap-2 bg-[#000] p-2 lg:grid-cols-4">
				<a href="https://cssbattle.dev/leaderboard/target/122" className="bg-neutral-200 px-2 pt-2">
					<Image src={Tetris} className="" alt="Tetris css battles" />
					<div className="py-3">
						<p className="text-lg font-medium text-[#6b7b8e]">
							Rank <b>#36</b> in the world
						</p>
					</div>
				</a>
				<a href="https://cssbattle.dev/leaderboard/target/89" className="bg-neutral-200 px-2 pt-2">
					<Image src={Summit} className="" alt="Tetris css battles" />
					<div className="py-3">
						<p className="text-lg font-medium text-[#6b7b8e]">
							Rank <b>#74</b> in the world
						</p>
					</div>
				</a>

				<a href="https://cssbattle.dev/leaderboard/target/129" className="bg-neutral-200 px-2 pt-2">
					<Image src={LetterB} className="" alt="Tetris css battles" />
					<div className="py-3">
						<p className="text-lg font-medium text-[#6b7b8e]">
							Rank <b>#36</b> in the world
						</p>
					</div>
				</a>
				<a href="https://cssbattle.dev/leaderboard/target/126" className="bg-neutral-200 px-2 pt-2">
					<Image src={LetterA} className="" alt="Tetris css battles" />
					<div className="py-3">
						<p className="text-lg font-medium text-[#6b7b8e]">
							Rank <b>#38</b> in the world
						</p>
					</div>
				</a>
				<a href="https://cssbattle.dev/leaderboard/target/140" className="bg-neutral-200 px-2 pt-2">
					<Image src={Eclipse} className="" alt="Tetris css battles" />
					<div className="py-3">
						<p className="text-lg font-medium text-[#6b7b8e]">
							Rank <b>#52</b> in the world
						</p>
					</div>
				</a>
				<a href="https://cssbattle.dev/leaderboard/target/126" className="bg-neutral-200 px-2 pt-2">
					<Image src={Duck} className="" alt="Tetris css battles" />
					<div className="py-3">
						<p className="text-lg font-medium text-[#6b7b8e]">
							Rank <b>#62</b> in the world
						</p>
					</div>
				</a>
				<a href="https://cssbattle.dev/leaderboard/target/76" className="bg-neutral-200 px-2 pt-2">
					<Image src={Bee} className="" alt="Tetris css battles" />
					<div className="py-3">
						<p className="text-lg font-medium text-[#6b7b8e]">
							Rank <b>#86</b> in the world
						</p>
					</div>
				</a>
				<a href="https://cssbattle.dev/leaderboard/target/67" className="bg-neutral-200 px-2 pt-2">
					<Image src={VideoReel} className="" alt="Tetris css battles" />
					<div className="py-3">
						<p className="text-lg font-medium text-[#6b7b8e]">
							Rank <b>#74</b> in the world
						</p>
					</div>
				</a>
			</div>
		</div>
	)
}
