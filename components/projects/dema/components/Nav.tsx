import React from 'react'

interface NavProps {}

const Logo = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 22" fill="none" className="w-[70px]">
			<g fill="currentColor" clipPath="url(#a_logo)">
				<path d="M21.748 16.248H0v5.643h21.748v-5.643ZM21.748.11H0v5.643h21.748V.109ZM6.581 8.179H0v5.643h6.581V8.18ZM25.038 8.179h-6.581v5.643h6.581V8.18ZM89.553 16.248h-6.581v5.643h6.58v-5.643ZM108 16.248h-6.581v5.643H108v-5.643ZM100.07.11h-9.168v5.643h9.168V.109ZM104.33 8.179H86.642v5.643h17.688V8.18ZM59.944 16.248h-6.58v5.643h6.58v-5.643ZM79.682 16.248H73.1v5.643h6.58v-5.643ZM69.813 16.248h-6.58v5.643h6.58v-5.643ZM63.235.11h-9.872v5.643h9.872V.109ZM79.683.11H69.81v5.643h9.873V.109ZM79.682 8.179H53.363v5.643h26.319V8.18ZM50.075 16.248H28.326v5.643h21.749v-5.643ZM50.075.11H28.326v5.643h21.749V.109ZM39.2 8.179H28.326v5.643H39.2V8.18Z"></path>
			</g>
			<defs>
				<clipPath id="a_logo">
					<path fill="#fff" d="M0 .11h108V21.89H0z"></path>
				</clipPath>
			</defs>
		</svg>
	)
}

export const Nav: React.FC<NavProps> = ({}) => {
	return (
		<div className="font- flex h-12 items-center justify-between border-b border-b-neutral-200 pl-4">
			<div className="flex h-full gap-8">
				<Logo />
				<div className="flex text-sm">
					<div className="flex items-center px-3">Dashboard</div>
					<div className="relative flex items-center px-3">
						Reports
						<div className="absolute bottom-0 left-0 h-1 w-full bg-dema-blue"></div>
					</div>
					<div className="flex items-center px-3">Optimizations</div>
					<div className="flex items-center px-3">Settings</div>
				</div>
			</div>
		</div>
	)
}
