import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Image from 'next/image'
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

	// Custom remark plugin to extract filename from code block meta
	// Supports syntax like: ```typescript filename.ts
	const remarkExtractFilename = () => {
		return (tree: any) => {
			visit(tree, 'code', (node: any) => {
				if (node.meta) {
					// Meta string contains the filename (e.g., "filename.ts" or "title=filename.ts")
					const meta = node.meta.trim()
					// Extract filename from meta (could be just filename or "title=filename")
					const filenameMatch = meta.match(/(?:title=)?(.+)/)
					if (filenameMatch) {
						node.data = node.data || {}
						node.data.hProperties = node.data.hProperties || {}
						node.data.hProperties['data-filename'] = filenameMatch[1]
					}
				}
			})
		}
	}

	// Custom rehype plugin to pass filename from code to pre element
	const rehypePassFilename = () => {
		return (tree: any) => {
			visit(tree, 'element', (node: any) => {
				if (node.tagName === 'pre' && node.children?.[0]?.tagName === 'code') {
					const codeNode = node.children[0]
					const filename = codeNode.properties?.['data-filename']
					if (filename) {
						node.properties = node.properties || {}
						node.properties['data-filename'] = filename
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
			</Head>
			<article className="mx-auto max-w-4xl px-4 py-12 font-inter md:px-8">
				<header className="mb-8  border-b-gray-200">
					<div className="mb-4 border-b border-dotted pb-2">
						<h1 className="mb-4 text-xl font-bold md:text-5xl">{post.frontmatter.title}</h1>

						<div className="flex items-center gap-2 text-sm text-stone-700">
							<time className="" dateTime={post.frontmatter.dateISO || post.frontmatter.date}>
								{post.frontmatter.date}
							</time>
							<span className="text-xs text-stone-500">|</span>
							<Link href="https://x.com/whosmatu" className="text-carnelian hover:font-bold">
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
				<div className="prose prose-stone max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-carnelian prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-pre:bg-transparent prose-pre:p-0">
					<MDXRemote {...post.serializedContent} components={useMDXComponents()} />
				</div>
			</article>
		</>
	)
}

export default BlogPost
