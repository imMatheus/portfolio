import React, { useState } from 'react'

import { Area, AreaChart, Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts'

import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '../../../ui/chart'
import { Switch } from '@/components/ui/switch'
import { chartGraphAtom } from '../state'
import { useAtom } from 'jotai'

const chartConfig = {
	actual: {
		label: 'Actual',
		color: '#9C8EF0'
	},
	previous: {
		label: 'Previous',
		color: '#B2B2AC'
	}
}

export const ChartView: React.FC = ({}) => {
	const [showCompare, setShowCompare] = useState(true)
	const [chartGraph] = useAtom(chartGraphAtom)

	const sharedComponents = (
		<>
			<XAxis
				dataKey="date"
				tickLine={false}
				axisLine={false}
				tickMargin={8}
				minTickGap={32}
				tickFormatter={(value) => {
					const date = new Date(value)
					return date.toLocaleDateString('en-US', {
						month: 'short',
						day: 'numeric'
					})
				}}
			/>
			<YAxis
				tickLine={false}
				axisLine={false}
				tickMargin={8}
				tickFormatter={(value) => `${Number(value).toLocaleString('en-US')}`}
			/>
			<ChartTooltip
				content={
					<ChartTooltipContent
						className="min-w-[150px]"
						labelFormatter={(value) => {
							return new Date(value).toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
								year: 'numeric'
							})
						}}
					/>
				}
			/>
			<ChartLegend content={<ChartLegendContent />} />
		</>
	)

	return (
		<div className="">
			<div className="mb-4 flex items-center justify-end gap-2 px-4">
				<p className="text-xs">Show compare</p>
				<Switch checked={showCompare} onCheckedChange={setShowCompare} />
			</div>

			<ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full px-4">
				{chartGraph === 'line' ? (
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12
						}}
					>
						{sharedComponents}

						<Line
							dataKey="actual"
							isAnimationActive={false}
							stroke={`var(--color-actual)`}
							strokeWidth={2}
							type="linear"
							dot={false}
							radius={0}
						/>
						{showCompare && (
							<Line
								dataKey="previous"
								isAnimationActive={false}
								stroke={`var(--color-previous)`}
								strokeWidth={2}
								type="linear"
								dot={false}
								radius={0}
							/>
						)}
					</LineChart>
				) : chartGraph === 'area' ? (
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12
						}}
					>
						{sharedComponents}

						<Area
							type="linear"
							dataKey="actual"
							stroke={`var(--color-actual)`}
							fill={`var(--color-actual)`}
							fillOpacity={0.3}
							isAnimationActive={false}
						/>
						{showCompare && (
							<Area
								type="linear"
								dataKey="previous"
								stroke={`var(--color-previous)`}
								fill={`var(--color-previous)`}
								fillOpacity={0.3}
								isAnimationActive={false}
							/>
						)}
					</AreaChart>
				) : (
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12
						}}
						barGap={1}
					>
						{sharedComponents}

						<Bar isAnimationActive={false} dataKey="actual" fill="var(--color-actual)" />
						{showCompare && <Bar isAnimationActive={false} dataKey="previous" fill="var(--color-previous)" />}
					</BarChart>
				)}
			</ChartContainer>
		</div>
	)
}

const chartData = [
	{ date: '2024-05-01', actual: 165335, previous: 295320 },
	{ date: '2024-05-02', actual: 295333, previous: 395310 },
	{ date: '2024-05-03', actual: 123233, previous: 195390 },
	{ date: '2024-05-04', actual: 385335, previous: 97553 },
	{ date: '2024-05-05', actual: 485331, previous: 395390 },
	{ date: '2024-05-06', actual: 495338, previous: 595320 },
	{ date: '2024-05-07', actual: 385338, previous: 395300 },
	{ date: '2024-05-08', actual: 145339, previous: 295310 },
	{ date: '2024-05-09', actual: 225337, previous: 195380 },
	{ date: '2024-05-10', actual: 295333, previous: 395330 },
	{ date: '2024-05-11', actual: 335335, previous: 295370 },
	{ date: '2024-05-12', actual: 195337, previous: 295340 },
	{ date: '2024-05-13', actual: 195337, previous: 195360 },
	{ date: '2024-05-14', actual: 445338, previous: 495390 },
	{ date: '2024-05-15', actual: 475333, previous: 395380 },
	{ date: '2024-05-16', actual: 335338, previous: 495300 },
	{ date: '2024-05-17', actual: 495339, previous: 890320 },
	{ date: '2024-05-18', actual: 315335, previous: 395350 },
	{ date: '2024-05-19', actual: 235335, previous: 195380 },
	{ date: '2024-05-20', actual: 175337, previous: 295330 },
	{ date: '2024-05-21', actual: 82533, previous: 149530 },
	{ date: '2024-05-22', actual: 81533, previous: 129530 },
	{ date: '2024-05-23', actual: 255332, previous: 295390 },
	{ date: '2024-05-24', actual: 295334, previous: 295320 },
	{ date: '2024-05-25', actual: 205331, previous: 295350 },
	{ date: '2024-05-26', actual: 215333, previous: 195370 },
	{ date: '2024-05-27', actual: 34932, previous: 494360 },
	{ date: '2024-05-28', actual: 235333, previous: 195390 },
	{ date: '2024-05-29', actual: 78533, previous: 139530 },
	{ date: '2024-05-30', actual: 345330, previous: 295380 },
	{ date: '2024-05-31', actual: 175338, previous: 295330 },
	{ date: '2024-06-01', actual: 175338, previous: 295300 },
	{ date: '2024-06-02', actual: 475330, previous: 495310 },
	{ date: '2024-06-03', actual: 105333, previous: 195360 },
	{ date: '2024-06-04', actual: 435339, previous: 395380 },
	{ date: '2024-06-05', actual: 88533, previous: 149530 },
	{ date: '2024-06-06', actual: 295334, previous: 295350 },
	{ date: '2024-06-07', actual: 325333, previous: 395370 },
	{ date: '2024-06-08', actual: 385335, previous: 395320 },
	{ date: '2024-06-09', actual: 12389, previous: 15300 },
	{ date: '2024-06-10', actual: 155335, previous: 295300 },
	{ date: '2024-06-11', actual: 92533, previous: 159530 },
	{ date: '2024-06-12', actual: 495332, previous: 495320 },
	{ date: '2024-06-13', actual: 81533, previous: 139530 },
	{ date: '2024-06-14', actual: 425336, previous: 395380 },
	{ date: '2024-06-15', actual: 305337, previous: 395350 },
	{ date: '2024-06-16', actual: 375331, previous: 395310 },
	{ date: '2024-06-17', actual: 475335, previous: 595320 },
	{ date: '2024-06-18', actual: 105337, previous: 195370 },
	{ date: '2024-06-19', actual: 345331, previous: 295390 },
	{ date: '2024-06-20', actual: 405338, previous: 495350 },
	{ date: '2024-06-21', actual: 165339, previous: 295310 },
	{ date: '2024-06-22', actual: 315337, previous: 295370 },
	{ date: '2024-06-23', actual: 485330, previous: 595330 },
	{ date: '2024-06-24', actual: 135332, previous: 195380 },
	{ date: '2024-06-25', actual: 145331, previous: 195390 },
	{ date: '2024-06-26', actual: 435334, previous: 395380 },
	{ date: '2024-06-27', actual: 445338, previous: 495390 },
	{ date: '2024-06-28', actual: 145339, previous: 295300 },
	{ date: '2024-06-29', actual: 105333, previous: 195360 },
	{ date: '2024-06-30', actual: 445336, previous: 495300 }
]
