'use client'

import React, { useState } from 'react'

export const Counter: React.FC = () => {
	const [count, setCount] = useState(0)

	return (
		<div className="my-6 rounded-lg border border-black bg-white p-6 text-center">
			<h3 className="mb-4 text-xl font-bold">Interactive Counter</h3>
			<div className="mb-4 text-4xl font-bold">{count}</div>
			<div className="flex gap-4 justify-center">
				<button
					onClick={() => setCount(count - 1)}
					className="rounded-md border border-black bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200"
				>
					Decrement
				</button>
				<button
					onClick={() => setCount(0)}
					className="rounded-md border border-black bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200"
				>
					Reset
				</button>
				<button
					onClick={() => setCount(count + 1)}
					className="rounded-md border border-black bg-gray-100 px-4 py-2 transition-colors hover:bg-gray-200"
				>
					Increment
				</button>
			</div>
		</div>
	)
}

