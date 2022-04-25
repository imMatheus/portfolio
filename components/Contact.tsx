import React from 'react'
import Image from 'next/image'
import { GitHub, Linkedin, Instagram } from 'react-feather'

const Contact: React.FC = ({}) => {
	return (
		<div className="mx-auto flex max-w-7xl flex-col items-center gap-3 p-4 sm:py-6 sm:px-8 md:flex-row md:justify-center md:gap-6">
			<div className="relative h-52 w-52 flex-shrink-0 md:h-72 md:w-72">
				<Image
					src="/profile-square.jpeg"
					className="rounded-full"
					layout="fill"
					objectFit="cover"
					alt="headshot"
				/>
			</div>
			<div className="max-w-[50ch]">
				<h3 className="text-4xl font-bold 2xl:text-5xl">Get in touch!</h3>
				<p className="mt-2 mb-4 text-base 2xl:text-lg">Feel free to send me a message</p>
				<div className="flex gap-4">
					<a href="https://github.com/imMatheus" target="_blank" rel="noreferrer">
						<GitHub className="h-5 w-5 cursor-pointer 2xl:h-6 2xl:w-6" />
					</a>
					<a href="https://www.linkedin.com/in/matheus-mendes-447993228/" target="_blank" rel="noreferrer">
						<Linkedin className="h-5 w-5 cursor-pointer 2xl:h-6 2xl:w-6" />
					</a>

					
				</div>
			</div>
		</div>
	)
}

export default Contact
