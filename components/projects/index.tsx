import React, { PropsWithChildren } from 'react'
import LucioCode from './luciocode/LucioCode'

import Sorter from './sorter/Sorter'
import Spacer from '../Spacer'
import Twitter from './twitter/Twitter'
import Cube from './rubics-cube'
import Dema from './dema'
import VercelUi from './vercel-ui/VercelUi'
import { Acasting } from './acasting/Acasting'
import { Overwatch } from './overwatch/Overwatch'
import { Lovable } from './lovable/Lovable'
import { Codex } from './codex/Codex'
import { Billboard } from './billboard/Billboard'
import { Midjourney } from './midjourney/Midjourney'
import { Jmail } from './jmail/Jmail'
import { Spotilist } from './spotilist/Spotilist'
import { Sudoku } from './sudoku/Sudoko'
import {
	WhiteBlackWhite,
	WhiteDema,
	DemaBlack,
	BlackWhite,
	WhiteBlack,
	BlackOverwatch,
	OverwatchDark,
	DarkPurple,
	PurpleApple2,
	AppleTeal,
	BlackBee,
	BeeBlurple,
	BlurpleWhite
} from 'lib/spacers/index'

interface Props {
	contributionsCollection: any
}

export const ProjectWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="mx-auto w-screen max-w-7xl overflow-hidden p-4 sm:px-8 sm:py-6">{children}</div>
}

export const Projects: React.FC<Props> = ({}) => {
	return (
		<div className="relative w-screen">
			<section className="relative bg-white">
				{/* <section className="relative bg-[#f2330d]"> */}
				<ProjectWrapper>
					<Midjourney />
				</ProjectWrapper>
			</section>

			<Spacer>
				<WhiteBlackWhite />
			</Spacer>
			<section className="bg-white">
				<ProjectWrapper>
					<Jmail />
				</ProjectWrapper>
			</section>

			<Spacer>
				<WhiteDema />
			</Spacer>

			<section className="relative bg-dema">
				<ProjectWrapper>
					<Dema />
				</ProjectWrapper>
			</section>

			<Spacer>
				<DemaBlack />
			</Spacer>

			<section className="bg-[#000]">
				<ProjectWrapper>
					<Lovable />
				</ProjectWrapper>
			</section>

			<section className="bg-[#000]">
				<ProjectWrapper>
					<Codex />
				</ProjectWrapper>
			</section>

			<Spacer>
				<BlackWhite />
			</Spacer>

			<section className="bg-white">
				<ProjectWrapper>
					<Cube />
				</ProjectWrapper>
			</section>

			{/* <div className="rotate-180"> */}
			<Spacer>
				<WhiteBlack />
			</Spacer>
			{/* </div> */}

			<section className="bg-[#000]">
				<VercelUi />
			</section>

			<Spacer>
				<BlackOverwatch />
			</Spacer>
			<section className="bg-[#b8c6dd]">
				<ProjectWrapper>
					<Overwatch />
				</ProjectWrapper>
			</section>

			<Spacer>
				<OverwatchDark />
			</Spacer>

			<section className="bg-[#181818]">
				<ProjectWrapper>
					<Spotilist />
				</ProjectWrapper>
			</section>

			<Spacer>
				<DarkPurple />
			</Spacer>

			{/* <section className="bg-purple-800"> */}
			{/* <section className="bg-purple-800"> */}
			{/* <section className="bg-[#8338ec]"> */}
			{/* <section className="bg-[#8E68DE]"> */}
			{/* <section className="bg-[#3E1D86]"> */}
			<section className="bg-[#462197]">
				{/* <section className="bg-[#7f56dae6]"> */}
				<ProjectWrapper>
					<Acasting />
				</ProjectWrapper>
			</section>

			<Spacer>
				<PurpleApple2 />
			</Spacer>

			<section className="bg-apple">
				<ProjectWrapper>
					<LucioCode />
				</ProjectWrapper>
			</section>

			<Spacer>
				<AppleTeal />
			</Spacer>

			<section className="bg-[#008080]">
				<ProjectWrapper>
					<Sudoku />
				</ProjectWrapper>
			</section>

			{/* <section className="bg-white">
				<Billboard />
			</section> */}

			{/* <section className="bg-[#000]">
				<ProjectWrapper>
					<Twitter />
				</ProjectWrapper>
			</section>

			<Spacer><BlackBee /></Spacer> */}

			{/* <Spacer><BeeBlurple /></Spacer>
			<section className="bg-blurple">
				<ProjectWrapper>
					<Sorter />
				</ProjectWrapper>
			</section>
			<Spacer><BlurpleWhite /></Spacer> */}
		</div>
	)
}
