'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'lib/utils'
import { Check, Copy } from 'react-feather'

const snippetVariants = cva('max-w-full relative rounded-md border py-2.5 pl-3 pr-12', {
	variants: {
		variant: {
			default: 'bg-[var(--ds-background-100)] border-[var(--ds-gray-alpha-400)] text-[var(--ds-gray-1000)]',
			dark: 'bg-[var(--ds-gray-1000)] border-[var(--ds-gray-1000)] text-[var(--ds-gray-100)]',
			success: 'bg-[var(--ds-blue-100)] border-[var(--ds-blue-400)] text-[var(--ds-blue-900)]',
			error: 'bg-[var(--ds-red-100)] border-[var(--ds-red-400)] text-[var(--ds-red-900)]',
			warning: 'bg-[var(--ds-amber-100)] border-[var(--ds-amber-400)] text-[var(--ds-amber-900)]'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
})

interface SnippetProps {
	text: string | string[]
	width?: string
	onCopy?: () => void
	type?: VariantProps<typeof snippetVariants>['variant']
	prompt?: boolean
	className?: string
}

const Snippet: React.FC<SnippetProps> = ({ text, width, prompt = true, onCopy, type = 'default', className }) => {
	const textArray = Array.isArray(text) ? text : [text]
	const [showCopyButton, setShowCopyButton] = React.useState(true)

	function copyTextHandler() {
		if (showCopyButton === false) return

		setShowCopyButton(false)
		navigator.clipboard.writeText(textArray.join('\n\t')).then(() => {
			if (onCopy) {
				onCopy()
			}
		})

		setTimeout(() => {
			setShowCopyButton(true)
		}, 1200)
	}

	return (
		<div className={cn(snippetVariants({ variant: type }), className)} style={{ width }}>
			<div className="flex-1">
				{textArray.map((text, index) => (
					<pre
						key={index}
						className={cn('overflow-y-auto text-[13px]', prompt && "before:select-none before:content-['$_']")}
					>
						{text}
					</pre>
				))}
			</div>

			<button
				onClick={copyTextHandler}
				className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center"
			>
				<div
					className={cn(
						'fill-mode-forwards  absolute duration-150 ease-out',
						showCopyButton ? 'animate-copy-button-fadeIn' : 'animate-copy-button-fadeOut'
					)}
				>
					<Copy className="h-4 w-4" />
				</div>
			</button>
		</div>
	)
}

export { Snippet }
