import { users } from '../db/datas';

export const resolvers = {
	Query: {
		users(_, args) {
			console.log(args)
			return users.filter(item => item.user === args.user);
		}
	},
	Mutation: {
		saveItem(_, args) {
			const user = args.user;
			user.id = Math.floor(Math.random() * 1000);
			users.push(user);
			return user;
		},
		deleteItem(_, args) {
			const id = args.id;
			const user = users.find(user => user.id === id);
			if (!user) return false;
			users.splice(users.indexOf(user), 1);
			return true;
		}
	}
};