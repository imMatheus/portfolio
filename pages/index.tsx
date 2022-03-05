import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import StackCard from '@/components/StackCard'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Matheus Mendes Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header className="mx-auto mb-10 w-max p-8 lg:py-20">
					<h1 className="max-w-[50ch] px-10 text-4xl font-thin">
						Lorem <span className="font-medium text-blurple">Matheus Mendes</span> sit amet consectetur
						adipisicing elit. Aliquid magnam consequatur dolorum?
					</h1>
				</header>

				<h2 className="mb-5 text-center text-3xl">Projects</h2>
				<section className="mx-auto mb-12 grid max-w-[85rem] grid-cols-1 justify-center gap-6 bg-blue-600/0 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
					<StackCard>LucioCode</StackCard>
					<StackCard>LucioCode</StackCard>
					<StackCard>Firedum</StackCard>
					<StackCard>Firedum</StackCard>
					<StackCard>LucioCode</StackCard>
				</section>
			</main>

			{/* <div className="relative h-[200vh] w-screen">
				<section className="sticky top-0 h-screen w-full bg-blurple"></section>
				<section className="sticky top-0 h-screen w-full bg-yellow"></section>
			</div>

			<section className="h-screen bg-blurple"></section> */}
		</div>
	)
}

export default Home
