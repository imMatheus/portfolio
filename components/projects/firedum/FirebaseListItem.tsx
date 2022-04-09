import React from 'react'

interface FirebaseListItemProps {
	selected?: boolean
	onClick: () => any
}

const FirebaseListItem: React.FC<FirebaseListItemProps> = ({ selected, onClick, children }) => {
	return (
		<li
			onClick={onClick}
			className={`cursor-pointer py-3 pl-10 pr-4 text-sm font-light hover:bg-black/10 ${
				selected ? 'bg-black/10' : ''
			}`}
		>
			{children}
		</li>
	)
}

export default FirebaseListItem
