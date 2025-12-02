import fs from 'fs'
import path from 'path'
import fm from 'front-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export interface BlogPostFrontmatter {
	title: string
	date: string
	description: string
	image?: string
}

export interface BlogPost {
	slug: string
	frontmatter: BlogPostFrontmatter
	content: string
}

/**
 * Convert a title to a URL-friendly slug
 */
export function slugify(title: string): string {
	return title
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '') // Remove special characters
		.replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
		.replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

/**
 * Get all blog post slugs
 */
export function getPostSlugs(): string[] {
	if (!fs.existsSync(postsDirectory)) {
		return []
	}
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.filter((name) => name.endsWith('.mdx')).map((name) => name.replace(/\.mdx$/, ''))
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.mdx`)
		if (!fs.existsSync(fullPath)) {
			return null
		}
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const { attributes: data, body: content } = fm<BlogPostFrontmatter>(fileContents)

		// Ensure date is always a string (front-matter may parse YAML dates as Date objects)
		const dateValue = (data as any).date
		const dateString =
			dateValue instanceof Date
				? dateValue.toISOString().split('T')[0] // Convert Date to YYYY-MM-DD format
				: String(dateValue || '')

		const imageValue = (data as any).image
		const frontmatter: BlogPostFrontmatter = {
			title: String((data as any).title || ''),
			date: dateString,
			description: String((data as any).description || ''),
			...(imageValue && { image: String(imageValue) })
		}

		return {
			slug,
			frontmatter,
			content
		}
	} catch (error) {
		console.error(`Error reading post ${slug}:`, error)
		return null
	}
}

/**
 * Get all blog posts, sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
	const slugs = getPostSlugs()
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		.filter((post): post is BlogPost => post !== null)
		.sort((a, b) => {
			const dateA = new Date(a.frontmatter.date).getTime()
			const dateB = new Date(b.frontmatter.date).getTime()
			return dateB - dateA // Newest first
		})

	return posts
}

/**
 * Get slug from title (for URL generation)
 */
export function getSlugFromTitle(title: string): string {
	return slugify(title)
}
