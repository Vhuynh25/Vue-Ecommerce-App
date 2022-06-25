<template>
    <div class="profile_panel">
        <h1 id="usertext">
            Hello, Please sign in.
        </h1>
    </div>
</template>

<script setup>

// import { store } from "./store.js"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const auth = getAuth()

onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		document.getElementById("usertext").innerHTML = "Hello " + user.email
	} else {
		document.getElementById("username").innerHTML = "Hello, Please sign in." 
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

</style>