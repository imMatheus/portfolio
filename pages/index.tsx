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
	const contributionsCollection = user.contributionsCollection.contributionCalendar

	return {
		props: {
			contributionsCollection
		}
		// revalidate: 60 * 60 * 24 // on day
	}
}

const Home: NextPage<Data> = ({ contributionsCollection }) => {
	return (
		<div>
			<Head>
				<title>Matheus mendes</title>
				<meta name="description" content="Matheus mendes Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			<About />
			<Stack contributionsCollection={contributionsCollection} />

			<Projects contributionsCollection={contributionsCollection} />
			<section className="min-h-screen bg-blurple"></section>
		</div>
	)
}

export default Home
