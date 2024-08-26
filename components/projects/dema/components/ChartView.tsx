import React from 'react'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from './chart'

const chartData = [
	{ date: '2024-05-01', desktop: 165, mobile: 220 },
	{ date: '2024-05-02', desktop: 293, mobile: 310 },
	{ date: '2024-05-03', desktop: 247, mobile: 190 },
	{ date: '2024-05-04', desktop: 385, mobile: 420 },
	{ date: '2024-05-05', desktop: 481, mobile: 390 },
	{ date: '2024-05-06', desktop: 498, mobile: 520 },
	{ date: '2024-05-07', desktop: 388, mobile: 300 },
	{ date: '2024-05-08', desktop: 149, mobile: 210 },
	{ date: '2024-05-09', desktop: 227, mobile: 180 },
	{ date: '2024-05-10', desktop: 293, mobile: 330 },
	{ date: '2024-05-11', desktop: 335, mobile: 270 },
	{ date: '2024-05-12', desktop: 197, mobile: 240 },
	{ date: '2024-05-13', desktop: 197, mobile: 160 },
	{ date: '2024-05-14', desktop: 448, mobile: 490 },
	{ date: '2024-05-15', desktop: 473, mobile: 380 },
	{ date: '2024-05-16', desktop: 338, mobile: 400 },
	{ date: '2024-05-17', desktop: 499, mobile: 420 },
	{ date: '2024-05-18', desktop: 315, mobile: 350 },
	{ date: '2024-05-19', desktop: 235, mobile: 180 },
	{ date: '2024-05-20', desktop: 177, mobile: 230 },
	{ date: '2024-05-21', desktop: 82, mobile: 140 },
	{ date: '2024-05-22', desktop: 81, mobile: 120 },
	{ date: '2024-05-23', desktop: 252, mobile: 290 },
	{ date: '2024-05-24', desktop: 294, mobile: 220 },
	{ date: '2024-05-25', desktop: 201, mobile: 250 },
	{ date: '2024-05-26', desktop: 213, mobile: 170 },
	{ date: '2024-05-27', desktop: 420, mobile: 460 },
	{ date: '2024-05-28', desktop: 233, mobile: 190 },
	{ date: '2024-05-29', desktop: 78, mobile: 130 },
	{ date: '2024-05-30', desktop: 340, mobile: 280 },
	{ date: '2024-05-31', desktop: 178, mobile: 230 },
	{ date: '2024-06-01', desktop: 178, mobile: 200 },
	{ date: '2024-06-02', desktop: 470, mobile: 410 },
	{ date: '2024-06-03', desktop: 103, mobile: 160 },
	{ date: '2024-06-04', desktop: 439, mobile: 380 },
	{ date: '2024-06-05', desktop: 88, mobile: 140 },
	{ date: '2024-06-06', desktop: 294, mobile: 250 },
	{ date: '2024-06-07', desktop: 323, mobile: 370 },
	{ date: '2024-06-08', desktop: 385, mobile: 320 },
	{ date: '2024-06-09', desktop: 438, mobile: 480 },
	{ date: '2024-06-10', desktop: 155, mobile: 200 },
	{ date: '2024-06-11', desktop: 92, mobile: 150 },
	{ date: '2024-06-12', desktop: 492, mobile: 420 },
	{ date: '2024-06-13', desktop: 81, mobile: 130 },
	{ date: '2024-06-14', desktop: 426, mobile: 380 },
	{ date: '2024-06-15', desktop: 307, mobile: 350 },
	{ date: '2024-06-16', desktop: 371, mobile: 310 },
	{ date: '2024-06-17', desktop: 475, mobile: 520 },
	{ date: '2024-06-18', desktop: 107, mobile: 170 },
	{ date: '2024-06-19', desktop: 341, mobile: 290 },
	{ date: '2024-06-20', desktop: 408, mobile: 450 },
	{ date: '2024-06-21', desktop: 169, mobile: 210 },
	{ date: '2024-06-22', desktop: 317, mobile: 270 },
	{ date: '2024-06-23', desktop: 480, mobile: 530 },
	{ date: '2024-06-24', desktop: 132, mobile: 180 },
	{ date: '2024-06-25', desktop: 141, mobile: 190 },
	{ date: '2024-06-26', desktop: 434, mobile: 380 },
	{ date: '2024-06-27', desktop: 448, mobile: 490 },
	{ date: '2024-06-28', desktop: 149, mobile: 200 },
	{ date: '2024-06-29', desktop: 103, mobile: 160 },
	{ date: '2024-06-30', desktop: 446, mobile: 400 }
]

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: 'hsl(var(--chart-1))'
	},
	mobile: {
		label: 'Mobile',
		color: 'hsl(var(--chart-2))'
	}
}

export const ChartView: React.FC = ({}) => {
	return (
		<div className="px-3 py-10">
			<ChartContainer config={chartConfig} className="h-[250px] aspect-auto w-full">
				<BarChart
					accessibilityLayer
					data={chartData}
					margin={{
						left: 12,
						right: 12
					}}
					barGap={1}
				>
					<CartesianGrid vertical={false} />
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
					<YAxis tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => `${value}`} />
					<ChartTooltip
						content={
							<ChartTooltipContent
								className="w-[150px]"
								nameKey="views"
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
					<Bar dataKey="desktop" fill="var(--color-desktop)" />
					<Bar dataKey="mobile" fill="var(--color-mobile)" />
				</BarChart>
			</ChartContainer>
		</div>
	)
}
