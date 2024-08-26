import React, { PropsWithChildren } from 'react'

const StackCard: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex h-full w-full items-center justify-center overflow-hidden">
			<h3 className="text-overflow-hidden break-all p-2 text-center text-lg font-semibold md:p-4 md:text-2xl ">
				{children}
			</h3>
		</div>
	)
}

export default StackCard
