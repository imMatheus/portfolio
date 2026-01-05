import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import { getPostBySlug, getPostSlugs } from '../../lib/blog'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { useMDXComponents } from '../../mdx-components'
import { visit } from 'unist-util-visit'
import Link from 'next/link'

interface BlogPostProps {
	post: {
		slug: string
		frontmatter: {
			title: string
			date: string
			dateISO?: string
			description: string
			image?: string
		}
		serializedContent: MDXRemoteSerializeResult
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const slugs = getPostSlugs()
	const paths = slugs.map((slug) => ({
		params: { slug }
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
	const slug = params?.slug as string
	const post = getPostBySlug(slug)

	if (!post) {
		return {
			notFound: true
		}
	}

	// Custom remark plugin to extract filename and line highlighting from code block meta
	// Supports syntax like: ```typescript filename.ts {4-6} or ```typescript {4-6}
	const remarkExtractFilename = () => {
		return (tree: any) => {
			visit(tree, 'code', (node: any) => {
				if (node.meta) {
					const meta = node.meta.trim()

					// Extract line highlighting range (e.g., {4-6}, {1}, {1,3,5}, {1-3, 5-8})
					const lineRangeMatch = meta.match(/\{([\d,\s-]+)\}/)
					let highlightedLines: number[] = []

					if (lineRangeMatch) {
						const rangeStr = lineRangeMatch[1]
						// Parse ranges like "4-6", "1", "1,3,5", "1-3, 5-8"
						const parts = rangeStr.split(',')
						for (const part of parts) {
							const trimmed = part.trim()
							if (trimmed.includes('-')) {
								const [start, end] = trimmed.split('-').map((s: string) => Number(s.trim()))
								for (let i = start; i <= end; i++) {
									highlightedLines.push(i)
								}
							} else if (trimmed) {
								highlightedLines.push(Number(trimmed))
							}
						}
					}

					// Remove line highlighting from meta to extract filename
					const metaWithoutLines = meta.replace(/\{[\d,\s-]+\}/g, '').trim()

					// Extract filename from remaining meta (could be just filename or "title=filename")
					const filenameMatch = metaWithoutLines.match(/(?:title=)?(.+)/)
					const filename = filenameMatch && filenameMatch[1] ? filenameMatch[1].trim() : null

					node.data = node.data || {}
					node.data.hProperties = node.data.hProperties || {}

					if (filename) {
						node.data.hProperties['data-filename'] = filename
					}

					if (highlightedLines.length > 0) {
						node.data.hProperties['data-highlighted-lines'] = highlightedLines.join(',')
					}
				}
			})
		}
	}

	// Custom rehype plugin to pass filename and line highlighting from code to pre element
	const rehypePassFilename = () => {
		return (tree: any) => {
			visit(tree, 'element', (node: any) => {
				if (node.tagName === 'pre' && node.children?.[0]?.tagName === 'code') {
					const codeNode = node.children[0]
					const filename = codeNode.properties?.['data-filename']
					const highlightedLines = codeNode.properties?.['data-highlighted-lines']

					node.properties = node.properties || {}

					if (filename) {
						node.properties['data-filename'] = filename
					}

					if (highlightedLines) {
						node.properties['data-highlighted-lines'] = highlightedLines
					}
				}
			})
		}
	}

	// Serialize MDX content with remark and rehype plugins
	const serializedContent = await serialize(post.content, {
		mdxOptions: {
			remarkPlugins: [remarkExtractFilename],
			rehypePlugins: [
				rehypePassFilename,
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'wrap',
						properties: {
							className: ['anchor']
						}
					}
				]
			]
		}
	})

	// Format date for display
	const formattedDate = new Date(post.frontmatter.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})

	return {
		props: {
			post: {
				...post,
				frontmatter: {
					...post.frontmatter,
					date: formattedDate,
					dateISO: post.frontmatter.date // Keep original ISO date for dateTime attribute
				},
				serializedContent
			}
		}
	}
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
	return (
		<>
			<Head>
				<title>{post.frontmatter.title} | Matheus Mendes</title>
				<meta name="description" content={post.frontmatter.description} />
				<style>{`
					body {
						background-color: #f7f7f4;
					}
				`}</style>
			</Head>
			<article className="mx-auto max-w-4xl px-4 py-12 font-inter md:px-8">
				<header className="mb-8  border-b-gray-200">
					<div className="mb-4 border-b border-dotted pb-2">
						<h1 className="mb-2 text-balance text-3xl font-semibold">{post.frontmatter.title}</h1>

						<div className="flex items-center gap-2 text-sm text-[#7a7973]">
							<time className="" dateTime={post.frontmatter.dateISO || post.frontmatter.date}>
								{post.frontmatter.date}
							</time>
							<span className="text-xs text-stone-500">|</span>
							<Link href="https://x.com/whosmatu" className="text-carnelian hover:underline">
								@whosmatu
							</Link>
						</div>
					</div>
					{post.frontmatter.image && (
						<div className="relative mb-8 aspect-[7/3] w-full overflow-hidden rounded-lg">
							<img src={post.frontmatter.image} alt={post.frontmatter.title} className="size-full object-cover" />
						</div>
					)}
				</header>
				<div className="prose prose-stone max-w-none prose-headings:font-bold prose-a:text-carnelian prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-stone-200 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-transparent prose-pre:p-0">
					<MDXRemote {...post.serializedContent} components={useMDXComponents()} />
				</div>
			</article>
		</>
	)
}

export default BlogPost
