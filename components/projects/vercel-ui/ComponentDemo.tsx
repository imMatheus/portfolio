import React from 'react'

interface ComponentDemoProps {}

export const ComponentDemo: React.FC<ComponentDemoProps> = ({}) => {
	return (
		<div className="vercel-ui-style-wrapper">
			<section className="grid grid-rows-[repeat(2,calc(fit-content/2))] gap-[1px] border-y border-y-[var(--ds-gray-200)] bg-[var(--ds-gray-200)] md:grid-cols-2">
				<a
					className="group relative flex h-full flex-col gap-6 bg-[--ds-background-200] p-8 hover:bg-[var(--ds-background-100)]"
					href="/docs/components"
				>
					<div className="pointer-events-none flex-1">
						<div className="flex flex-wrap gap-4 [&>*]:!text-[var(--ds-gray-700)]">
							<div className="bg-background-100 border-gray-alpha-400 text-gray-1000 relative w-[214px] max-w-full rounded-md border py-2.5 pl-3 pr-12 md:w-[246px]">
								<div className="flex-1">
									<pre className="overflow-y-auto text-[13px] before:select-none before:content-['$_']">
										npm init next-app
									</pre>
								</div>
								<button className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center">
									<div className="fill-mode-forwards animate-copy-button-fadeOut absolute duration-150 ease-out">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-4 w-4"
										>
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</div>
									<div className="fill-mode-forwards animate-copy-button-fadeIn absolute duration-150 ease-out">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="h-4 w-4"
										>
											<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
											<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
										</svg>
									</div>
								</button>
							</div>
							<button className="bg-background-100 border-gray-alpha-400 text-gray-1000 hover:bg-gray-alpha-200 flex h-10 max-w-full select-none items-center justify-center gap-0.5 rounded-md border px-2.5 text-sm font-medium leading-5 transition-colors disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-100 disabled:text-gray-700">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-4 w-4"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<line x1="19" x2="19" y1="8" y2="14"></line>
									<line x1="22" x2="16" y1="11" y2="11"></line>
								</svg>
								<span className="text-ellipsis px-1.5">Collaborate</span>
							</button>
							<div className="border-gray-alpha-400 bg-background-100 focus-within:shadow-input-ring relative flex h-10 w-[200px] overflow-hidden rounded-md border text-sm transition-shadow duration-150 [--icon-size:16px] md:w-[234px]">
								<span className="bg-background-200 flex shrink-0 items-center px-3 text-gray-700 [&>svg]:h-[var(--icon-size)] [&>svg]:w-[var(--icon-size)]">
									Label
								</span>
								<input
									id=":S1:"
									className="disabled:bg-background-200 bg-transparent pl-3 pr-3 outline-none placeholder:text-gray-700 disabled:cursor-not-allowed disabled:text-gray-700 disabled:placeholder:text-gray-500"
									placeholder="Value"
								/>
							</div>
						</div>
					</div>
					<div>
						<p
							className="truncate [color:hsl(var(--text-color))] [font-size:var(--text-size)] [font-weight:var(--text-weight)] [letter-spacing:var(--text-letter-spacing)] [line-height:var(--text-line-height)] [text-transform:var(--text-transform)]"
							style={
								{
									'--text-size': '1rem',
									'--text-weight': 600,
									'--text-letter-spacing': '-0.32px',
									'--text-line-height': '1.5rem',
									'--text-color': 'var(--ds-gray-1000)'
								} as React.CSSProperties
							}
						>
							Components
						</p>
						<p
							className="truncate [color:hsl(var(--text-color))] [font-size:var(--text-size)] [font-weight:var(--text-weight)] [letter-spacing:var(--text-letter-spacing)] [line-height:var(--text-line-height)] [text-transform:var(--text-transform)]"
							style={
								{
									'--text-size': '1rem',
									'--text-weight': '400',
									'--text-letter-spacing': 'initial',
									'--text-line-height': '1.5rem',
									'--text-color': 'var(--ds-gray-900)'
								} as React.CSSProperties
							}
						>
							Building blocks for React applications
						</p>
					</div>
					<div className="z-100 pointer-events-none absolute inset-0 border border-blue-700 opacity-0 group-focus-visible:opacity-100"></div>
				</a>
				<a
					className="bg-background-200 hover:bg-background-100 group relative flex h-full flex-col gap-6 p-8"
					href="/docs/colors"
				>
					<div className="pointer-events-none flex-1">
						<div className="flex justify-between">
							<div className="bg-background-200 flex h-24 w-8 items-center justify-center rounded-full border">
								<div className="h-[72px] w-2 rounded-full bg-gray-800"></div>
							</div>
							<div className="bg-background-200 flex h-24 w-8 items-center justify-center rounded-full border">
								<div className="h-[72px] w-2 rounded-full bg-blue-800"></div>
							</div>
							<div className="bg-background-200 flex h-24 w-8 items-center justify-center rounded-full border">
								<div className="h-[72px] w-2 rounded-full bg-purple-800"></div>
							</div>
							<div className="bg-background-200 flex h-24 w-8 items-center justify-center rounded-full border">
								<div className="h-[72px] w-2 rounded-full bg-pink-800"></div>
							</div>
							<div className="bg-background-200 flex h-24 w-8 items-center justify-center rounded-full border">
								<div className="h-[72px] w-2 rounded-full bg-red-800"></div>
							</div>
							<div className="bg-background-200 flex h-24 w-8 items-center justify-center rounded-full border">
								<div className="h-[72px] w-2 rounded-full bg-amber-800"></div>
							</div>
							<div className="bg-background-200 flex h-24 w-8 items-center justify-center rounded-full border">
								<div className="h-[72px] w-2 rounded-full bg-green-800"></div>
							</div>
							<div className="bg-background-200 flex h-24 w-8 items-center justify-center rounded-full border">
								<div className="h-[72px] w-2 rounded-full bg-teal-800"></div>
							</div>
						</div>
					</div>
					<div>
						<p
							className="truncate [color:hsl(var(--text-color))] [font-size:var(--text-size)] [font-weight:var(--text-weight)] [letter-spacing:var(--text-letter-spacing)] [line-height:var(--text-line-height)] [text-transform:var(--text-transform)]"
							style={
								{
									'--text-size': '1rem',
									'--text-weight': '600',
									'--text-letter-spacing': '-0.32px',
									'--text-line-height': '1.5rem',
									'--text-color': 'var(--ds-gray-1000)'
								} as React.CSSProperties
							}
						>
							Colors
						</p>
						<p
							className="truncate [color:hsl(var(--text-color))] [font-size:var(--text-size)] [font-weight:var(--text-weight)] [letter-spacing:var(--text-letter-spacing)] [line-height:var(--text-line-height)] [text-transform:var(--text-transform)]"
							style={
								{
									'--text-size': '1rem',
									'--text-weight': '400',
									'--text-letter-spacing': 'initial',
									'--text-line-height': '1.5rem',
									'--text-color': 'var(--ds-gray-900)'
								} as React.CSSProperties
							}
						>
							A high contrast, accessible color system.
						</p>
					</div>
					<div className="z-100 pointer-events-none absolute inset-0 border border-blue-700 opacity-0 group-focus-visible:opacity-100"></div>
				</a>
			</section>
		</div>
	)
}
