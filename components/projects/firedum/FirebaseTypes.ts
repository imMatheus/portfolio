export interface UsersType {
	id: string
	fields: {
		name: string
		email: string
		email_verified: boolean
	}
}

export interface ChatsType {
	id: string
	fields: {
		name: string
		members: string[]
	}
}

export type CollectionType = {
	users: UsersType[]
	chats: ChatsType[]
}
