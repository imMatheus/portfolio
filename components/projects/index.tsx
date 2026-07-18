import React, { PropsWithChildren } from 'react'
import LucioCode from './luciocode/LucioCode'

import Spacer from '../Spacer'
import Cube from './rubics-cube'
import Dema from './dema'
import VercelUi from './vercel-ui/VercelUi'
import { Acasting } from './acasting/Acasting'
import { SfCapitalist } from './sf-capitalist/SfCapitalist'
import { Overwatch } from './overwatch/Overwatch'
import { Lovable } from './lovable/Lovable'
import { Codex } from './codex/Codex'
import { SpideySense } from './spidey-sense/SpideySense'
import { Midjourney } from './midjourney/Midjourney'
import { Jmail } from './jmail/Jmail'
import { Spotilist } from './spotilist/Spotilist'
import { Sudoku } from './sudoku/Sudoko'
import { Daij } from './daij/Daij'
import {
	WhiteMidjourneyWhite,
	WhiteDema,
	DemaBlack,
	BlackBlack,
	BlackWhite,
	WhiteBlack,
	BlackSf,
	SfOverwatch,
	OverwatchDark,
	DarkWhite,
	WhitePurple,
	PurpleTeal,
	TealBlack,
	BlackApple,
	AppleWhite
} from 'lib/spacers/index'

export const ProjectWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="mx-auto w-screen max-w-7xl overflow-hidden p-4 sm:px-8 sm:py-6">{children}</div>
}

export const Projects: React.FC = () => {
	return (
		<div className="relative w-screen">
			{/* 1. Midjourney (white) */}
			<section className="relative bg-white">
				<ProjectWrapper>
					<Midjourney />
				</ProjectWrapper>
			</section>

			{/* white → midjourney red → white */}
			<Spacer>
				<WhiteMidjourneyWhite />
			</Spacer>

			{/* 2. Jmail (white) */}
			<section className="bg-white">
				<ProjectWrapper>
					<Jmail />
				</ProjectWrapper>
			</section>

			{/* white → dema */}
			<Spacer>
				<WhiteDema />
			</Spacer>

			{/* 3. Dema (dema green) */}
			<section className="relative bg-dema">
				<ProjectWrapper>
					<Dema />
				</ProjectWrapper>
			</section>

			{/* dema → black */}
			<Spacer>
				<DemaBlack />
			</Spacer>

			{/* 4. Lovable (black) */}
			<section className="bg-[#000]">
				<ProjectWrapper>
					<Lovable />
				</ProjectWrapper>
			</section>

			{/* black → black (red accent) */}
			<Spacer>
				<BlackBlack />
			</Spacer>

			{/* 5. Spidey Sense (black) */}
			<section className="bg-[#000]">
				<ProjectWrapper>
					<SpideySense />
				</ProjectWrapper>
			</section>

			{/* black → white */}
			<Spacer>
				<BlackWhite />
			</Spacer>

			{/* 6. Cube (white) */}
			<section className="bg-white">
				<ProjectWrapper>
					<Cube />
				</ProjectWrapper>
			</section>

			{/* white → black */}
			<Spacer>
				<WhiteBlack />
			</Spacer>

			{/* 7. Codex (black) */}
			<section className="bg-[#000]">
				<ProjectWrapper>
					<Codex />
				</ProjectWrapper>
			</section>

			{/* black → sf brown */}
			<Spacer>
				<BlackSf />
			</Spacer>

			{/* 8. SF Capitalist (buy orange) */}
			<section className="bg-[#ec8841]">
				<ProjectWrapper>
					<SfCapitalist />
				</ProjectWrapper>
			</section>

			{/* sf brown → overwatch */}
			<Spacer>
				<SfOverwatch />
			</Spacer>

			{/* 9. Overwatch (overwatch blue) */}
			<section className="bg-[#b8c6dd]">
				<ProjectWrapper>
					<Overwatch />
				</ProjectWrapper>
			</section>

			{/* overwatch → dark */}
			<Spacer>
				<OverwatchDark />
			</Spacer>

			{/* 10. Spotilist (dark) */}
			<section className="bg-[#181818]">
				<ProjectWrapper>
					<Spotilist />
				</ProjectWrapper>
			</section>

			{/* dark → white */}
			<Spacer>
				<DarkWhite />
			</Spacer>

			{/* 11. Daij (white) */}
			<section className="bg-white">
				<ProjectWrapper>
					<Daij />
				</ProjectWrapper>
			</section>

			{/* white → purple */}
			<Spacer>
				<WhitePurple />
			</Spacer>

			{/* 12. Acasting (purple) */}
			<section className="bg-[#462197]">
				<ProjectWrapper>
					<Acasting />
				</ProjectWrapper>
			</section>

			{/* purple → teal */}
			<Spacer>
				<PurpleTeal />
			</Spacer>

			{/* 13. Sudoku (teal) */}
			<section className="bg-[#008080]">
				<ProjectWrapper>
					<Sudoku />
				</ProjectWrapper>
			</section>

			{/* teal → black */}
			<Spacer>
				<TealBlack />
			</Spacer>

			{/* 14. VercelUi (black) */}
			<section className="bg-[#000]">
				<VercelUi />
			</section>

			{/* black → apple */}
			<Spacer>
				<BlackApple />
			</Spacer>

			{/* 15. LucioCode (apple green) */}
			<section className="bg-apple">
				<ProjectWrapper>
					<LucioCode />
				</ProjectWrapper>
			</section>

			{/* apple → white */}
			<Spacer>
				<AppleWhite />
			</Spacer>
		</div>
	)
}
