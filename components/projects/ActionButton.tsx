import React from 'react'

const ActionButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
	return (
		<button
			className="relative mb-4 mt-5 inline-block cursor-pointer text-black transition-transform hover:-rotate-2"
			style={{ opacity: props.disabled ? 0.65 : 1 }}
			{...props}
		>
			<div className="absolute -bottom-2 -right-2 h-full w-full rounded-md border border-black bg-white"></div>
			<div className="absolute -bottom-1 -right-1 h-full w-full rounded-md border border-black bg-white"></div>
			<div className="relative rounded-md border border-black bg-white px-2 py-1">{children}</div>
		</button>
	)
}

export default ActionButton
