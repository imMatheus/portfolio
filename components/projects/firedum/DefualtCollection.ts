import { CollectionType } from './FirebaseTypes'

export const defaultCollections: CollectionType = {
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
				name: 'Hypertext Assassins',
				members: ['"aa"', '"bb"', '"yy"']
			}
		},
		{
			id: '05c1Y2w',
			fields: {
				name: 'Callback Cats',
				members: ['"aa"', '"yy"']
			}
		}
	]
}
