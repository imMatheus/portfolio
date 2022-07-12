import React, { useEffect, useRef } from 'react'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'

interface DemoCodeProps {}

// hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

const DemoCode: React.FC<DemoCodeProps> = ({}) => {
	const divRef = useRef<HTMLDivElement>(null)
	const markdown = "hej```const x = 5;\n const y = 7;\nconsole.log('hej')```"

	useEffect(() => {
		if (divRef.current) {
			marked.setOptions({
				renderer: new marked.Renderer(),
				highlight: function (code, lang) {
					const language = hljs.getLanguage(lang) ? lang : 'plaintext'
					return hljs.highlight(code, { language }).value
				},
				langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
				pedantic: false,
				gfm: true,
				breaks: false,
				sanitize: false,
				smartLists: true,
				smartypants: false,
				xhtml: false
			})

			divRef.current.innerHTML = marked.parse(markdown)
		}
	}, [markdown])
	return (
		<div className="bg-blue-600">
			<div className="prose prose-invert prose-gray" ref={divRef}></div>
		</div>
	)
}

export default DemoCode
