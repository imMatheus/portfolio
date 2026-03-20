import React, { useState, useCallback, useMemo } from 'react'
import { getRandomPuzzle, initializeBoard, findConflicts, isBoardComplete, GameBoard } from './sudoku-utils'

const Win95TitleBar: React.FC<{ title: string; onClose?: () => void }> = ({ title, onClose }) => (
	<div
		className="flex items-center justify-between px-1.5 py-0.5 select-none"
		style={{ background: 'linear-gradient(90deg, #000080, #1084d0)' }}
	>
		<span className="text-white text-xs font-bold truncate">{title}</span>
		{onClose && (
			<button
				onClick={onClose}
				className="text-black text-xs font-bold px-1.5 py-0 leading-none cursor-pointer"
				style={{
					backgroundColor: '#c0c0c0',
					borderTop: '2px solid #ffffff',
					borderLeft: '2px solid #ffffff',
					borderBottom: '2px solid #808080',
					borderRight: '2px solid #808080',
					minWidth: '16px',
					height: '14px',
					fontSize: '10px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				x
			</button>
		)}
	</div>
)

const raised = {
	borderTop: '2px solid #ffffff',
	borderLeft: '2px solid #ffffff',
	borderBottom: '2px solid #808080',
	borderRight: '2px solid #808080',
	backgroundColor: '#c0c0c0',
}

const inset = {
	borderTop: '2px solid #808080',
	borderLeft: '2px solid #808080',
	borderBottom: '2px solid #ffffff',
	borderRight: '2px solid #ffffff',
	backgroundColor: '#c0c0c0',
}

export const SudokuGame: React.FC = () => {
	const [puzzleData, setPuzzleData] = useState(() => getRandomPuzzle())
	const [board, setBoard] = useState<GameBoard>(() => initializeBoard(puzzleData.puzzle))
	const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null)
	const [isWon, setIsWon] = useState(false)

	const boardWithConflicts = useMemo(() => findConflicts(board), [board])

	const handleCellClick = useCallback((row: number, col: number) => {
		if (isWon) return
		if (board[row][col].isGiven) {
			setSelectedCell(null)
			return
		}
		setSelectedCell({ row, col })
	}, [board, isWon])

	const handleNumberInput = useCallback((num: number) => {
		if (!selectedCell || isWon) return
		const { row, col } = selectedCell
		if (board[row][col].isGiven) return

		const newBoard = board.map((r, ri) =>
			r.map((cell, ci) =>
				ri === row && ci === col ? { ...cell, value: num } : cell
			)
		)
		setBoard(newBoard)

		if (isBoardComplete(newBoard, puzzleData.solution)) {
			setIsWon(true)
			setSelectedCell(null)
		}
	}, [selectedCell, board, puzzleData.solution, isWon])

	const handleClear = useCallback(() => {
		if (!selectedCell || isWon) return
		const { row, col } = selectedCell
		if (board[row][col].isGiven) return

		const newBoard = board.map((r, ri) =>
			r.map((cell, ci) =>
				ri === row && ci === col ? { ...cell, value: null } : cell
			)
		)
		setBoard(newBoard)
	}, [selectedCell, board, isWon])

	const handleNewGame = useCallback(() => {
		const newPuzzle = getRandomPuzzle()
		setPuzzleData(newPuzzle)
		setBoard(initializeBoard(newPuzzle.puzzle))
		setSelectedCell(null)
		setIsWon(false)
	}, [])

	return (
		<div className="mt-8 flex flex-col items-center md:items-start md:flex-row gap-6 relative">
			{/* Main Sudoku Window */}
			<div
				className="w-full max-w-[400px] sm:max-w-[460px] shadow-[3px_3px_0px_#000]"
				style={raised}
			>
				<Win95TitleBar title={isWon ? 'You Win!' : 'Easy mode'} onClose={handleNewGame} />
				<div className="p-1.5" style={{ backgroundColor: '#c0c0c0' }}>
					<div style={inset}>
						{/* 9x9 Grid */}
						<div className="grid grid-cols-9">
							{boardWithConflicts.map((row, ri) =>
								row.map((cell, ci) => {
									const isSelected = selectedCell?.row === ri && selectedCell?.col === ci
									const borderRight = ci === 2 || ci === 5 ? '2px solid #000' : '1px solid #808080'
									const borderBottom = ri === 2 || ri === 5 ? '2px solid #000' : '1px solid #808080'

									return (
										<button
											key={`${ri}-${ci}`}
											onClick={() => handleCellClick(ri, ci)}
											className="aspect-square flex items-center justify-center font-mono font-bold cursor-pointer text-lg sm:text-2xl p-0"
											style={{
												backgroundColor: isSelected
													? '#a0a0e0'
													: cell.hasConflict && cell.value
													? '#e0a0a0'
													: '#c0c0c0',
												borderRight,
												borderBottom,
												borderTop: ri === 0 ? 'none' : ri === 3 || ri === 6 ? '2px solid #000' : 'none',
												borderLeft: ci === 0 ? 'none' : ci === 3 || ci === 6 ? '2px solid #000' : 'none',
												color: cell.isGiven ? '#000000' : '#00008b',
												minHeight: '36px',
											}}
										>
											{cell.value || ''}
										</button>
									)
								})
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Number Pad Window */}
			<div
				className="w-full max-w-[280px] sm:max-w-[300px] md:self-start md:mt-8 shadow-[3px_3px_0px_#000] z-10"
				style={raised}
			>
				<Win95TitleBar title="Number pad" />
				<div className="p-2 grid grid-cols-5 gap-1" style={{ backgroundColor: '#c0c0c0' }}>
					{['X', 1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
						<button
							key={val}
							onClick={() => (val === 'X' ? handleClear() : handleNumberInput(val as number))}
							className="font-mono font-bold text-xl sm:text-2xl py-2 cursor-pointer active:border-t-[#808080] active:border-l-[#808080] active:border-b-[#ffffff] active:border-r-[#ffffff]"
							style={raised}
						>
							{val}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
