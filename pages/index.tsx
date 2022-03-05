import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import StackCard from '@/components/StackCard'
import About from '@/components/About'

const Home: NextPage = () => {
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
					<StackCard>LucioCode</StackCard>
					<StackCard>LucioCode</StackCard>
					<StackCard>Firedum</StackCard>
					<StackCard>Firedum</StackCard>
					<StackCard>LucioCode</StackCard>
				</section>
			</main>

			<About />

			<div className="relative h-[300vh] w-screen">
				<section className="sticky top-0 h-screen w-full bg-blurple"></section>
				<section className="sticky top-0 h-screen w-full bg-yellow"></section>
				<section className="sticky top-0 h-screen w-full bg-red"></section>
			</div>

			<section className="h-screen bg-blurple"></section>
		</div>
	)
}

export default Home
