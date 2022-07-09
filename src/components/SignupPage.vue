<template>
    <div class="">
        <h1 class="text-light">
            SIGN UP
        </h1>
        <form class="w-50 mx-auto">
            <div class="form-group">
                <input class="form-control" id="Name" placeholder="Username">
            </div>
            <div class="form-group">
                <input class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <button class="form-control" @click="signupUser">
            SIGN UP
        </button>
            </div>
        </form>
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
    margin: 14px;
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