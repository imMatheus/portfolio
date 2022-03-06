import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import StackCard from '@/components/StackCard'
import About from '@/components/About'
import Firedum from '@/components/Firedum'

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

			<div className="relative h-[300vh] w-screen">
				<section className="sticky top-0 h-screen w-screen bg-blurple text-7xl">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, laudantium.
				</section>
				<section className="sticky top-0 h-screen w-screen bg-yellow p-10 text-7xl">
					<h2 className="text-7xl font-bold">What do i know?</h2>
				</section>
				<section className="sticky top-0 h-screen w-screen overflow-hidden bg-green p-10 font-bold">
					<h2 className="text-7xl font-bold">LucioCode 01</h2>
				</section>
				<Firedum />
			</div>

			<section className="h-screen bg-blurple"></section>
		</div>
	)
}

export default Home
