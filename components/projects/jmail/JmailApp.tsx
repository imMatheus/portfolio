import React from 'react'
import Image from 'next/image'

export const JmailApp: React.FC<{ onNavigate?: (app: 'jmail' | 'jefftube' | 'jcal') => void }> = ({ onNavigate }) => {
	const emails = [
		{ stars: 732, comments: 191, from: 'cody rudland', tag: 'Yahoo', subject: 'You are dead', preview: '- Lol good riddance', date: 'Aug 13, 2019' },
		{ stars: 406, comments: 204, from: 'Cecilia Steen', tag: 'Yahoo', subject: 'With love', preview: '- My dearest Jeffrey, I don\'t know when you\'ll get to read this...', date: 'Jul 25, 2019' },
		{ stars: 828, comments: null, from: 'Flipboard 10 for Today', tag: null, subject: '11 questions for Mueller', preview: '- Flipboard Interesting stories worth your time.', date: 'Jul 13, 2019' },
		{ stars: 637, comments: null, from: 'Flipboard Week in Review', tag: null, subject: 'Alex Acosta resigns, Jeffrey Epstein arrested', preview: '- and Trump ends bid for citizenship question...', date: 'Jul 13, 2019' },
		{ stars: 480, comments: 201, from: '', tag: null, subject: '', preview: '- Dear Jeff, I read the news papers today, I can\'t believe they arrested you again', date: 'Jul 10, 2019', redacted: true },
		{ stars: 250, comments: null, from: 'Intelligence Squared', tag: null, subject: 'John Humphrys: The Terrier of Today', preview: '- in conversation with Justin Webb', date: 'Jul 9, 2019' },
		{ stars: 196, comments: null, from: 'conchita sarnoff', tag: 'Yahoo', subject: 'Private & Confidential', preview: '- Hello Jeffrey, I\'ve been giving much more thought...', date: 'Jul 7, 2019' },
		{ stars: 188, comments: null, from: 'conchita sarnoff', tag: 'Yahoo', subject: 'Private and Confidential', preview: '- Hello Jeffrey, In light of what has occurred...', date: 'Jul 7, 2019' },
		{ stars: 201, comments: null, from: 'Flipboard Week in Review', tag: null, subject: 'U.S. celebrates Fourth of July', preview: '- Trump-Kim DMZ meeting and Hong Kong protests', date: 'Jul 6, 2019' },
		{ stars: 1134, comments: 655, from: 'Weingarten, Reid  8', tag: null, subject: 'Re:', preview: '- Charged criminally in sdny...Lithuanian hottie...', date: 'Jul 6, 2019' },
	]

	return (
		<div className="w-full h-full bg-jmail-surface rounded-xl overflow-hidden flex flex-col text-jmail-text font-roboto">
			{/* Top navbar */}
			<div className="flex items-center px-4 py-2 bg-jmail-surface shrink-0 cursor-pointer" onClick={() => onNavigate?.('jmail')}>
				<div className="flex items-center gap-1 shrink-0">
					<Image src="/jmail.png" width={28} height={28} alt="Jmail" className="h-7 w-7 object-contain" />
					<span className="text-base font-medium text-jmail-text-muted">Jmail</span>
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
				<div className="w-[132px] shrink-0 py-1.5 px-1 bg-jmail-surface">
					<div className="flex items-center gap-1.5 bg-jmail-secondary-container rounded-full px-2.5 py-1.5 mx-0.5 mb-2">
						<svg className="w-4 h-4 text-jmail-on-secondary-container" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
						</svg>
						<span className="text-[11px] font-medium text-jmail-on-secondary-container">Compose</span>
					</div>
					<div className="space-y-px">
						<div className="flex items-center justify-between bg-jmail-surface-selected rounded-r-full px-2 py-1">
							<div className="flex items-center gap-1.5">
								<svg className="w-4 h-4 text-jmail-text" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" /></svg>
								<span className="text-[11px] font-bold text-jmail-text">Inbox</span>
							</div>
							<span className="text-[10px] font-bold text-jmail-text">7460</span>
						</div>
						<div className="flex items-center gap-1.5 px-2 py-1 text-jmail-text-secondary">
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
							<span className="text-[11px]">Starred</span>
							<span className="text-[10px] ml-auto">10550</span>
						</div>
						<div className="flex items-center gap-1.5 px-2 py-1 text-jmail-text-secondary">
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<span className="text-[11px]">Unredaction</span>
						</div>
						<div className="flex items-center gap-1.5 px-2 py-1 text-jmail-text-secondary">
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
							<span className="text-[11px]">Sent</span>
							<span className="text-[10px] ml-auto">4295</span>
						</div>
						<div className="flex items-center gap-1.5 px-2 py-1 text-jmail-text-secondary">
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
							<span className="text-[11px]">Attachments</span>
						</div>
						<div className="flex items-center gap-1.5 px-2 py-1 text-jmail-text-secondary">
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
							<span className="text-[11px]">Daily Activity</span>
						</div>
					</div>
					<div className="mt-2 pt-1.5 border-t border-jmail-border px-1.5">
						<div className="text-[10px] font-bold text-jmail-text-dim uppercase tracking-wider mb-1">Topics</div>
						{['Asking for advice', 'Introductions', 'Damage control', 'Conspiring w/ Brunel'].map((t) => (
							<div key={t} className="flex items-center gap-1.5 py-0.5 text-jmail-text-secondary">
								<div className="w-2 h-2 rounded-full bg-jmail-text-dimmer shrink-0" />
								<span className="text-[10px] truncate">{t}</span>
							</div>
						))}
					</div>
				</div>

				{/* Main content */}
				<div className="flex-1 overflow-y-auto overflow-x-hidden bg-jmail-surface">
					{/* AI Overview banner */}
					<div className="mx-3 mt-2 mb-2 bg-jmail-surface-selected-soft rounded-lg px-4 py-2 border border-jmail-border-lighter">
						<div className="flex items-center gap-1.5">
							<span className="text-sm">✨</span>
							<span className="text-sm font-semibold text-jmail-text">AI Overview</span>
						</div>
						<p className="text-xs text-jmail-text-secondary mt-1 leading-relaxed">You are logged in as Jeffrey Epstein. These are real emails released by Congress. Explore by name, search, visit a random page, or vote for an unredaction.</p>
					</div>

					{/* Toolbar */}
					<div className="flex items-center px-4 py-1.5 gap-2.5 border-b border-jmail-border">
						<div className="w-4 h-4 border border-jmail-button-border rounded-sm" />
						<svg className="w-4 h-4 text-jmail-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
						<div className="text-[11px] text-jmail-text-secondary bg-jmail-surface border border-jmail-border-light rounded px-2 py-1">Random Page</div>
						<div className="text-[11px] text-jmail-text-secondary bg-jmail-surface border border-jmail-border-light rounded px-2 py-1">All accounts ▾</div>
						<div className="text-[11px] text-jmail-text-secondary bg-jmail-surface border border-jmail-border-light rounded px-2 py-1">Old releases ▾</div>
						<div className="text-[11px] text-jmail-text-secondary bg-jmail-surface border border-jmail-border-light rounded px-2 py-1">Date ▾</div>
						<span className="text-[11px] text-jmail-text-dim ml-auto">1-100 of 7499</span>
					</div>

					{/* Tabs */}
					<div className="flex items-center border-b border-jmail-border px-4">
						<div className="flex items-center gap-1.5 border-b-2 border-jmail-primary px-3 py-2">
							<svg className="w-4 h-4 text-jmail-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z" /></svg>
							<span className="text-sm font-semibold text-jmail-primary">Primary</span>
						</div>
						<div className="flex items-center gap-1.5 px-3 py-2 text-jmail-text-dim">
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42z" /></svg>
							<span className="text-sm">Promotions</span>
							<span className="text-[10px] bg-jmail-document text-white rounded-full px-2 py-0.5 font-medium">6104 new</span>
						</div>
					</div>

					{/* Email rows */}
					<div className="divide-y divide-jmail-border-lighter">
						{emails.map((email, i) => (
							<div key={i} className="flex items-center px-4 py-2 hover:bg-jmail-surface-hover gap-2">
								<div className="w-4 h-4 border border-jmail-border-light rounded-sm shrink-0" />
								<div className="flex items-center gap-1 shrink-0 w-[50px]">
									<svg className="w-4 h-4 text-jmail-notable" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
									<span className="text-[11px] text-jmail-text-dim">{email.stars}</span>
								</div>
								{email.comments !== null && (
									<div className="flex items-center gap-1 shrink-0 w-[38px]">
										<svg className="w-3.5 h-3.5 text-jmail-text-dimmer" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
										<span className="text-[11px] text-jmail-text-dim">{email.comments}</span>
									</div>
								)}
								<div className="shrink-0 w-[90px] truncate">
									{email.redacted ? (
										<div className="w-16 h-3.5 bg-jmail-text rounded-sm" />
									) : (
										<span className="text-xs font-medium text-jmail-text">{email.from}</span>
									)}
								</div>
								{email.tag && (
									<span className="text-[10px] text-jmail-text-dim border border-jmail-border-light rounded px-1.5 shrink-0">{email.tag}</span>
								)}
								<div className="flex-1 min-w-0 flex items-center gap-1">
									<span className="text-xs font-medium text-jmail-text truncate shrink-0">{email.subject}</span>
									<span className="text-[11px] text-jmail-text-dim truncate">{email.preview}</span>
								</div>
								<span className="text-[11px] text-jmail-text-dim shrink-0 ml-2">{email.date}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
