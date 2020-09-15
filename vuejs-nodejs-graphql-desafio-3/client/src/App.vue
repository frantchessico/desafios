<template>
	<div>
		<div id="slogan" class="text-center">
			<h1>User Manger</h1>
			<br/>
			<h6 class="text-secondary">Desafio 3 Vue.js, GraphQL e Node</h6>
		</div>
		<div id="main">
			<UserRequirement></UserRequirement>
		</div>
	</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import UserRequirement from "./components/UserRequirement";

export default {
	name: "app",
	components: {
		UserRequirement
	}
};
</script>

<style>
#slogan {
	margin-top: 30px;
	margin-bottom: 30px;
}
#main {
	background-color: #F1F1F1;
	padding-top: 30px;
	padding-bottom: 30px;
}
</style>
