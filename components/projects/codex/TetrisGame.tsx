import React, { useState, useEffect, useCallback, useRef } from 'react'

const COLS = 10
const ROWS = 20

const TETROMINOES: Record<string, { shape: number[][]; color: string }> = {
	I: { shape: [[1, 1, 1, 1]], color: '#00d4aa' },
	O: {
		shape: [
			[1, 1],
			[1, 1]
		],
		color: '#fee75c'
	},
	T: {
		shape: [
			[0, 1, 0],
			[1, 1, 1]
		],
		color: '#c084fc'
	},
	S: {
		shape: [
			[0, 1, 1],
			[1, 1, 0]
		],
		color: '#57f287'
	},
	Z: {
		shape: [
			[1, 1, 0],
			[0, 1, 1]
		],
		color: '#ed4245'
	},
	J: {
		shape: [
			[1, 0, 0],
			[1, 1, 1]
		],
		color: '#5865f2'
	},
	L: {
		shape: [
			[0, 0, 1],
			[1, 1, 1]
		],
		color: '#f97316'
	}
}

const PIECE_KEYS = Object.keys(TETROMINOES)

function randomPiece() {
	const key = PIECE_KEYS[Math.floor(Math.random() * PIECE_KEYS.length)]
	return { key, ...TETROMINOES[key] }
}

function rotateMatrix(matrix: number[][]): number[][] {
	const rows = matrix.length
	const cols = matrix[0].length
	const result: number[][] = Array.from({ length: cols }, () => Array(rows).fill(0))
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			result[c][rows - 1 - r] = matrix[r][c]
		}
	}
	return result
}

interface Cell {
	filled: boolean
	color: string
}

function createEmptyBoard(): Cell[][] {
	return Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => ({ filled: false, color: '' })))
}

const TetrisGame: React.FC = () => {
	const [board, setBoard] = useState<Cell[][]>(createEmptyBoard)
	const [current, setCurrent] = useState(() => randomPiece())
	const [next, setNext] = useState(() => randomPiece())
	const [pos, setPos] = useState({ r: 0, c: Math.floor(COLS / 2) - 1 })
	const [score, setScore] = useState(0)
	const [lines, setLines] = useState(0)
	const [gameOver, setGameOver] = useState(false)
	const [started, setStarted] = useState(false)

	const boardRef = useRef(board)
	const currentRef = useRef(current)
	const posRef = useRef(pos)
	const gameOverRef = useRef(gameOver)
	const containerRef = useRef<HTMLDivElement>(null)

	boardRef.current = board
	currentRef.current = current
	posRef.current = pos
	gameOverRef.current = gameOver

	const collides = useCallback((b: Cell[][], shape: number[][], r: number, c: number) => {
		for (let dr = 0; dr < shape.length; dr++) {
			for (let dc = 0; dc < shape[0].length; dc++) {
				if (!shape[dr][dc]) continue
				const nr = r + dr
				const nc = c + dc
				if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) return true
				if (b[nr][nc].filled) return true
			}
		}
		return false
	}, [])

	const lockAndSpawn = useCallback(() => {
		const b = boardRef.current.map((row) => row.map((cell) => ({ ...cell })))
		const { shape, color } = currentRef.current
		const { r, c } = posRef.current

		for (let dr = 0; dr < shape.length; dr++) {
			for (let dc = 0; dc < shape[0].length; dc++) {
				if (shape[dr][dc]) {
					b[r + dr][c + dc] = { filled: true, color }
				}
			}
		}

		// Clear lines
		let cleared = 0
		for (let row = ROWS - 1; row >= 0; row--) {
			if (b[row].every((cell) => cell.filled)) {
				b.splice(row, 1)
				b.unshift(Array.from({ length: COLS }, () => ({ filled: false, color: '' })))
				cleared++
				row++ // re-check same index
			}
		}

		setBoard(b)
		setLines((prev) => prev + cleared)
		setScore((prev) => prev + [0, 100, 300, 500, 800][cleared])

		const np = next
		const startC = Math.floor(COLS / 2) - Math.floor(np.shape[0].length / 2)
		if (collides(b, np.shape, 0, startC)) {
			setGameOver(true)
			return
		}

		setCurrent(np)
		setNext(randomPiece())
		setPos({ r: 0, c: startC })
	}, [next, collides])

	const drop = useCallback(() => {
		if (gameOverRef.current) return
		const { r, c } = posRef.current
		const { shape } = currentRef.current
		if (!collides(boardRef.current, shape, r + 1, c)) {
			setPos((p) => ({ ...p, r: p.r + 1 }))
		} else {
			lockAndSpawn()
		}
	}, [collides, lockAndSpawn])

	// Game loop
	useEffect(() => {
		if (!started || gameOver) return
		const speed = Math.max(100, 500 - Math.floor(lines / 10) * 50)
		const id = setInterval(drop, speed)
		return () => clearInterval(id)
	}, [started, gameOver, lines, drop])

	const handleKey = useCallback(
		(e: KeyboardEvent) => {
			if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Enter'].includes(e.key)) {
				e.preventDefault()
			}

			if (gameOver) {
				if (e.key === 'r' || e.key === 'R') {
					setBoard(createEmptyBoard())
					const p = randomPiece()
					setCurrent(p)
					setNext(randomPiece())
					setPos({ r: 0, c: Math.floor(COLS / 2) - Math.floor(p.shape[0].length / 2) })
					setScore(0)
					setLines(0)
					setGameOver(false)
					setStarted(true)
				}
				return
			}

			if (!started) {
				setStarted(true)
				return
			}

			const { r, c } = posRef.current
			const { shape } = currentRef.current

			switch (e.key) {
				case 'ArrowLeft':
					if (!collides(boardRef.current, shape, r, c - 1)) setPos((p) => ({ ...p, c: p.c - 1 }))
					break
				case 'ArrowRight':
					if (!collides(boardRef.current, shape, r, c + 1)) setPos((p) => ({ ...p, c: p.c + 1 }))
					break
				case 'ArrowDown':
					if (!collides(boardRef.current, shape, r + 1, c)) setPos((p) => ({ ...p, r: p.r + 1 }))
					break
				case 'ArrowUp':
				case ' ': {
					const rotated = rotateMatrix(shape)
					if (!collides(boardRef.current, rotated, r, c)) {
						setCurrent((prev) => ({ ...prev, shape: rotated }))
					}
					break
				}
				case 'Enter': {
					let nr = r
					while (!collides(boardRef.current, shape, nr + 1, c)) nr++
					setPos({ r: nr, c })
					setTimeout(() => lockAndSpawn(), 0)
					break
				}
			}
		},
		[gameOver, started, collides, lockAndSpawn]
	)

	useEffect(() => {
		const el = containerRef.current
		if (!el) return
		el.addEventListener('keydown', handleKey as any)
		return () => el.removeEventListener('keydown', handleKey as any)
	}, [handleKey])

	// Merge current piece onto display board
	const display = board.map((row) => row.map((cell) => ({ ...cell })))
	if (!gameOver) {
		for (let dr = 0; dr < current.shape.length; dr++) {
			for (let dc = 0; dc < current.shape[0].length; dc++) {
				if (current.shape[dr][dc]) {
					const nr = pos.r + dr
					const nc = pos.c + dc
					if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
						display[nr][nc] = { filled: true, color: current.color }
					}
				}
			}
		}
	}

	// Render next piece preview (4x4 grid)
	const nextGrid: (string | null)[][] = Array.from({ length: 4 }, () => Array(4).fill(null))
	const offsetR = Math.floor((4 - next.shape.length) / 2)
	const offsetC = Math.floor((4 - next.shape[0].length) / 2)
	for (let dr = 0; dr < next.shape.length; dr++) {
		for (let dc = 0; dc < next.shape[0].length; dc++) {
			if (next.shape[dr][dc]) {
				nextGrid[offsetR + dr][offsetC + dc] = next.color
			}
		}
	}

	return (
		<div
			ref={containerRef}
			tabIndex={0}
			className="relative mx-auto my-4 w-fit outline-none"
			onClick={() => containerRef.current?.focus()}
		>
			<fieldset className="border border-[#d4d4d4] px-4 pb-4 pt-1">
				<legend className="px-2 text-[#6e6e73]">Tetris</legend>
				<div className="mb-2 text-xs text-[#aeaeb2]">
					Arrows: move&nbsp;&nbsp;Up/Space: rotate&nbsp;&nbsp;Enter: drop
				</div>

				<div className="flex gap-4">
					{/* Game board */}
					<div
						className="grid shrink-0"
						style={{
							gridTemplateColumns: `repeat(${COLS}, 1fr)`,
							gridTemplateRows: `repeat(${ROWS}, 1fr)`,
							gap: '1px'
						}}
					>
						{display.flat().map((cell, i) => (
							<div
								key={i}
								className="flex h-[11px] w-[11px] items-center justify-center text-[8px] leading-none sm:h-[13px] sm:w-[13px] sm:text-[10px]"
								style={cell.filled ? { backgroundColor: cell.color } : undefined}
							>
								{!cell.filled && <span className="text-[#d1d1d6]">.</span>}
							</div>
						))}
					</div>

					{/* Side panel */}
					<div className="flex flex-col gap-3 pt-1 text-sm">
						<div>
							<div className="text-[#6e6e73]">Score</div>
							<div className="text-[#1d1d1f]">{score}</div>
						</div>
						<div>
							<div className="text-[#6e6e73]">Lines</div>
							<div className="text-[#1d1d1f]">{lines}</div>
						</div>
						<div>
							<div className="mb-1 text-[#6e6e73]">Next</div>
							<div className="border border-[#d4d4d4] p-1">
								<div
									className="grid"
									style={{
										gridTemplateColumns: 'repeat(4, 1fr)',
										gridTemplateRows: 'repeat(4, 1fr)',
										gap: '1px'
									}}
								>
									{nextGrid.flat().map((color, i) => (
										<div
											key={i}
											className="h-3 w-3 sm:h-3.5 sm:w-3.5"
											style={color ? { backgroundColor: color } : undefined}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{!started && !gameOver && <div className="mt-3 text-center text-xs text-[#aeaeb2]">Press any key to start</div>}
				{gameOver && <div className="mt-3 text-center text-xs text-[#ed4245]">Game Over! Press R to restart</div>}
			</fieldset>
		</div>
	)
}

export default TetrisGame
