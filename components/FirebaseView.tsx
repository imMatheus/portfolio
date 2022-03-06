import React from 'react'
import { Home, ChevronRight, Database, Server, File } from 'react-feather'
import FirebaseListItem from './FirebaseListItem'

interface FirebaseViewProps {}

const FirebaseView: React.FC<FirebaseViewProps> = ({}) => {
	return (
		<div className="flex flex-col overflow-hidden rounded-md border border-black bg-white shadow">
			<div className="flex gap-2 border-b border-black p-4 font-normal">
				<Home className="h-5 w-5" />
				<ChevronRight className="h-5 w-5" />
				<span className="text-sm">classes</span>
				<ChevronRight className="h-5 w-5" />
				<span className="text-sm">4K0UKpB05c1Y2dhzVilE</span>
			</div>
			<div className="grid max-h-[20rem] flex-grow-0 grid-cols-3 grid-rows-1">
				<div className="border-r border-r-black/20">
					<div className="flex items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<Database className="h-4 w-4 flex-shrink-0" />
						<p className="text-sm font-light">Your database</p>
					</div>
					<ul className="overflow-y-scroll">
						<FirebaseListItem>chats</FirebaseListItem>
						<FirebaseListItem selected>classes</FirebaseListItem>
						<FirebaseListItem>users</FirebaseListItem>
					</ul>
				</div>
				<div className=" border-r border-r-black/20">
					<div className="flex items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<Server className="h-4 w-4 flex-shrink-0" />
						<p className="text-sm font-light">classes</p>
					</div>
					<ul className="h-full overflow-y-scroll">
						<FirebaseListItem>chats</FirebaseListItem>
						<FirebaseListItem>users</FirebaseListItem>
						<FirebaseListItem>users</FirebaseListItem>
						<FirebaseListItem>users</FirebaseListItem>
						<FirebaseListItem>users</FirebaseListItem>
						<FirebaseListItem>users</FirebaseListItem>
						<FirebaseListItem>users</FirebaseListItem>
						<FirebaseListItem selected>classes</FirebaseListItem>
						<FirebaseListItem>friends</FirebaseListItem>
					</ul>
				</div>
				<div>
					<div className="flex items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<File className="h-4 w-4 flex-shrink-0" />
						<p className="text-ellipsis text-sm font-light">4K0UKpB05c1Y2dhzVilE</p>
					</div>
					<ul className="overflow-y-scroll">
						<FirebaseListItem>chats</FirebaseListItem>
						<FirebaseListItem selected>classes</FirebaseListItem>
						<FirebaseListItem>users</FirebaseListItem>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FirebaseView
