import React from 'react'

interface RightPanelProps {}

export const RightPanel: React.FC<RightPanelProps> = ({}) => {
	return (
		<div className="h-full flex-shrink-0 bg-neutral-100">
			<div className="p-4">
				<p className="text-neutral-800">Report details</p>
			</div>
		</div>
	)
}
