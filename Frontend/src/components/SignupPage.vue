<template>
    <div class="signup_panel">
        <h1>
            SIGN UP
        </h1>
        <input class="input" id="Name" placeholder="Username">
        <input class="input" id="Email" placeholder="Email">
        <input type="password" class="input" id="Password" placeholder="Password">
        <button class="login_button" @click="signupUser">
            SIGN UP
        </button>
    </div>
</template>

<script setup>
//import { store } from './store.js'
import {useRouter} from "vue-router"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

const router = useRouter()

function signupUser()
{
	const email = document.getElementById("Email").value
	const password = document.getElementById("Password").value
	const name = document.getElementById("Name").value

	console.log(name + " " + password + " " + email)
    
	const auth = getAuth()
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user
			updateProfile(auth.currentUser, {
				displayName: name,})
				.catch((error) => {
					const errorMessage = error.message
			        console.log(errorMessage)
				})

			console.log(user.email)
			router.push("/profile")
		})
		.catch((error) => {
			//const errorCode = error.code
			const errorMessage = error.message
			console.log(errorMessage)
		})
	
}

</script>

<style scoped>
.signup_panel
{
    display: flex;
    flex-direction: column;
    width: 60%;
    border: 2px solid;
    margin: auto;
    background-color: silver
}

.input
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