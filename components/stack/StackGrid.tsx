import React from 'react'
import StackCard from './StackCard'

const StackGrid: React.FC = ({}) => {
	return (
		<div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
			<div className="flex flex-col gap-3 md:gap-4">
				<div className="group rounded-md bg-amber-500 text-amber-500">
					<StackCard title="Javascript" date="2020-2022">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus assumenda dicta quisquam
						expedita porro, optio saepe nobis sint quae obcaecati.
					</StackCard>
				</div>
				<div className="group rounded-md bg-blue-600 text-blue-600">
					<StackCard title="Typescript" date="2021-2022">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga doloremque repellendus excepturi,
						deserunt quia pariatur?
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
			<div className="flex flex-col gap-3 md:gap-4">
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
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto rem voluptatibus minima hic
						obcaecati a quaerat earum optio deserunt enim!
					</StackCard>
				</div>
				<div className="group rounded-md bg-cyan-400 text-cyan-400">
					<StackCard title="Tailwind" date="2021-2022">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae porro minima ut accusamus
						nostrum voluptates accusantium dicta, sed nam. Fugit fugiat dolore reprehenderit illo?
					</StackCard>
				</div>
			</div>
			<div className="flex flex-col gap-3 md:gap-4">
				<div className="group rounded-md bg-sky-500 text-sky-500">
					<StackCard title="React" date="2021-2022">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsam praesentium nobis
						aspernatur totam. Pariatur debitis cupiditate, voluptate esse obcaecati veniam? Totam, provident
						eius!
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
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ratione sunt debitis itaque
						minus corrupti placeat excepturi? Impedit, quasi. Inventore, soluta.
					</StackCard>
				</div>
			</div>
		</div>
	)
}

export default StackGrid
