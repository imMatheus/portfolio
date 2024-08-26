import React, { useState } from 'react'
import { RightPanel } from './RightPanel'
import { ChartView } from './ChartView'
import { TableView } from './TableView'

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
	const [chartGraph, setChartGraph] = useState<'line' | 'column' | 'area'>('line')
	return (
		<div className="h-full w-full">
			<div className="flex w-full items-center justify-between border-b border-b-neutral-200 px-6 py-2">
				<div className="flex items-center">
					<p className="text-base font-medium text-neutral-800">Starting view</p>
				</div>

				<div className="flex gap-2">
					<button className="h-8 border px-4 text-sm">Export</button>
					<button className="h-8 bg-dema-blue px-4 text-sm text-white">Save</button>
				</div>
			</div>
			<div className="flex h-full">
				<div className=" flex-1">
					<div className="border-b pb-3 pt-3">
						<ChartView chartGraph={chartGraph} />
					</div>
					<TableView />
				</div>
				<RightPanel chartGraph={chartGraph} setChartGraph={setChartGraph} />
			</div>
		</div>
	)
}
