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
		<section className="bg-apple">
			<ProjectWrapper>
				<ProjectTitle>Colors 04</ProjectTitle>
				<ProjectDescription>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit nisi natus eveniet
					aspernatur excepturi sed, sit delectus fuga magnam voluptatibus. Reiciendis ex quaerat reprehenderit
					culpa, voluptatem dolor dolorem inventore sunt enim repudiandae dicta voluptatibus hic modi animi
					officia aliquid expedita quia consequatur quo eligendi repellendus quam. Nam sapiente nesciunt,
					porro libero consequuntur eius corporis temporibus, accusantium iure delectus, asperiores eum.
				</ProjectDescription>
				<LinkWrapper>
					<Link href="https://github.com/imMatheus/colors" Icon={GitHub} text="Repository" />
					<Link
						href="https://gifted-gates-8403ec.netlify.app/0d50e1-0075e4-0082b0-00876d-3e863c"
						Icon={ExternalLink}
						text="Live site"
					/>
				</LinkWrapper>
				<ActionButton onClick={updateColors}>Get new palette</ActionButton>
			</ProjectWrapper>

			<div className="flex h-[80vh] w-screen flex-col overflow-hidden md:h-[50vh] md:flex-row">
				{colors.map((color, i) => (
					<ColorCard key={i} color={color} index={i} colors={colors} setColors={setColors} />
				))}
			</div>
		</section>
	)
}

export default Coolors
