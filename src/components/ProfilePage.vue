<template>
    <div class="main">
		<div class="profile_panel">
        <h1 id="usertext">
            Hello, Please sign in.
        </h1>
        <div class="name_change">
            <input class="name_change-box" id="name-change-box" type="text">
            <button class="name_change_button" @click="changeDisplayName()">Change display name</button>
        </div>
		</div>
		<ShoppingCart class="shopping_cart"></ShoppingCart>
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
    margin: auto;
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