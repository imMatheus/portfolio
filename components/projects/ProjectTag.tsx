import React from 'react'

interface ProjectTagProps {
	isWork: boolean
}

const ProjectTag: React.FC<ProjectTagProps> = ({ isWork }) => {
	return isWork ? (
		<span className="ml-1 inline-block -translate-y-0.5 border border-dotted border-amber-600 bg-amber-200 px-2 py-0.5 text-[9px] leading-none text-amber-900">
			Work
		</span>
	) : (
		<span className="ml-1 inline-block -translate-y-0.5 border border-dotted border-blue-600 bg-blue-200 px-2 py-0.5 text-[9px] leading-none text-blue-900">
			Sideproject
		</span>
	)
}

export default ProjectTag
