import React from 'react'

interface DemoQuestionProps {}

const DemoQuestion: React.FC<DemoQuestionProps> = ({}) => {
	return (
		<div className="bg-white p-6 text-[#1e1e1e]">
			<h2 className="mb-1 text-3xl font-bold">Simple addition</h2>
			<div className="mb-3 flex flex-wrap gap-3">
				<p className="text-green-700">Easy</p>
			</div>
			<div className="text-gray-600">
				<p className="mb-3">
					Given two integers, <b className="text-gray-800">a</b> and <b className="text-gray-800">b</b>, return the sum
					of <b className="text-gray-800">a + b</b>
				</p>
				<h3 className="mb-1 text-lg font-bold text-gray-800">Sample Input</h3>
				<pre className="rounded-md bg-neutral-100 p-4">
					<code>
						a = 5 <br />b = 7
					</code>
				</pre>

				<h3 className="mb-1 mt-6 text-lg font-bold text-gray-800">Sample Output</h3>
				<pre className="rounded-md bg-neutral-100 p-4">
					<code>12</code>
				</pre>

				<h3 className="mb-1 mt-6 text-lg font-bold text-gray-800">Explanation</h3>
				<p>
					The sum of of <b className="text-gray-800">5 + 7</b> is <b className="text-gray-800">12</b>
				</p>
			</div>
		</div>
	)
}

export default DemoQuestion
