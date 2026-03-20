import React from 'react'
import Image from 'next/image'

export const JCalApp: React.FC<{ onNavigate?: (app: 'jmail' | 'jefftube' | 'jcal') => void }> = ({ onNavigate }) => {
	const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
	const weekDates = [1, 2, 3, 4, 5, 6, 7]
	const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM']

	const miniCalDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
	const miniCalRows = [
		[29, 30, 1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10, 11, 12],
		[13, 14, 15, 16, 17, 18, 19],
		[20, 21, 22, 23, 24, 25, 26],
		[27, 28, 29, 30, 31, 1, 2],
	]

	const eventTypes = [
		{ name: 'Travel', color: 'bg-jmail-document' },
		{ name: 'Meeting', color: 'bg-jmail-appointment' },
		{ name: 'Social', color: 'bg-jmail-imessage' },
		{ name: 'Call', color: 'bg-jmail-flight' },
		{ name: 'Legal', color: 'bg-jmail-text-dim' },
	]

	const calendarEvents = [
		{ col: 0, top: 2, height: 2, label: 'Sarah Kellen, Nadia Marcink...', bg: 'bg-jmail-text-dim' },
		{ col: 1, top: 0, height: 1, label: "Sergey's Departure", bg: 'bg-jmail-flight' },
		{ col: 2, top: 4, height: 2, label: 'Deliver up-to-date budget of the office building', bg: 'bg-jmail-appointment' },
		{ col: 3, top: 6, height: 2, label: 'Lunch with Anne and Sergey', bg: 'bg-jmail-imessage' },
		{ col: 4, top: 3, height: 2, label: "Visit from Sergey Brin in St. Barth's", bg: 'bg-jmail-document' },
		{ col: 5, top: 8, height: 2, label: 'Call Gmax', bg: 'bg-jmail-flight' },
		{ col: 6, top: 1, height: 2, label: "Gmax's Departure from St T", bg: 'bg-jmail-imessage' },
	]

	return (
		<div className="w-full h-full bg-jmail-surface rounded-xl overflow-hidden flex flex-col text-jmail-text font-roboto">
			{/* Top navbar */}
			<div className="flex items-center px-4 py-2 bg-jmail-surface shrink-0 border-b border-jmail-border cursor-pointer" onClick={() => onNavigate?.('jcal')}>
				<div className="flex items-center gap-1 shrink-0">
					<Image src="/jcal.png" width={28} height={28} alt="JCal" className="h-7 w-7 object-contain" />
					<span className="text-base font-medium text-jmail-text-muted">JCal</span>
				</div>
				<div className="flex-1" />
				<div className="flex items-center gap-3 shrink-0">
					<div className="relative w-7 h-7 flex items-center justify-center">
						<svg className="absolute inset-0 w-7 h-7" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M4.02,28.27C2.73,25.8,2,22.98,2,20c0-2.87,0.68-5.59,1.88-8l-1.72-1.04C0.78,13.67,0,16.75,0,20c0,3.31,0.8,6.43,2.23,9.18L4.02,28.27z" fill="#F6AD01" /><path d="M32.15,33.27C28.95,36.21,24.68,38,20,38c-6.95,0-12.98-3.95-15.99-9.73l-1.79,0.91C5.55,35.61,12.26,40,20,40c5.2,0,9.93-1.98,13.48-5.23L32.15,33.27z" fill="#249A41" /><path d="M33.49,34.77C37.49,31.12,40,25.85,40,20c0-5.86-2.52-11.13-6.54-14.79l-1.37,1.46C35.72,9.97,38,14.72,38,20c0,5.25-2.26,9.98-5.85,13.27L33.49,34.77z" fill="#3174F1" /><path d="M20,2c4.65,0,8.89,1.77,12.09,4.67l1.37-1.46C29.91,1.97,25.19,0,20,0l0,0C12.21,0,5.46,4.46,2.16,10.96L3.88,12C6.83,6.08,12.95,2,20,2" fill="#E92D18" /></svg>
						<Image src="/jeff-profile.png" width={22} height={22} alt="Profile" className="rounded-full object-cover" />
					</div>
				</div>
			</div>

			{/* Body */}
			<div className="flex flex-1 min-h-0 overflow-hidden">
				{/* Sidebar */}
				<div className="w-[132px] shrink-0 py-2 px-2 bg-jmail-surface border-r border-jmail-border overflow-y-auto">
					{/* Month nav */}
					<div className="flex items-center justify-between mb-1">
						<span className="text-xs font-semibold text-jmail-text">July 2014</span>
						<div className="flex gap-2">
							<span className="text-xs text-jmail-text-dimmer cursor-pointer">‹</span>
							<span className="text-xs text-jmail-text-dimmer cursor-pointer">›</span>
						</div>
					</div>
					{/* Mini calendar */}
					<div className="mb-2">
						<div className="grid grid-cols-7">
							{miniCalDays.map((d, i) => (
								<div key={i} className="text-[9px] text-jmail-text-dimmer text-center font-medium h-4 flex items-center justify-center">{d}</div>
							))}
						</div>
						{miniCalRows.map((row, ri) => (
							<div key={ri} className="grid grid-cols-7">
								{row.map((d, ci) => (
									<div key={ci} className={`text-[9px] text-center h-4 flex items-center justify-center ${d === 1 && ri === 0 ? 'bg-jmail-primary text-white rounded-full w-3.5 h-3.5' : (d > 26 && ri === 0) || (d < 3 && ri === 4) ? 'text-jmail-text-dimmer' : 'text-jmail-text-secondary'}`}>
										{d}
									</div>
								))}
							</div>
						))}
					</div>

					{/* Event types */}
					<div className="border-t border-jmail-border pt-2">
						<div className="text-[10px] font-bold text-jmail-text-dim uppercase tracking-wider mb-1.5 flex items-center gap-1">
							<span className="text-xs">▾</span> EVENT TYPES
						</div>
						<div className="flex items-center gap-1.5 bg-jmail-surface-selected-soft rounded px-1.5 py-1 mb-1">
							<div className="w-3 h-3 bg-jmail-primary rounded-sm flex items-center justify-center">
								<svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
							</div>
							<span className="text-[10px] font-semibold text-jmail-primary">All types</span>
						</div>
						{eventTypes.map((t) => (
							<div key={t.name} className="flex items-center gap-2 px-2 py-0.5">
								<div className={`w-2.5 h-2.5 rounded-full ${t.color} shrink-0`} />
								<span className="text-[10px] text-jmail-text-secondary">{t.name}</span>
							</div>
						))}
					</div>

					{/* People */}
					<div className="border-t border-jmail-border pt-2 mt-2">
						<div className="text-[10px] font-bold text-jmail-text-dim uppercase tracking-wider mb-1.5">PEOPLE</div>
						<div className="flex items-center gap-1.5 bg-jmail-surface-hover rounded px-2 py-1.5">
							<svg className="w-3.5 h-3.5 text-jmail-text-dimmer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
							<span className="text-[10px] text-jmail-text-dimmer">Search people</span>
						</div>
					</div>
				</div>

				{/* Main content: weekly view */}
				<div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col">
					{/* Week header bar */}
					<div className="flex items-center px-4 py-1.5 border-b border-jmail-border shrink-0">
						<div className="flex items-center gap-2">
							<span className="text-xs text-jmail-text-dimmer cursor-pointer">‹</span>
							<span className="text-xs text-jmail-text-dimmer cursor-pointer">›</span>
						</div>
						<span className="text-sm font-medium text-jmail-text ml-3">Dec 2006 – Jan 2007</span>
						<div className="ml-auto flex items-center gap-3">
							<span className="text-xs text-jmail-text-dim">8 events</span>
							<div className="bg-jmail-surface border border-jmail-border-light rounded px-2 py-1 text-xs font-medium text-jmail-text">Week ▾</div>
						</div>
					</div>

					{/* Day headers */}
					<div className="flex shrink-0 border-b border-jmail-border">
						<div className="w-[44px] shrink-0" />
						{weekDays.map((day, i) => (
							<div key={day} className="flex-1 text-center py-1.5 border-l border-jmail-border-lighter">
								<div className={`text-[10px] font-semibold ${i === 0 ? 'text-jmail-primary' : 'text-jmail-text-dim'}`}>{day}</div>
								<div className={`text-sm font-medium mx-auto ${i === 0 ? 'bg-jmail-primary text-white rounded-full w-6 h-6 flex items-center justify-center' : 'text-jmail-text'}`}>
									{weekDates[i]}
								</div>
							</div>
						))}
					</div>

					{/* Time grid */}
					<div className="flex-1 relative">
						<div className="flex">
							{/* Time labels column */}
							<div className="w-[44px] shrink-0">
								{hours.map((h) => (
									<div key={h} className="h-[36px] flex items-start justify-end pr-1.5">
										<span className="text-[10px] text-jmail-text-dimmer leading-none">{h}</span>
									</div>
								))}
							</div>
							{/* Day columns */}
							<div className="flex flex-1 relative">
								{weekDays.map((_, colIdx) => (
									<div key={colIdx} className="flex-1 border-l border-jmail-border-lighter relative">
										{hours.map((_, rowIdx) => (
											<div key={rowIdx} className="h-[36px] border-b border-jmail-border-lighter" />
										))}
									</div>
								))}
								{/* Events overlay */}
								{calendarEvents.map((evt, i) => {
									const colWidth = 100 / 7
									const left = evt.col * colWidth
									const width = colWidth - 1
									const topPx = evt.top * 36
									const heightPx = evt.height * 36

									return (
										<div
											key={i}
											className={`absolute ${evt.bg} text-white rounded px-1.5 py-0.5 overflow-hidden`}
											style={{
												left: `calc(${left}% + 1px)`,
												width: `calc(${width}% - 1px)`,
												top: `${topPx}px`,
												height: `${heightPx}px`,
											}}
										>
											<span className="text-[10px] leading-tight font-medium line-clamp-3">{evt.label}</span>
										</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
