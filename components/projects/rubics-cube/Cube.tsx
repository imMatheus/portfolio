import React from 'react'
import Sides from './Sides'

const Cube: React.FC = ({}) => {
	return (
		<div className="my-10 grid h-[30rem] w-full place-items-center rounded-md bg-[url('/L-1.png')] bg-[length:100px] ">
			<div className="cube-container">
				<Sides />
			</div>
		</div>
	)
}

export default Cube
