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
function signupUser()
{
    const email = document.getElementById("Email").value
    const password = document.getElementById("Password").value
    const name = document.getElementById("Name").value

    console.log(name + " " + password + " " + email)
    
    fetch(`http://localhost:3000/users?email="${email}"&username="${name}"&pass="${password}"`,     
    {
        method: 'POST',
        headers:
        {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
    })
    .then(window.location.href = "#/login")
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