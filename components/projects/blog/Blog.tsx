import React, { useEffect, useRef } from 'react'
import ProjectTitle from '../ProjectTitle'
import Link from '../Link'
import LinkWrapper from '../LinkWrapper'
import { GitHub, ExternalLink } from 'react-feather'
import ProjectDescription from '../ProjectDescription'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'
// import 'highlight.js/styles/base16/monokai.css'
// import 'highlight.js/styles/base16/.css'
// import 'highlight.js/styles/base16/.css'
// import 'highlight.js/styles/base16/dracula.css'

hljs.registerLanguage('html', require('highlight.js/lib/languages/vbscript-html'))

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
	const divRef = useRef<HTMLDivElement>(null)
	const markdown =
		'Centering a div is a lot easier then you might think, i promise 😃 \n ```html \n <!-- index.html --> \n<div class="center-me"></div>\n```\n ```css \n /* style.css */ \n .center-me {\n\tmargin: 0 auto;\n} \n```'

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
				smartypants: false,
				xhtml: false
			})

			divRef.current.innerHTML = marked.parse(markdown)
		}
	}, [markdown])

	return (
		<div id="blog">
			<ProjectTitle>Blog</ProjectTitle>
			<ProjectDescription>
				A very simple blog built with Next.js and tailwind. As of now, the blog does not contain many articles, but it
				was a fun project and one of the first things I built with Next.js. I have plans on updating the project but
				it&apos;s not something on my near bucket list, unfortunately.
			</ProjectDescription>
			<LinkWrapper>
				<Link href="https://github.com/imMatheus/blog" Icon={GitHub} text="Repository" />
				<Link href="https://matus-blog.vercel.app/" Icon={ExternalLink} text="Live site" />
			</LinkWrapper>
			<article className="mt-5 max-w-4xl rounded-md bg-gray-100 p-6">
				<h2 className="mb-2 text-4xl font-extrabold">How to center a div</h2>
				<p className="mb-4 text-sm font-semibold italic text-gray-600">2022/12/18 - Matheus Mendes</p>
				<div className="prose prose-gray prose-invert" ref={divRef}></div>
			</article>
		</div>
	)
}

export default Blog
