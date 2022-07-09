/* eslint-disable indent */
/* eslint-disable no-mixed-spaces-and-tabs */
<template>
    <div class="">
        <h1 class="text-light">
            LOGIN
        </h1>
        <form class="w-50 mx-auto">
            <div class="form-group">
                <input class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <button class="form-control" @click="loginUser">
                    LOGIN
                </button>
            </div>
        </form>
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
    margin: 14px;
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