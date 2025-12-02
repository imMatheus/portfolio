import React from 'react'
import vitesseLight from 'shiki/themes/vitesse-light.mjs'
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
	themes: [vitesseLight],
	langs: [js, ts, tsx, jsx, css, html, json, markdown, python, bash, sql],
	engine: createJavaScriptRegexEngine()
})

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className = '', filename }) => {
	// Extract language from className (format: language-typescript)
	const match = className.match(/language-(\w+)/)
	const language = langs.find((lang) => lang === match?.[1]) || 'markdown'
	const html = shiki.codeToHtml(children?.toString() || '', { lang: language, theme: 'vitesse-light' })

	console.log({ children })

	console.log({ language })

	return (
		<div className="not-prose my-1 overflow-hidden rounded-lg border border-blue-950 bg-[#000]">
			{filename && <div className="border-b px-4 py-2 font-mono text-sm text-white">{filename}</div>}
			<div className="overflow-x-auto p-4">
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	)
}
