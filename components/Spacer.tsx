import React from 'react'

interface SpacerProps {
	children: React.ReactNode
}

const Spacer: React.FC<SpacerProps> = ({ children }) => {
	return (
		<div className="relative h-40 w-full sm:h-56 md:h-64 lg:h-80 [&>svg]:absolute [&>svg]:inset-0 [&>svg]:h-full [&>svg]:w-full">
			{children}
		</div>
	)
}

export default Spacer
