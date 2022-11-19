import React from 'react'

const Sides: React.FC = ({}) => {
	return (
		<>
			<div className="cube y-top x-left z-front">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left" style={{ '--left-color': 'var(--default-front-color)' } as any}></div>
				<div className="face face--top" style={{ '--top-color': 'var(--default-back-color)' } as any}></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-top x-middle z-front">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-top x-right z-front">
				<div className="face face--front" style={{ '--front-color': 'var(--default-back-color)' } as any}></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-left z-front">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-middle z-front">
				<div className="face face--front" style={{ '--front-color': 'var(--default-bottom-color)' } as any}></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-right z-front">
				<div className="face face--front" style={{ '--left-color': 'var(--default-front-color)' } as any}></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-bottom x-left z-front">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-bottom x-middle z-front">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-bottom x-right z-front">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>

			<div className="cube y-top x-left z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left" style={{ '--left-color': 'var(--default-front-color)' } as any}></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-top x-middle z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-top x-right z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-left z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-middle z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-right z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-bottom x-left z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-bottom x-middle z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom" style={{ '--bottom-color': 'var(--default-front-color)' } as any}></div>
			</div>
			<div className="cube y-bottom x-right z-middle">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>

			<div className="cube y-top x-left z-back">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left" style={{ '--left-color': 'var(--default-front-color)' } as any}></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-top x-middle z-back">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top" style={{ '--top-color': 'var(--default-left-color)' } as any}></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-top x-right z-back">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-left z-back">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-middle z-back">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-middle x-right z-back">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-bottom x-left z-back">
				<div className="face face--front"></div>
				<div className="face face--back" style={{ '--back-color': 'var(--default-front-color)' } as any}></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-bottom x-middle z-back">
				<div className="face face--front"></div>
				<div className="face face--back"></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
			<div className="cube y-bottom x-right z-back">
				<div className="face face--front"></div>
				<div className="face face--back" style={{ '--back-color': 'var(--default-front-color)' } as any}></div>
				<div className="face face--right"></div>
				<div className="face face--left"></div>
				<div className="face face--top"></div>
				<div className="face face--bottom"></div>
			</div>
		</>
	)
}

export default Sides
