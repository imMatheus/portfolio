import React from 'react'
import Sides from './Sides'

const Cube: React.FC = ({}) => {
	const colors = ['#fdf0d5', '#3a86ff', '#8338ec', '#ff006e', '#ffbe0b', '#fb5607'] as const
	return (
		<div className="relative my-10 grid h-[28rem] w-full place-items-center rounded-md border-2 border-black bg-white md:h-[35rem]">
			<div
				className="absolute inset-0 opacity-100"
				style={{
					background: `linear-gradient(60deg, ${colors
						.map(
							(color, index) =>
								`${color} ${(index / colors.length) * 100 + '%'}, ${color} ${((index + 1) / colors.length) * 100 + '%'}`
						)
						.join(', ')})`
				}}
			></div>
			<div className="cube-container">
				<Sides />
			</div>
		</div>
	)
}

export default Cube
