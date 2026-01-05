import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import { Counter } from '@/components/mdx/Counter'
import { CodeBlock } from '@/components/mdx/CodeBlock'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

const components: MDXComponents = {
	// Custom components
	Counter,
	
	// Custom code block component using Shiki
	pre: (props: any) => {
		// MDX wraps code blocks as <pre><code className="language-xxx">code</code></pre>
		// Extract the code element and its content
		const codeElement = props.children
		
		// Extract filename from various possible sources:
		// 1. data-filename attribute on pre element
		// 2. data-file attribute on pre element  
		// 3. title attribute on code element
		// 4. data-filename on code element
		const filename = 
			props['data-filename'] || 
			props['data-file'] || 
			codeElement?.props?.['data-filename'] ||
			codeElement?.props?.title ||
			null
		
		// Extract highlighted lines from data-highlighted-lines attribute
		const highlightedLinesStr = 
			props['data-highlighted-lines'] || 
			codeElement?.props?.['data-highlighted-lines'] ||
			null
		
		const highlightedLines = highlightedLinesStr 
			? highlightedLinesStr.split(',').map(Number).filter(n => !isNaN(n))
			: []
		
		// Handle both direct code element and nested structure
		let codeProps = null
		let codeContent = null
		
		if (codeElement?.props) {
			// Direct code element
			codeProps = codeElement.props
			codeContent = codeElement.props.children
		} else if (React.isValidElement(codeElement)) {
			// React element
			codeProps = (codeElement as any).props
			codeContent = codeProps?.children
		}
		
		if (codeProps && codeContent) {
			return (
				<CodeBlock 
					className={codeProps.className || ''} 
					filename={filename}
					highlightedLines={highlightedLines}
				>
					{codeContent}
				</CodeBlock>
			)
		}
		
		// Fallback to default pre
		return <pre {...props} />
	},
	
	// Customize built-in components
	img: (props) => (
		<Image
			{...(props as ImageProps)}
			alt={props.alt || ''}
			width={800}
			height={400}
			className="my-6 rounded-lg"
		/>
	)
}

export function useMDXComponents(): MDXComponents {
	return components
}

