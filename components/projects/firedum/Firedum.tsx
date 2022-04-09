import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/atelier-forest-light.css'
import FirebaseView from './FirebaseView'
// import 'highlight.js/styles/vs.css'

const Firedum: React.FC = ({}) => {
	const editorRef = useRef<HTMLElement>(null)

	const code = `// index.js / index.ts
import { firedumAdd } from 'firedum'
import { fs } from './firebase'
import { collection } from 'firebase/firestore'

await firedumAdd({
    collectionReference: collection('users'),
    fields: {
        name: '',
        email: '',
		email_verified: false,
    },
    numberOfDocuments: 3,
})`

	useEffect(() => {
		if (editorRef.current) {
			editorRef.current.innerHTML = hljs.highlight(code, { language: 'javascript' }).value
		}
	}, [editorRef, code])

	return (
		<section className="min-h-screen w-screen bg-bee p-6 font-bold lg:p-10">
			<div className="">
				<h2 className="mb-2 text-7xl font-bold">Firedum 02</h2>
				<p className="mb-2 max-w-4xl text-sm font-medium text-black/80 lg:text-base">
					Firedum is a npm package that makes it easy to populate a firestore database with mock data. The
					package can be used to add new and update documents in a firestore collection but can also create
					users aswell as adding documents for the newly created users.
				</p>
				<div className="relative mb-4 mt-5 inline-block cursor-pointer transition-transform hover:-rotate-2">
					<div className="absolute -right-2 -bottom-2 h-full w-full rounded-md border border-black bg-white"></div>
					<div className="absolute -right-1 -bottom-1 h-full w-full rounded-md border border-black bg-white"></div>
					<button className="relative rounded-md border border-black bg-white py-1 px-2">Run code</button>
				</div>
				<div className="gap-5 lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-1">
					<div className="relative mb-8 w-full transition-transform lg:mb-0 lg:mr-5 lg:w-max lg:hover:rotate-2">
						<div className="relative">
							<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4">
								<div className="h-[25px] border-b border-black"></div>
							</div>
							<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2">
								<div className="h-[25px] border-b border-black"></div>
							</div>
							<div className="relative flex w-full gap-1 rounded-t-md border border-b-0 border-black bg-white p-2">
								<div className="h-2 w-2 rounded-full border border-black"></div>
								<div className="h-2 w-2 rounded-full border border-black"></div>
								<div className="h-2 w-2 rounded-full border border-black"></div>
							</div>
							<pre className="relative w-full rounded-b-md border border-black bg-white p-3 text-xs font-thin lg:p-4 lg:text-sm xl:text-base">
								<code ref={editorRef}></code>
							</pre>
						</div>
					</div>

					<FirebaseView />
				</div>
			</div>
		</section>
	)
}

export default Firedum
