import React, { useState } from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub, ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import chroma from 'chroma-js'
import Color from 'color'
import ActionButton from '../ActionButton'
import { ProjectWrapper } from '..'
import ColorCard from './ColorCard'

const Coolors: React.FC = ({}) => {
	const getRandomNumber = () => {
		return Math.floor(Math.random() * 255)
	}

	const getRandomColor = () => {
		return Color({
			r: getRandomNumber(),
			g: getRandomNumber(),
			b: getRandomNumber()
		}).hex()
	}

	const [colors, setColors] = useState([
		getRandomColor(),
		getRandomColor(),
		getRandomColor(),
		getRandomColor(),
		getRandomColor()
	])

	function updateColors() {
		const c = chroma.scale([getRandomColor(), getRandomColor()]).mode('lch').colors(colors.length)
		setColors(c)
	}

	return (
		<section className="bg-black text-white" id="colors">
			<ProjectWrapper>
				<ProjectTitle>Colors</ProjectTitle>
				<ProjectDescription>
					This is a smaller project that generates color palettes by first randomly generating two colors, then
					creating a linear gradient from those two colors. The project is heavily inspired by one of my favorite
					websites as a front-end engineer, coolors.co
				</ProjectDescription>
				<LinkWrapper>
					<Link href="https://github.com/imMatheus/colors" Icon={GitHub} text="Repository" isWhite />
					<Link
						href="https://gifted-gates-8403ec.netlify.app/0d50e1-0075e4-0082b0-00876d-3e863c"
						Icon={ExternalLink}
						text="Live site"
						isWhite
					/>
				</LinkWrapper>
				<ActionButton onClick={updateColors}>Get new palette</ActionButton>
				<div className="flex h-[80vh] max-h-[500px] w-full flex-col overflow-hidden rounded-md border-0 border-black/100 md:h-[50vh] md:flex-row">
					{colors.map((color, i) => (
						<ColorCard key={i} color={color} index={i} colors={colors} setColors={setColors} />
					))}
				</div>
			</ProjectWrapper>
		</section>
	)
}

export default Coolors
