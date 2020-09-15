<template>
	<div>
		<h5>{{ title }} <span class="badge badge-info">{{ users.length }}</span></h5>
		<div class="card">
			<div class="card-body">
				<ul class="list-group">
					<li class="list-group-item" v-for="user in users" v-bind:key="user.id">
						<div class="row">
							<div class="col-md">
								{{ user.firstName }}
							</div>
							<div class="col-md text-right">
								<button class="btn btn-info" v-on:click="deleteItem(user)"><span class="fa fa-trash"></span></button>
							</div>
						</div>
					</li>
				</ul>
				<br/>
				<div class="input-group">
					<input class="form-control" type="text" 
					v-model="firstName"
					
					
					 v-on:keyup.enter="addItem(type, firstName)" placeholder="Digite o item"/>
					<div class="input-group-append">
						<button class="btn btn-info" v-on:click="addItem(type, firstName)"><span class="fa fa-plus"></span></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UserList",
	props: ["title", "type", "users", "user"],
	data() {
		return {
			description: "",
			firstName: "",
		};
	},
	methods: {
		addItem(type, firstName) {
			this.$emit("addItem", {
				type,
				
				firstName,
				
			});
			this.description = "";
			this.firstName = "";
		},
		deleteItem(user) {
			this.$emit("deleteItem", user);
		}
	}
};
</script>

<style scoped>
</style>
