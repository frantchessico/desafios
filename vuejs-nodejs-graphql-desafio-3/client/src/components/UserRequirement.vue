<template>
	<div class="container">
		<div class="row">
			<div class="col-md">
				<UserList title="Users" type="user" v-bind:users="users.user" v-on:addItem="addItem" v-on:deleteItem="deleteItem"></UserList>
			</div>
			
		</div>
		<br/>
		
	</div>
</template>

<script>
import axios from "axios/dist/axios";
import UserList from "./UserList";

export default {
	name: "app",
	components: {
		UserList
	},
	data: function () {
		return {
			users: {
				user: [],
				suffix: []
			}
		};
	},
	methods: {
		addItem(user) {
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
					query: `
						mutation ($user: ItemInput) {
							newItem: saveItem(user: $user) {
								id
								type
								description,
								firstName
							}
						}
					`,
					variables: {
						
						user
					}
				}
			}).then(response => {
				const query = response.data;
				
				const newItem = query.data.newItem;
				this.users[user.type].push(newItem);
			});
		},
		deleteItem(item) {
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
					query: `
						mutation ($id: Int) {
							deleted: deleteItem(id: $id)
						}
					`,
					variables: {
						id: item.id
					}
				}
			}).then(() => {
				this.getUsers(item.type);
			});
		},
		getUsers(type) {
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
					query: `
						query ($type: String) {
							users: users (type: $type) {
								id
								type
								description
								firstName
								lastName
								email
							}
						}
					`,
					variables: {
						type
					}
				}
			}).then(response => {
				const query = response.data;
				this.users[type] = query.data.users;
			});
		}
	},
	computed: {
		domains() {
			console.log("generating domains...");
			const domains = [];
			for (const user of this.users.user) {
				for (const suffix of this.users.suffix) {
					const name = user.firstName + suffix.firstName;
					const url = name.toLowerCase();
					const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`;
					domains.push({
						name,
						checkout
					});
				}
			}
			return domains;
		}
	},
	created() {
		this.getUsers("user");
		this.getUsers("suffix");
	}
};
</script>

<style>
</style>
