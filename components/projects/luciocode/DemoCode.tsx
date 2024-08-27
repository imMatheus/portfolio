import { useState } from 'react'
import Editor from '@monaco-editor/react'
import classNames from 'classnames'

interface DemoCodeProps {}

const DemoCode: React.FC<DemoCodeProps> = ({}) => {
	const startCode = 'function simpleAddition(a, b) {\n  // Hint! Try writing: return a + b\n\n}'
	const [code, setCode] = useState(startCode)
	const [testOutputs, setTestOutputs] = useState<{ input: string; output: string; correct: boolean }[]>([])
	const [loading, setLoading] = useState(false)
	const [selectedIndex, setSelectedIndex] = useState(0)

	const cases = [
		['5, 7', '12'],
		['9, 10', '19']
	] as const

	const runCodeHandler = async () => {
		setLoading(true)
		let answers: { input: string; output: string; correct: boolean }[] = []

		function sleep(ms: number) {
			return new Promise((resolve) => setTimeout(resolve, ms))
		}

		for (let i = 0; i < cases.length; i++) {
			const currentCase = cases[i]
			const args = currentCase[0]
			const expected = currentCase[1]

			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					language: 'javascript',
					source: `${code}
					\nconsole.log(simpleAddition(${args}))
					\nconsole.log(simpleAddition(${args})===${expected})`,
					stdin: '',
					args: []
				})
			}

			await fetch('https://emkc.org/api/v1/piston/execute', requestOptions)
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					const res = data.output.split('\n')
					console.log(res)
					const output = res[res.length - 3]
					const correctAnswer = res[res.length - 2] === 'true'

					answers.push({
						input: args,
						output: output,
						correct: correctAnswer
					})
				})
			await sleep(530)
		}

		setLoading(false)
		setTestOutputs(answers)
	}

	return (
		<div className="flex min-h-[250px] flex-1 flex-col overflow-y-scroll md:max-h-[640px]">
			<div className="flex-1 bg-white pt-3">
				<Editor
					theme="light"
					language={'javascript'}
					onChange={(e) => setCode(e || '')}
					value={code}
					options={{
						automaticLayout: true,
						inherit: true,
						scrollBeyondLastLine: false,
						minimap: {
							enabled: false
						},
						scrollbar: {
							alwaysConsumeMouseWheel: false
						},
						fontSize: 16,
						wordWrap: 'on',
						wordWrapMinified: true,
						wrappingIndent: 'same'
					}}
				/>
			</div>
			<div className="bg-neutral-100 p-4 text-gray-900">
				<div className="flex flex-shrink-0 flex-wrap justify-end">
					<button
						onClick={async () => {
							await runCodeHandler()
						}}
						disabled={loading}
						className="rounded-md bg-blue-600 px-3 py-1 text-white transition-opacity hover:opacity-70 disabled:opacity-30"
					>
						Run code
					</button>
				</div>
				{loading ? (
					<div className="mx-auto my-5 h-6 w-6 animate-spin rounded-full border-4 border-neutral-300 border-t-blue-600 md:h-8 md:w-8"></div>
				) : (
					testOutputs.length > 0 && (
						<div className="my-5">
							{testOutputs.length === testOutputs.filter((a) => a.correct).length ? (
								<h3 className="text-xl font-semibold text-green-600">Completed</h3>
							) : (
								<h3 className="text-xl font-semibold text-red-600">Failed</h3>
							)}
							<div className="mt-2 flex flex-wrap gap-3">
								{testOutputs.map((testCase, i) => (
									<div
										onClick={() => {
											setSelectedIndex(i)
										}}
										key={i}
										className={classNames(
											'relative cursor-pointer rounded-md bg-neutral-200 px-3 py-1 text-xs 2xl:text-sm',
											selectedIndex !== i && 'opacity-70'
										)}
									>
										Test case {i + 1}
										<div
											className={classNames(
												'absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full',
												testCase.correct ? 'bg-green-600' : 'bg-red-600'
											)}
										></div>
									</div>
								))}
							</div>
							<div className="mt-3 text-gray-800">
								<h3 className="mb-1 mt-6 text-lg font-bold">Input</h3>
								<pre className="rounded-md bg-neutral-200 p-4">
									<code>{`a = ${testOutputs[selectedIndex].input.split(', ')[0]}\nb = ${
										testOutputs[selectedIndex].input.split(', ')[1]
									}`}</code>
								</pre>
								<h3 className="mb-1 mt-6 text-lg font-bold">Output</h3>
								<pre className="rounded-md bg-neutral-200 p-4">
									<code>{testOutputs[selectedIndex].output}</code>
								</pre>
								<h3 className="mb-1 mt-6 text-lg font-bold">Expected Output</h3>
								<pre className="rounded-md bg-neutral-200 p-4">
									<code>{cases[selectedIndex][1]}</code>
								</pre>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	)
}

export default DemoCode
