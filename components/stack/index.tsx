import React from 'react'
import ContributionView from './ContributionView'
import StackCard from './StackCard'

interface Props {
	contributionsCollection: any
}

const Stack: React.FC<Props> = ({ contributionsCollection }) => {
	return (
		<section className="min-h-screen w-screen bg-white p-5 md:p-10">
			<h2 className="mb-3 text-5xl font-bold lg:text-7xl">What do i know?</h2>

			<div className="my-10 grid grid-cols-2 gap-3 py-4 lg:grid-cols-3">
				<div className="flex flex-col gap-3">
					<div className="group rounded-md bg-amber-500 text-amber-500">
						<StackCard title="Javascript" date="2020-2022">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda dicta quisquam
							expedita porro, optio saepe nobis sint quae obcaecati.
						</StackCard>
					</div>
					<div className="group rounded-md bg-blue-600 text-blue-600">
						<StackCard title="Typescript" date="2021-2022">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga doloremque repellendus
							excepturi, deserunt quia pariatur?
						</StackCard>
					</div>
					<div className="group rounded-md bg-rose-600 text-rose-600">
						<StackCard title="HTML" date="2019-2022">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nostrum voluptates nesciunt qui
							saepe facere ipsam similique voluptate, exercitationem doloremque tenetur consequatur?
						</StackCard>
					</div>
					<div className="group rounded-md bg-fuchsia text-fuchsia">
						<StackCard title="Sass/Scss" date="2020-2022">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nostrum voluptates nesciunt qui
							saepe facere ipsam similique voluptate, exercitationem doloremque tenetur consequatur?
						</StackCard>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div className="hidden"></div>
					<div className="group rounded-md bg-sky-400 text-sky-400">
						<StackCard title="CSS" date="2019-2022">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam possimus consequuntur?
						</StackCard>
					</div>
					<div className="group rounded-md bg-green-500 text-green-500">
						<StackCard title="Mongo DB" date="2021-2022">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, dolorem.
						</StackCard>
					</div>
					<div className="group rounded-md bg-orange-500 text-orange-500">
						<StackCard title="Firebase" date="2021-2022">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto rem voluptatibus minima
							hic obcaecati a quaerat earum optio deserunt enim!
						</StackCard>
					</div>
					<div className="group rounded-md bg-cyan-400 text-cyan-400">
						<StackCard title="Tailwind" date="2021-2022">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae porro minima ut accusamus
							nostrum voluptates accusantium dicta, sed nam. Fugit fugiat dolore reprehenderit illo?
						</StackCard>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div className="group rounded-md bg-sky-500 text-sky-500">
						<StackCard title="React" date="2021-2022">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsam praesentium nobis
							aspernatur totam. Pariatur debitis cupiditate, voluptate esse obcaecati veniam? Totam,
							provident eius!
						</StackCard>
					</div>
					<div className="group rounded-md bg-[#000] text-white">
						<StackCard title="Next.js" date="2021-2022">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat autem alias fugit
							accusamus!
						</StackCard>
					</div>
					<div className="group rounded-md bg-rose-700 text-rose-700">
						<StackCard title="NPM" date="2021-2022">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nostrum voluptates nesciunt qui
							saepe facere ipsam similique voluptate, exercitationem doloremque tenetur consequatur?
						</StackCard>
					</div>
					<div className="group rounded-md bg-lime-500 text-lime-500">
						<StackCard title="Node" date="2021-2022">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ratione sunt debitis
							itaque minus corrupti placeat excepturi? Impedit, quasi. Inventore, soluta.
						</StackCard>
					</div>
				</div>
			</div>

			<div className="h-10 w-max bg-carnelian">
				<svg viewBox="0 0 55 31" className="h-full w-max text-slate-900">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
						fill="#38bdf8"
					></path>
				</svg>
			</div>

			<ContributionView contributionsCollection={contributionsCollection} />
		</section>
	)
}

export default Stack
