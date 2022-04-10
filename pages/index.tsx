import type { NextPage } from 'next'
import Head from 'next/head'
import About from '@/components/About'
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Hero from '@/components/Hero'
import Projects from '@/components/projects'
import Stack from '@/components/stack'

interface Data {
	pinnedItems: any
	contributionsCollection: any
}

export const getStaticProps: GetStaticProps<Data> = async (context) => {
	const httpLink = createHttpLink({
		uri: 'https://api.github.com/graphql'
	})

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
			}
		}
	})

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache()
	})

	const { data } = await client.query({
		query: gql`
			{
				user(login: "imMatheus") {
					pinnedItems(first: 6) {
						totalCount
						edges {
							node {
								... on Repository {
									name
									url
									refs(refPrefix: "refs/heads/", last: 3) {
										nodes {
											target {
												... on Commit {
													history {
														totalCount
													}
												}
											}
										}
									}
									stargazerCount
									description
									primaryLanguage {
										name
										color
									}
								}
							}
						}
					}
					contributionsCollection {
						contributionCalendar {
							totalContributions
							weeks {
								firstDay
								contributionDays {
									date
									color
									contributionCount
									weekday
									contributionLevel
								}
							}
						}
					}
				}
			}
		`
	})
	const { user } = data

	const pinnedItems = user.pinnedItems.edges.map(({ node }: any) => node)
	const contributionsCollection = user.contributionsCollection.contributionCalendar

	return {
		props: {
			pinnedItems,
			contributionsCollection
		},
		revalidate: 60 * 60 * 24 // on day
	}
}

const Home: NextPage<Data> = ({ pinnedItems, contributionsCollection }) => {
	return (
		<div className="overflow--hidden h-auto border-black text-black 2xl:text-[20px]">
			<Head>
				<title>Matheus mendes</title>
				<meta name="description" content="Matheus mendes Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero pinnedItems={pinnedItems} />
			<About />
			<Stack contributionsCollection={contributionsCollection} />

			<Projects contributionsCollection={contributionsCollection} />
		</div>
	)
}

export default Home
