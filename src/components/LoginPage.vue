/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
    <div class="login_panel">
        <h1>
            LOGIN
        </h1>
        <input class="email_input" id="email" placeholder="Email">
        <input type="password" class="password_input" id="password" placeholder="Password">
        <button class="login_button" @click="loginUser">
            LOGIN
        </button>
    </div>
</template>

<script setup>

import { store } from "./store.js"
import {useRouter} from "vue-router"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"


const router = useRouter()

function loginUser()
{
	const email = document.getElementById("email").value
	const password = document.getElementById("password").value

	const auth = getAuth()
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			// const user = userCredential.user
			router.push("/profile")
		})
		.catch((error) => {
			//const errorCode = error.code
			const errorMessage = error.message
			alert(errorMessage)
		})

}

</script>

<style scoped>
.login_panel
{
    display: flex;
    flex-direction: column;
    width: 60%;
    border: 2px solid;
    margin: auto;
    background-color: silver
}

.email_input
{
    width: 70%;
    height: 30px;
    margin: auto;
    margin-bottom: 30px;
}

.password_input
{
    width: 70%;
    height: 30px;
    margin: auto;
    margin-bottom: 30px;
}

.login_button
{
    width: 70%;
    height: 30px;
    margin: auto;
    margin-bottom: 30px;
}

</style>