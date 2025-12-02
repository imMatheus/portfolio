import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
	slug: string
	frontmatter: {
		title: string
		date: string
		description: string
		image?: string
	}
}

interface BlogProps {
	posts: BlogPost[]
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
	if (posts.length === 0) {
		return null
	}

	return (
		<section className="bg-gray-50 py-12 md:py-16">
			<div className="mx-auto max-w-7xl px-4 md:px-8">
				<h2 className="mb-8 text-3xl font-bold md:text-4xl">Blog</h2>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{posts.map((post) => {
						const slug = post.slug
						const formattedDate = new Date(post.frontmatter.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})

						return (
							<Link
								key={slug}
								href={`/blog/${slug}`}
								className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg"
							>
								<div className="mb-2 text-sm text-gray-500">{formattedDate}</div>
								<h3 className="mb-2 text-xl font-bold text-black transition-colors group-hover:text-blue-600">
									{post.frontmatter.title}
								</h3>
								<p className="line-clamp-3 text-gray-600">{post.frontmatter.description}</p>
								{post.frontmatter.image && (
									<div className="relative mt-4 h-48 w-full overflow-hidden rounded-md">
										<Image
											src={post.frontmatter.image}
											alt={post.frontmatter.title}
											fill
											className="object-cover transition-transform group-hover:scale-105"
										/>
									</div>
								)}
							</Link>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Blog
