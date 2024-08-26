import React from 'react'
import { cn } from 'lib/utils'

interface RightPanelProps {
	chartGraph: 'line' | 'column' | 'area'
	setChartGraph: React.Dispatch<React.SetStateAction<'line' | 'column' | 'area'>>
}

export const RightPanel: React.FC<RightPanelProps> = ({ chartGraph, setChartGraph }) => {
	return (
		<div className="hidden min-w-48 flex-shrink-0 border-l md:block">
			<div className="p-4">
				<p className="mb-4 text-neutral-800">Report details</p>
				<button className="mb-2 flex min-h-8 items-center gap-2 border border-neutral-400 px-2 text-sm hover:bg-neutral-100 focus:bg-neutral-200">
					<div className="h-4 w-4 bg-[#9C8EF0] text-center text-xs text-white">1</div>
					Visits
				</button>

				<div className="flex flex-wrap gap-y-1">
					<button
						className={cn(
							'flex h-8 w-8 cursor-pointer items-center justify-center bg-neutral-200 text-gray-700',
							chartGraph === 'line' && 'border border-[rgba(39,_39,_37,_0.16)] bg-white text-gray-900 shadow'
						)}
						onClick={() => setChartGraph('line')}
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
							chartGraph === 'column' && 'border border-[rgba(39,_39,_37,_0.16)] bg-white text-gray-900 shadow'
						)}
						onClick={() => setChartGraph('column')}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							focusable="false"
							className="h-4 w-4 text-inherit"
							aria-label="ChartColumnIcon"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2.09469 1.72998H9.81118L9.81142 11.9573L14.1883 11.9331V6.38114H21.9048V18.3789H20.2348V8.05114H15.8583V18.3789L14.1883 18.379L14.1881 13.6031L9.81156 13.6273V18.3783L8.14156 18.3783L8.14122 3.39998H3.76469V18.3789H2.09469V1.72998ZM22 22.0043H2V20.3343H22V22.0043Z"
								fill="currentcolor"
							></path>
						</svg>
					</button>
					<button
						className={cn(
							'flex h-8 w-8 cursor-pointer items-center justify-center bg-neutral-200 text-gray-700',
							chartGraph === 'area' && 'border border-[rgba(39,_39,_37,_0.16)] bg-white text-gray-900 shadow'
						)}
						onClick={() => setChartGraph('area')}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							focusable="false"
							className="h-4 w-4 text-inherit"
							aria-label="ChartAreaIcon"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M16.6441 3.27979L21.9167 10.0519V18.6713H2.08333V15.116L7.05685 6.44653L11.7765 7.74551L16.6441 3.27979ZM3.75 17.0047H20.25V10.6242L16.4392 5.72958L12.2235 9.59719L7.85982 8.39617L3.75 15.5601V17.0047ZM22 20.3379V22.0045H2V20.3379H22Z"
								fill="currentcolor"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}
