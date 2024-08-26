import React, { PropsWithChildren } from 'react'

const LinkWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className="flex gap-4">{children}</div>
}

export default LinkWrapper
