import React from 'react'
import styles from './newDoc.module.scss'
interface FirebaseListItemProps {
	selected?: boolean
	onClick: () => any
	isNew?: boolean
}

const FirebaseListItem: React.FC<FirebaseListItemProps> = ({ selected, onClick, isNew, children }) => {
	return (
		<li
			onClick={onClick}
			className={`cursor-pointer py-3 pl-10 pr-4 text-sm font-light hover:bg-black/10 ${
				isNew ? styles.newDoc : ''
			} ${selected ? 'bg-black/10' : ''}`}
		>
			{children}
		</li>
	)
}

export default FirebaseListItem
