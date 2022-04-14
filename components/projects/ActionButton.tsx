import React from 'react'

const ActionButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
	return (
		<button
			className="relative mb-4 mt-5 inline-block cursor-pointer text-black transition-transform hover:-rotate-2"
			style={{ opacity: props.disabled ? 0.65 : 1 }}
			{...props}
		>
			<div className="absolute -right-2 -bottom-2 h-full w-full rounded-md border border-black bg-white"></div>
			<div className="absolute -right-1 -bottom-1 h-full w-full rounded-md border border-black bg-white"></div>
			<div className="relative rounded-md border border-black bg-white py-1 px-2">{children}</div>
		</button>
	)
}

export default ActionButton
