<template>
    <div class="d-inline-flex">
		<div class="col-sm-9 ml-5">
        	<h1 class="text-light" id="usertext">
            	Hello, Please sign in.
        	</h1>
        	<div class="">
            	<input class="" id="name-change-box" type="text">
            	<button class="" @click="changeDisplayName()">Change display name</button>
        	</div>
		</div>
		<ShoppingCart class=""></ShoppingCart>
    </div>
</template>

<script setup>

// import { store } from "./store.js"
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth"
import ShoppingCart from "./ShoppingCart.vue"

const auth = getAuth()

function changeDisplayName()
{
	let newName = document.getElementById("name-change-box").value
	updateProfile(auth.currentUser, {displayName: newName}).then(() => {
		document.getElementById("username").innerHTML = newName
		document.getElementById("usertext").innerHTML = newName
	})
		.catch((error) => {
			//const errorCode = error.code
			const errorMessage = error.message
			alert(errorMessage)
		})
	document.getElementById("name-change-box").value = ""
}

onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		if (user.displayName)
			document.getElementById("usertext").innerHTML = user.displayName
		else
			document.getElementById("usertext").innerHTML = user.email
	} else {
		document.getElementById("usertext").innerHTML = "Hello, Please sign in." 
	}
})

</script>

<style scoped>
.profile_panel
{
    display: flex;
    flex-direction: column;
    width: 60%;
    border: 2px solid;
    margin: 14px;
    background-color: silver
}

.name_change
{
    display: flex;
    flex-direction: row;

    margin: auto;
    background-color: silver
}

.shopping_cart
{	
	margin: auto;
	padding-top: 5px;
}

.main
{
    display: flex;
    flex-direction: row;
}

</style>