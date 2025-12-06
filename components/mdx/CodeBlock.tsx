import React from 'react'
import vitesseLight from 'shiki/themes/vitesse-light.mjs'
import vitesseBlack from 'shiki/themes/vitesse-black.mjs'
import githubLight from 'shiki/themes/github-light.mjs'
import { createHighlighterCoreSync } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

import js from 'shiki/langs/javascript.mjs'
import ts from 'shiki/langs/typescript.mjs'
import tsx from 'shiki/langs/tsx.mjs'
import jsx from 'shiki/langs/jsx.mjs'
import css from 'shiki/langs/css.mjs'
import html from 'shiki/langs/html.mjs'
import json from 'shiki/langs/json.mjs'
import markdown from 'shiki/langs/markdown.mjs'
import python from 'shiki/langs/python.mjs'
import bash from 'shiki/langs/bash.mjs'
import sql from 'shiki/langs/sql.mjs'

interface CodeBlockProps {
	children?: React.ReactNode | string
	className?: string
	filename?: string
}

const langs = ['js', 'ts', 'tsx', 'jsx', 'css', 'html', 'json', 'markdown', 'python', 'bash', 'sql']

const shiki = createHighlighterCoreSync({
	themes: [vitesseLight, vitesseBlack, githubLight],
	langs: [js, ts, tsx, jsx, css, html, json, markdown, python, bash, sql],
	engine: createJavaScriptRegexEngine()
})

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className = '', filename }) => {
	// Extract language from className (format: language-typescript)
	const match = className.match(/language-(\w+)/)
	const language = langs.find((lang) => lang === match?.[1]) || 'markdown'

	// Extract code string from children properly
	let code = ''
	if (typeof children === 'string') {
		code = children
	} else if (React.isValidElement(children)) {
		const props = children.props as { children?: string | React.ReactNode }
		if (typeof props.children === 'string') {
			code = props.children
		}
	} else if (Array.isArray(children)) {
		code = children
			.map((child) => {
				if (typeof child === 'string') return child
				if (React.isValidElement(child)) {
					const props = child.props as { children?: string }
					return typeof props.children === 'string' ? props.children : ''
				}
				return ''
			})
			.join('')
	}

	code = code.trim()

	// Replace tabs with 2 spaces before highlighting
	code = code.replace(/\t/g, '  ')

	const html = shiki.codeToHtml(code, {
		lang: language,
		theme: 'github-light'
	})

	// return (
	// 	<div className="not-prose relative my-6">
	// 		<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-[#000] transition-all lg:-bottom-4 lg:-right-4">
	// 			<div className="h-[25px] border-b border-black"></div>
	// 		</div>
	// 		<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-[#000] transition-all lg:-bottom-2 lg:-right-2">
	// 			<div className="h-[25px] border-b border-black"></div>
	// 		</div>
	// 		<div className="relative flex h-full w-full flex-col rounded-md border border-black bg-[#000]">
	// 			<div className="flex items-center gap-1 border-b border-black p-2">
	// 				<div className="h-2 w-2 rounded-full border border-black"></div>
	// 				<div className="h-2 w-2 rounded-full border border-black"></div>
	// 				<div className="h-2 w-2 rounded-full border border-black"></div>
	// 				{filename && <div className="pl-1 text-xs">{filename}</div>}
	// 			</div>
	// 			<div className="flex h-full flex-col p-2">
	// 				<div className="overflow-x-auto p-4">
	// 					<div dangerouslySetInnerHTML={{ __html: html }} className="text-xs" />
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// )

	return (
		<div className="not-prose relative my-6">
			<div className="absolute -bottom-3 -right-3 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-4 lg:-right-4">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="absolute -bottom-1.5 -right-1.5 h-full w-full rounded-md border border-black bg-white transition-all lg:-bottom-2 lg:-right-2">
				<div className="h-[25px] border-b border-black"></div>
			</div>
			<div className="relative flex h-full w-full flex-col rounded-md border border-black bg-white">
				<div className="flex items-center gap-1 border-b border-black p-2">
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
					<div className="h-2 w-2 rounded-full border border-black"></div>
					{filename && <div className="pl-1 text-xs">{filename}</div>}
				</div>
				<div className="flex h-full flex-col p-2">
					<div className="overflow-x-auto p-4">
						<div dangerouslySetInnerHTML={{ __html: html }} className="text-xs" />
					</div>
				</div>
			</div>
		</div>
	)
}
