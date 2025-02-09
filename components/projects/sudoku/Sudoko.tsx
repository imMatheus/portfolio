import React from 'react'
import ProjectTitle from '../ProjectTitle'
import ProjectDescription from '../ProjectDescription'

interface SudokuProps {}

export const Sudoku: React.FC<SudokuProps> = ({}) => {
	return (
		<div>
			<ProjectTitle>Sudoku</ProjectTitle>
			<ProjectDescription>
				Fully functional game of sudoku, made only with CSS, no javascript. Cuz I felt like it {':)'}
			</ProjectDescription>
		</div>
	)
}
