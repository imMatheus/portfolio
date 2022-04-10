import React, { useEffect, useRef } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/atelier-forest-light.css'
import FirebaseView from './FirebaseView'
import { GitHub, Package } from 'react-feather'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import ProjectDescription from '../ProjectDescription'
import ActionButton from '../ActionButton'
import 'highlight.js/styles/base16/solarized-dark.css'
// import 'highlight.js/styles/rainbow.css'

const Firedum: React.FC = ({}) => {
	const editorRef = useRef<HTMLElement>(null)
	const addDocsFunctionRef = useRef(() => {})

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
		<>
			<ProjectTitle>Firedum 02</ProjectTitle>
			<ProjectDescription>
				Firedum is an npm package that makes it easy to populate a firestore database with mock data. The
				package can be used to add new documents, and update existing documents in a firestore collection but
				can also create users as well as add documents for the newly created users. Underneath the hood, firedum
				uses faker.js to generate relative mock data
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/firedum" Icon={GitHub} text="Repository" />
				<Link href="https://www.npmjs.com/package/firedum" Icon={Package} text="NPM page" />
			</LinkWrapper>

			<ActionButton
				onClick={() => {
					addDocsFunctionRef.current()
				}}
			>
				Run Code
			</ActionButton>
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
						<pre className="relative w-full overflow-x-scroll rounded-b-md border border-black bg-white p-3 text-sm font-thin lg:p-4 xl:text-base">
							<code ref={editorRef}></code>
						</pre>
					</div>
				</div>

				<FirebaseView addDocsFunctionRef={addDocsFunctionRef} />
			</div>
		</>
	)
}

export default Firedum
