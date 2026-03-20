import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'
import ProjectTag from '../ProjectTag'
import { SudokuGame } from './SudokuGame'

export const Sudoku: React.FC = () => {
	return (
		<div id="sudoku" className="text-white">
			<ProjectTitle>Sudoku</ProjectTitle>
			<ProjectDescription className="text-white/80">
				2024, <ProjectTag isWork={false} />
				<br />
				<br />
				Fully functional game of sudoku, made only with CSS, no javascript. Cuz I felt like it {':)'}
			</ProjectDescription>
			<SudokuGame />
		</div>
	)
}
