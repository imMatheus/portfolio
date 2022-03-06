import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import StackCard from '@/components/StackCard'
import About from '@/components/About'
import Firedum from '@/components/Firedum'
import Stack from '@/components/Stack'
import { GetStaticProps } from 'next'
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

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

			<main>
				<header className="w-max-[50ch] mx-auto mb-10 p-6 lg:py-20">
					<h1 className="text-4xl font-thin">
						Lorem <span className="font-medium text-blurple">Matheus Mendes</span> sit amet consectetur
						adipisicing elit. Aliquid magnam consequatur dolorum?
					</h1>
				</header>

				<h2 className="mb-5 text-center text-3xl">Some of my projects</h2>
				<section className="mx-auto mb-12 grid max-w-[85rem] grid-cols-1 justify-center gap-6 bg-blue-600/0 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
					<StackCard title="LucioCode">
						A website that aims to simplified all aspects of teaching code in classrooms
					</StackCard>
					<StackCard title="Firedum">NPM package to help populate a firebase database with data</StackCard>
					<StackCard title="LucioCode">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus inventore numquam itaque.
					</StackCard>
					<StackCard title="LucioCode">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci.
					</StackCard>
					<StackCard title="LucioCode">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci.
					</StackCard>
				</section>
			</main>

			<About />

			<div className="relative min-h-[400vh] w-screen">
				<Stack contributionsCollection={contributionsCollection} />
				<section className="sticky top-0 min-h-screen w-screen overflow-hidden bg-green p-10 font-bold">
					<h2 className="text-7xl font-bold">LucioCode 01</h2>
				</section>
				<Firedum />
				<section className="sticky top-0 min-h-screen w-screen overflow-hidden bg-red p-10 font-bold">
					<h2 className="text-7xl font-bold">Design skills 03</h2>
				</section>
			</div>

			<section className="min-h-screen bg-blurple"></section>
		</div>
	)
}

export default Home
