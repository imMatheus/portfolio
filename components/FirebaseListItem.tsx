import React from 'react'

interface FirebaseListItemProps {
	selected?: boolean
}

const FirebaseListItem: React.FC<FirebaseListItemProps> = ({ selected, children }) => {
	return (
		<li
			className={`cursor-pointer py-3 pl-10 pr-4 text-sm font-light hover:bg-black/10 ${
				selected ? 'bg-black/10' : ''
			}`}
		>
			{children}
		</li>
	)
}

export default FirebaseListItem
