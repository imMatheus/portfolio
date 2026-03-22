import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import LinkWrapper from '../LinkWrapper'
import Link from '../Link'
import { ExternalLink, GitHub } from 'react-feather'
import { SudokuGame } from './SudokuGame'

export const Sudoku: React.FC = () => {
	return (
		<div id="sudoku" className="text-white">
			<ProjectTitle>CSS Sudoku</ProjectTitle>
			<ProjectDescription className="text-white/80">
				December 2025, <ProjectTag isWork={false} />
				<br />
				<br />
				Fully functional game of sudoku, made only with CSS, no javascript. Cuz I felt like it {':)'}
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://sudoku.immatheus.com" Icon={ExternalLink} text="Live Site" />
				<Link href="https://github.com/imMatheus/css-sudoku" Icon={GitHub} text="GitHub" />
			</LinkWrapper>
			<SudokuGame />
		</div>
	)
}
