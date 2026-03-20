export type CellValue = number | null

export interface CellState {
	value: CellValue
	isGiven: boolean
	hasConflict: boolean
}

export type GameBoard = CellState[][]
export type SudokuGrid = (number | null)[][]

interface PuzzleData {
	puzzle: SudokuGrid
	solution: number[][]
}

const PUZZLES: PuzzleData[] = [
	{
		puzzle: [
			[null, 3, 5, 2, 6, 9, 7, 8, null],
			[6, 8, 2, 5, 7, 1, null, 9, 3],
			[1, 9, 7, 8, null, 4, 5, 6, 2],
			[8, 2, 6, 1, 9, null, 3, 4, 7],
			[3, 7, 4, 6, null, 2, 9, 1, 5],
			[9, 5, 1, null, 4, 3, 6, 2, 8],
			[5, 1, 9, 3, null, 6, 8, 7, 4],
			[2, 4, null, 9, 5, 7, 1, 3, 6],
			[7, 6, 3, 4, 1, 8, 2, null, 9]
		],
		solution: [
			[4, 3, 5, 2, 6, 9, 7, 8, 1],
			[6, 8, 2, 5, 7, 1, 4, 9, 3],
			[1, 9, 7, 8, 3, 4, 5, 6, 2],
			[8, 2, 6, 1, 9, 5, 3, 4, 7],
			[3, 7, 4, 6, 8, 2, 9, 1, 5],
			[9, 5, 1, 7, 4, 3, 6, 2, 8],
			[5, 1, 9, 3, 2, 6, 8, 7, 4],
			[2, 4, 8, 9, 5, 7, 1, 3, 6],
			[7, 6, 3, 4, 1, 8, 2, 5, 9]
		]
	},
	{
		puzzle: [
			[5, 8, 1, 6, null, 2, 4, 3, 9],
			[7, 9, null, 8, 4, 3, 6, 5, 1],
			[3, 6, 4, 5, 9, 1, null, 8, 2],
			[4, null, 8, 9, 5, 7, 2, 1, 6],
			[2, 5, 6, 1, 8, null, 9, 7, 3],
			[1, 7, 9, 3, 2, 6, 8, null, 5],
			[8, 4, 5, 2, null, 9, 3, 6, 7],
			[9, 1, 3, 7, 6, 8, 5, 2, null],
			[null, 2, 7, 4, 3, 5, 1, 9, 8]
		],
		solution: [
			[5, 8, 1, 6, 7, 2, 4, 3, 9],
			[7, 9, 2, 8, 4, 3, 6, 5, 1],
			[3, 6, 4, 5, 9, 1, 7, 8, 2],
			[4, 3, 8, 9, 5, 7, 2, 1, 6],
			[2, 5, 6, 1, 8, 4, 9, 7, 3],
			[1, 7, 9, 3, 2, 6, 8, 4, 5],
			[8, 4, 5, 2, 1, 9, 3, 6, 7],
			[9, 1, 3, 7, 6, 8, 5, 2, 4],
			[6, 2, 7, 4, 3, 5, 1, 9, 8]
		]
	},
	{
		puzzle: [
			[1, 2, 6, null, 3, 7, 9, 5, 8],
			[8, 9, 5, 6, 2, null, 4, 7, 3],
			[3, 7, null, 9, 8, 5, 1, 2, 6],
			[4, 5, 7, 1, null, 3, 8, 6, 2],
			[9, null, 3, 2, 4, 6, 5, 1, 7],
			[6, 1, 2, 5, 7, 8, null, 9, 4],
			[2, 6, 9, 3, 1, 4, 7, null, 5],
			[null, 4, 8, 7, 6, 9, 2, 3, 1],
			[7, 3, 1, 8, 5, null, 6, 4, 9]
		],
		solution: [
			[1, 2, 6, 4, 3, 7, 9, 5, 8],
			[8, 9, 5, 6, 2, 1, 4, 7, 3],
			[3, 7, 4, 9, 8, 5, 1, 2, 6],
			[4, 5, 7, 1, 9, 3, 8, 6, 2],
			[9, 8, 3, 2, 4, 6, 5, 1, 7],
			[6, 1, 2, 5, 7, 8, 3, 9, 4],
			[2, 6, 9, 3, 1, 4, 7, 8, 5],
			[5, 4, 8, 7, 6, 9, 2, 3, 1],
			[7, 3, 1, 8, 5, 2, 6, 4, 9]
		]
	}
]

export function getRandomPuzzle(): PuzzleData {
	return PUZZLES[Math.floor(Math.random() * PUZZLES.length)]
}

export function initializeBoard(puzzle: SudokuGrid): GameBoard {
	return puzzle.map((row) =>
		row.map((value) => ({
			value,
			isGiven: value !== null,
			hasConflict: false
		}))
	)
}

export function findConflicts(board: GameBoard): GameBoard {
	const conflicts = board.map((row) => row.map(() => false))

	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			const val = board[r][c].value
			if (val === null) continue

			// Check row
			for (let cc = 0; cc < 9; cc++) {
				if (cc !== c && board[r][cc].value === val) {
					conflicts[r][c] = true
					conflicts[r][cc] = true
				}
			}

			// Check column
			for (let rr = 0; rr < 9; rr++) {
				if (rr !== r && board[rr][c].value === val) {
					conflicts[r][c] = true
					conflicts[rr][c] = true
				}
			}

			// Check 3x3 box
			const boxR = Math.floor(r / 3) * 3
			const boxC = Math.floor(c / 3) * 3
			for (let rr = boxR; rr < boxR + 3; rr++) {
				for (let cc = boxC; cc < boxC + 3; cc++) {
					if ((rr !== r || cc !== c) && board[rr][cc].value === val) {
						conflicts[r][c] = true
						conflicts[rr][cc] = true
					}
				}
			}
		}
	}

	return board.map((row, r) =>
		row.map((cell, c) => ({
			...cell,
			hasConflict: conflicts[r][c]
		}))
	)
}

export function isBoardComplete(board: GameBoard, solution: number[][]): boolean {
	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			if (board[r][c].value !== solution[r][c]) return false
		}
	}
	return true
}
