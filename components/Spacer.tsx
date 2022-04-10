import React from 'react'
import styles from './spacer.module.scss'

interface SpacerProps {
	url: string
}

const Spacer: React.FC<SpacerProps> = ({ url }) => {
	return (
		<div className="relative aspect-[100/20] w-full">
			<div className={styles.spacer} style={{ height: '100%', backgroundImage: `url('${url}')` }}></div>
		</div>
	)
}

export default Spacer
