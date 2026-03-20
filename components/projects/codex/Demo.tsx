import React from 'react'
import TetrisGame from './TetrisGame'

const Demo: React.FC = () => {
	return (
		<article className="relative">
			<div className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-[#c0c0c0] bg-[#f6f6f6] shadow-sm transition-all lg:-bottom-4 lg:-right-4">
				<div className="h-[36px] rounded-t-lg border-b border-[#d4d4d4] bg-[#e8e8e8]"></div>
			</div>
			<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-lg border border-[#c0c0c0] bg-[#f6f6f6] shadow-sm transition-all lg:-bottom-2 lg:-right-2">
				<div className="h-[36px] rounded-t-lg border-b border-[#d4d4d4] bg-[#e8e8e8]"></div>
			</div>

			<div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-[#c0c0c0] bg-white font-mono text-sm shadow-lg">
				{/* Title bar */}
				<div className="flex items-center gap-2 border-b border-[#d4d4d4] bg-[#e8e8e8] px-3 py-2.5">
					<div className="flex gap-1.5">
						<div className="h-3 w-3 rounded-full bg-[#ff5f57]"></div>
						<div className="h-3 w-3 rounded-full bg-[#febc2e]"></div>
						<div className="h-3 w-3 rounded-full bg-[#28c840]"></div>
					</div>
					<span className="flex-1 text-center text-xs text-[#4d4d4d]">
						codex — ~/Desktop/codex/codex-rs — 80×24
					</span>
				</div>

				{/* Terminal content */}
				<div className="space-y-2 bg-white p-3 text-[#1d1d1f] sm:p-4">
					{/* Model bar */}
					<div className="flex flex-wrap gap-x-4 border border-[#d4d4d4] bg-[#f5f5f5] px-3 py-1.5 text-xs text-[#6e6e73]">
						<span>
							model: <span className="text-[#1d1d1f]">gpt-5.3-codex high</span>
						</span>
						<span className="text-[#aeaeb2]">/model to change</span>
						<span>
							directory: <span className="text-[#1d1d1f]">~/Desktop/codex/codex-rs</span>
						</span>
					</div>

					{/* Tip */}
					<p className="text-xs text-[#007aff]">
						<span className="font-bold">Tip:</span> New Try the{' '}
						<span className="font-bold">Codex App</span> with 2x rate limits until April 2nd.
						Run &apos;codex app&apos; or visit the Codex landing page
					</p>

					{/* AI response */}
					<p className="text-xs text-[#1d1d1f]">
						<span className="text-[#34c759]">●</span> Executing your sequence exactly as
						requested: first <code className="text-[#af52de]">sleep 20</code>, then{' '}
						<code className="text-[#af52de]">git pull</code>, then{' '}
						<code className="text-[#af52de]">sleep 120</code>.
					</p>

					{/* Tetris game */}
					<TetrisGame />

					{/* Status bar */}
					<div className="flex flex-wrap gap-x-3 text-xs text-[#6e6e73]">
						<span>
							<span className="text-[#34c759]">●</span> Planning sequential command execution
						</span>
						<span className="text-[#aeaeb2]">(19s ● esc to interrupt)</span>
						<span className="text-[#aeaeb2]">·</span>
						<span>1 background terminal running</span>
						<span className="text-[#aeaeb2]">·</span>
						<span>/ps to view</span>
						<span className="text-[#aeaeb2]">·</span>
						<span>/clean to close</span>
					</div>

					{/* Bottom bar */}
					<div className="border-t border-[#e5e5ea] pt-1 text-xs text-[#aeaeb2]">
						gpt-5.3-codex high · 99% left · ~/Desktop/codex/codex-rs
					</div>
				</div>
			</div>
		</article>
	)
}

export default Demo
