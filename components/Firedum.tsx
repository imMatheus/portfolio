import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/atelier-forest-light.css'
import FirebaseView from './FirebaseView'
// import 'highlight.js/styles/vs.css'

const Firedum: React.FC = ({}) => {
	const editorRef = useRef<HTMLElement>(null)

	const code = `// index.js / index.ts
import { fs } from './firebase'
import { firedumAdd } from 'firedum'

await firedumAdd({
    collectionReference: fs.collection('users'),
    fields: {
        firstName: '',
        lastName: 'Bar',
    },
    numberOfDocuments: 10,
})`

	useEffect(() => {
		if (editorRef.current) {
			editorRef.current.innerHTML = hljs.highlight(code, { language: 'javascript' }).value
		}
	}, [editorRef, code])

	return (
		<section className="sticky top-0 h-screen w-screen overflow-hidden bg-white p-6 font-bold lg:p-10">
			<h2 className="textwhite mb-5 text-7xl font-bold md:mb-8">Firedum 02</h2>

			<div className="gap-5 lg:grid lg:grid-cols-[auto_1fr]">
				<div className="relative mb-8 w-full transition-transform lg:mb-0 lg:mr-5 lg:w-max lg:hover:rotate-2">
					<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4">
						<div className="h-[25px] border-b border-black"></div>
					</div>
					<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2">
						<div className="h-[25px] border-b border-black"></div>
					</div>
					<div className="relative overflow-scroll rounded-md border border-black bg-white">
						<div className="flex w-full gap-1 p-2">
							<div className="h-2 w-2 rounded-full border border-black"></div>
							<div className="h-2 w-2 rounded-full border border-black"></div>
							<div className="h-2 w-2 rounded-full border border-black"></div>
						</div>
						<pre className="w-full border-t border-t-black p-4 text-sm font-thin md:text-base xl:text-lg">
							<code ref={editorRef}></code>
						</pre>
					</div>
				</div>

				<FirebaseView />
			</div>
		</section>
	)
}

export default Firedum
