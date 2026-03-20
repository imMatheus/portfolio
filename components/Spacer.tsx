import React from 'react'

interface SpacerProps {
	children: React.ReactNode
}

const Spacer: React.FC<SpacerProps> = ({ children }) => {
	return (
		<div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-80 [&>svg]:absolute [&>svg]:inset-0 [&>svg]:w-full [&>svg]:h-full">
			{children}
		</div>
	)
}

export default Spacer
