import React from 'react'

function Text() {
	return (
		<div className="relative transition-transform hover:rotate-3 even:hover:-rotate-3">
			<span className="absolute -bottom-2 -right-2 h-full w-full rounded-md border border-blurple bg-fuchsia transition-all"></span>
			<span className="absolute -bottom-1 -right-1 h-full w-full rounded-md border border-blurple bg-fuchsia transition-all"></span>
			<h2 className="relative rounded-md border border-blurple bg-fuchsia px-1 font-serif text-5xl text-blurple md:text-7xl">
				Projects
			</h2>
		</div>
	)
}

function Column() {
	return (
		<div className="flex rotate-6 gap-4 even:-rotate-6">
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
			<Text />
		</div>
	)
}

const ProjectsText: React.FC = ({}) => {
	return (
		<section className="sticky top-0 h-screen w-screen overflow-hidden bg-fuchsia font-bold">
			<div className="relative flex h-screen flex-col items-center justify-center gap-4 p-1">
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
				<Column />
			</div>
		</section>
	)
}

export default ProjectsText
