import { cn } from 'lib/utils'
import React, { Fragment } from 'react'

export const TableView: React.FC = () => {
	return (
		<div>
			<div className="grid max-h-72 grid-cols-4 overflow-y-auto md:max-h-96">
				<div className="border-b border-r px-2 py-3 text-xs font-medium md:text-sm">Channel</div>
				<div className="border-b border-r px-2 py-3 text-xs font-medium md:text-sm">Channel group</div>
				<div className="border-b border-r px-2 py-3 text-xs font-medium md:text-sm">Visits</div>
				<div className="border-b px-2 py-3 text-xs font-medium md:text-sm">Sales</div>
				{data.map((row, index) => (
					<Fragment key={index}>
						<div className="border-b border-r px-2 py-1 text-xs">{row.channel}</div>
						<div className="border-b border-r px-2 py-1 text-xs">{row.channelGroup}</div>
						<div className="border-b border-r px-2 py-1 text-xs">
							<p className="leading-[18px]">{row.visits.toLocaleString()}</p>
							<p
								className={cn(
									'text-[10px] leading-[18px]',
									calculatePercentDiff(row.visits, row.visitsOld) > 0 ? 'text-green-700' : 'text-red-700'
								)}
							>
								{calculatePercentDiff(row.visits, row.visitsOld).toFixed(2)}%
							</p>
						</div>
						<div className="border-b px-2 py-1 text-xs">
							<p className="leading-[18px]">{row.sales.toLocaleString()}</p>
							<p
								className={cn(
									'text-[10px] leading-[18px]',
									calculatePercentDiff(row.visits, row.visitsOld) > 0 ? 'text-green-700' : 'text-red-700'
								)}
							>
								{calculatePercentDiff(row.sales, row.salesOld).toFixed(2)}%
							</p>
						</div>
					</Fragment>
				))}
			</div>
		</div>
	)
}

const calculatePercentDiff = (current: number, old: number) => {
	const diff = ((current - old) / old) * 100
	return diff
}
const data = [
	{ channel: 'Instagram', channelGroup: 'Meta', visits: 7645, visitsOld: 6500, sales: 567, salesOld: 479 },
	{ channel: 'Facebook', channelGroup: 'Meta', visits: 5123, visitsOld: 4800, sales: 423, salesOld: 401 },
	{ channel: 'Google Ads', channelGroup: 'Google', visits: 3137, visitsOld: 2900, sales: 289, salesOld: 245 },
	{ channel: 'YouTube', channelGroup: 'Google', visits: 2123, visitsOld: 1800, sales: 178, salesOld: 156 },
	{ channel: 'TikTok', channelGroup: 'ByteDance', visits: 4567, visitsOld: 3200, sales: 345, salesOld: 287 },
	{ channel: 'LinkedIn', channelGroup: 'Microsoft', visits: 1567, visitsOld: 1400, sales: 134, salesOld: 112 },
	{ channel: 'Twitter', channelGroup: 'Twitter', visits: 2567, visitsOld: 2300, sales: 201, salesOld: 189 },
	{ channel: 'Pinterest', channelGroup: 'Pinterest', visits: 1267, visitsOld: 1100, sales: 98, salesOld: 85 },
	{ channel: 'Snapchat', channelGroup: 'Snap Inc.', visits: 3567, visitsOld: 3100, sales: 267, salesOld: 234 },
	{ channel: 'Email', channelGroup: 'Direct', visits: 4567, visitsOld: 4200, sales: 389, salesOld: 356 },
	{ channel: 'Organic Search', channelGroup: 'SEO', visits: 6567, visitsOld: 5800, sales: 512, salesOld: 478 },
	{ channel: 'WhatsApp', channelGroup: 'Meta', visits: 2345, visitsOld: 2100, sales: 187, salesOld: 165 },
	{ channel: 'Bing Ads', channelGroup: 'Microsoft', visits: 987, visitsOld: 850, sales: 76, salesOld: 62 },
	{ channel: 'Reddit', channelGroup: 'Reddit', visits: 1876, visitsOld: 1600, sales: 143, salesOld: 128 },
	{ channel: 'Quora', channelGroup: 'Quora', visits: 765, visitsOld: 700, sales: 54, salesOld: 48 },
	{ channel: 'Display Ads', channelGroup: 'Google', visits: 3456, visitsOld: 3200, sales: 278, salesOld: 254 },
	{ channel: 'Affiliate', channelGroup: 'Partners', visits: 2345, visitsOld: 2000, sales: 198, salesOld: 176 },
	{ channel: 'Referral', channelGroup: 'Partnerships', visits: 1234, visitsOld: 1100, sales: 98, salesOld: 87 },
	{ channel: 'Direct', channelGroup: 'Direct', visits: 5678, visitsOld: 5200, sales: 467, salesOld: 423 },
	{ channel: 'Podcast Ads', channelGroup: 'Audio', visits: 876, visitsOld: 750, sales: 65, salesOld: 54 },
	{ channel: 'SMS', channelGroup: 'Direct', visits: 1543, visitsOld: 1400, sales: 132, salesOld: 118 },
	{ channel: 'Push Notifications', channelGroup: 'Mobile', visits: 2109, visitsOld: 1900, sales: 176, salesOld: 159 },
	{ channel: 'Webinars', channelGroup: 'Events', visits: 987, visitsOld: 850, sales: 87, salesOld: 73 }
]
