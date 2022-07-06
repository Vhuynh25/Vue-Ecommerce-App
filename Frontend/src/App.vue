<template>
  <header class="header">
  <router-link class="link" to="/login" >Login</router-link>
  <router-link class="link" to="/signup">Sign up</router-link>
  <router-link class="link" to="/store">Store</router-link>
  <router-link class="link" to="/profile">Profile</router-link>
  <h1 class="link" id="username" > </h1>
  </header>
  <router-view/>
</template>

<script setup>
// import { store } from "./components/store.js"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"

const firebaseConfig = {

	apiKey: "AIzaSyCpo10rA5Pvcuzb9VuqnDE4v3gwtt9zXQc",

	authDomain: "vue-commerce-practice.firebaseapp.com",

	databaseURL: "https://vue-commerce-practice-default-rtdb.firebaseio.com",

	projectId: "vue-commerce-practice",

	storageBucket: "vue-commerce-practice.appspot.com",

	messagingSenderId: "613627355902",

	appId: "1:613627355902:web:64f82c361aeee2f0977baf"

}
// Initialize Firebase

const app = initializeApp(firebaseConfig)


const auth = getAuth()



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		if (user.displayName)
			  document.getElementById("username").innerHTML = user.displayName
		else
			document.getElementById("username").innerHTML = user.email
	}
})

</script>

<style>
#app 
{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header
{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  margin-bottom: 50px;
}

.link
{
  font-size: 30px;
  margin: auto;
  color: white;
  padding: 10px;
}

html
{
  background-color: rgb(41, 41, 49);
}
</style>
