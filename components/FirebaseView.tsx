import React, { useEffect, useState } from 'react'
import { Home, ChevronRight, Database, Server, File } from 'react-feather'
import FirebaseListItem from './FirebaseListItem'
import faker from 'faker'

interface FirebaseViewProps {}

const FirebaseView: React.FC<FirebaseViewProps> = ({}) => {
	interface UsersType {
		id: string
		fields: {
			name: string
			email: string
			email_verified: boolean
		}
	}

	interface ChatsType {
		id: string
		fields: {
			name: string
			members: string[]
		}
	}

	type CollectionType = {
		users: UsersType[]
		chats: ChatsType[]
	}

	const defaultCollections: CollectionType = {
		users: [
			{
				id: 'klk4gdf',
				fields: {
					name: 'adam roble',
					email: 'adam@roble.com',
					email_verified: true
				}
			},
			{
				id: 'fqh3jjx',
				fields: {
					name: 'nali sitaki',
					email: 'nalisitaki@yahoo.com',
					email_verified: false
				}
			},
			{
				id: 'dhzVilE',
				fields: {
					name: 'Yones Harki',
					email: 'yonny@gmail.com',
					email_verified: true
				}
			}
		],
		chats: [
			{
				id: '4K0UKpB',
				fields: {
					name: 'Titanic swim team 🏊🏻‍♂️',
					members: ['"aa"', '"bb"', '"yy"']
				}
			},
			{
				id: '05c1Y2w',
				fields: {
					name: '9/11 flight crew ✈️',
					members: ['"aa"', '"yy"']
				}
			}
		]
	}

	const [collections, setCollections] = useState(defaultCollections)
	const [selectedCollection, setSelectedCollection] = useState<'chats' | 'users'>('users')
	const [selectedDoc, setSelectedDoc] = useState<ChatsType | UsersType>(collections[selectedCollection][0])

	function addDocs() {
		setCollections({ users: { ...collections.users }, chats: { ...collections.chats } })
	}

	useEffect(() => {
		setSelectedDoc(collections[selectedCollection][0])
	}, [selectedCollection, collections])

	return (
		<div className="flex h-[20rem] flex-col rounded-md border border-black bg-white shadow">
			<div className="flex flex-shrink-0 gap-2 border-b border-black p-4 font-normal">
				<Home className="h-5 w-5" />
				<ChevronRight className="h-5 w-5" />
				<span className="text-sm">{selectedCollection}</span>
				<ChevronRight className="h-5 w-5" />
				<span className="text-sm">{selectedDoc.id}</span>
			</div>
			<div className="grid flex-1 grid-cols-4 grid-rows-1 overflow-hidden">
				<div className="border-r border-r-black/20">
					<div className="flex items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<Database className="h-4 w-4 flex-shrink-0" />
						<p className="text-sm font-light">Your database</p>
					</div>
					<ul className="overflow-y-scroll">
						<FirebaseListItem
							selected={selectedCollection === 'chats'}
							onClick={() => setSelectedCollection('chats')}
						>
							chats
						</FirebaseListItem>
						<FirebaseListItem
							selected={selectedCollection === 'users'}
							onClick={() => setSelectedCollection('users')}
						>
							users
						</FirebaseListItem>
					</ul>
				</div>
				<div className="flex flex-col border-r border-r-black/20">
					<div className="flex flex-grow-0 items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<Server className="h-4 w-4 flex-shrink-0" />
						<p className="text-sm font-light">{selectedCollection}</p>
					</div>
					<ul className="h-full overflow-y-scroll">
						{collections[selectedCollection]
							.sort((a, b) => (a.id.toLowerCase() > b.id.toLowerCase() ? 1 : -1))
							.map((doc) => (
								<FirebaseListItem
									onClick={() => setSelectedDoc(doc)}
									selected={selectedDoc.id === doc.id}
									key={doc.id}
								>
									{doc.id}
								</FirebaseListItem>
							))}
					</ul>
				</div>
				<div className="col-span-2 flex flex-col">
					<div className="flex items-center gap-2 border-b border-black/20 bg-gray-100/60 py-3 px-4">
						<File className="h-4 w-4 flex-shrink-0" />
						<p className="text-ellipsis text-sm font-light">{selectedDoc.id}</p>
					</div>
					<ul className="space-y-2 overflow-y-scroll p-4">
						{console.log(Object.keys(selectedDoc.fields))}
						{Object.keys(selectedDoc.fields).map((field) => {
							// @ts-ignore
							const value = selectedDoc.fields[field]
							return (
								<li key={field} className="text-xs font-normal text-black/70 md:text-sm lg:text-base">
									{field}:
									<span className="ml-2 text-black">
										{typeof value === 'string'
											? `"${value}"`
											: Array.isArray(value)
											? `[${value.join(', ')}]`
											: value + ''}
									</span>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FirebaseView
