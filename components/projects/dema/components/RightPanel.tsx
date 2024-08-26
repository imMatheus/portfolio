import { useAtom } from 'jotai'
import React from 'react'
import { chartGraphAtom } from '../state'
import { cn } from 'lib/utils'

interface RightPanelProps {}

export const RightPanel: React.FC<RightPanelProps> = ({}) => {
	const [chartGraph, setChartGraphAtom] = useAtom(chartGraphAtom)

	return (
		<div className="hidden flex-shrink-0 border-l md:block">
			<div className="p-4">
				<p className="mb-4 text-neutral-800">Report details</p>
				<button className="mb-2 flex min-h-8 items-center gap-2 border px-2 text-sm hover:bg-neutral-100 focus:bg-neutral-200">
					<div className="h-4 w-4 bg-purple-500 text-center text-xs text-white">1</div>
					Net gross profit
				</button>

				<div className="flex flex-wrap gap-y-1">
					<button
						className={cn(
							'flex h-8 w-8 cursor-pointer items-center justify-center bg-neutral-200 text-gray-700',
							chartGraph === 'line' && 'border-[rgba(39,_39,_37,_0.16)] border bg-white text-gray-900 shadow'
						)}
						onClick={() => setChartGraphAtom('line')}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							focusable="false"
							className="h-4 w-4 text-inherit"
							aria-label="ChartLineIcon"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2 2H3.66667V20.3333H22V22H2V2ZM16.5237 6.29757L21.2202 10.9939L20.0417 12.1724L16.5237 8.65458L9.22222 15.9561L5.8948 12.6288L7.0733 11.4503L9.2222 13.5991L16.5237 6.29757Z"
								fill="currentcolor"
							></path>
						</svg>
					</button>
					<button
						className={cn(
							'flex h-8 w-8 cursor-pointer items-center justify-center bg-neutral-200 text-gray-700',
							chartGraph === 'column' && 'border-[rgba(39,_39,_37,_0.16)] border bg-white text-gray-900 shadow'
						)}
						onClick={() => setChartGraphAtom('column')}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							focusable="false"
							className="h-4 w-4 text-inherit"
							aria-label="ChartLineIcon"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2 2H3.66667V20.3333H22V22H2V2ZM16.5237 6.29757L21.2202 10.9939L20.0417 12.1724L16.5237 8.65458L9.22222 15.9561L5.8948 12.6288L7.0733 11.4503L9.2222 13.5991L16.5237 6.29757Z"
								fill="currentcolor"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}
