import React, { PropsWithChildren } from 'react'
import LucioCode from './luciocode/LucioCode'

import Spacer from '../Spacer'
import Cube from './rubics-cube'
import Dema from './dema'
import VercelUi from './vercel-ui/VercelUi'
import { Acasting } from './acasting/Acasting'
import { Overwatch } from './overwatch/Overwatch'
import { Lovable } from './lovable/Lovable'
import { Codex } from './codex/Codex'
import { Midjourney } from './midjourney/Midjourney'
import { Jmail } from './jmail/Jmail'
import { Spotilist } from './spotilist/Spotilist'
import { Sudoku } from './sudoku/Sudoko'
import { Daij } from './daij/Daij'
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
	TealWhite,
	BlackBlack
} from 'lib/spacers/index'

export const ProjectWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="mx-auto w-screen max-w-7xl overflow-hidden p-4 sm:px-8 sm:py-6">{children}</div>
}

export const Projects: React.FC = () => {
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

			<Spacer>
				<BlackBlack />
			</Spacer>

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


			<Spacer>
				<AppleTeal />
			</Spacer>



			<section className="bg-white">
				<ProjectWrapper>
					<Daij />
				</ProjectWrapper>
			</section>

			<Spacer>
				<TealWhite />
			</Spacer>


			<section className="bg-[#008080]">
				<ProjectWrapper>
					<Sudoku />
				</ProjectWrapper>
			</section>


			<Spacer>
				<WhiteBlack />
			</Spacer>

			<section className="bg-[#000]">
				<VercelUi />
			</section>

			<section className="bg-[#462197]">
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
		</div>
	)
}
