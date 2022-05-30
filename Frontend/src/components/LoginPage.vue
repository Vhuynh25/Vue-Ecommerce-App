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
import { store } from './store.js'

function loginUser()
{
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    fetch("http://localhost:3000/users?email=" + email + "&pass=" + password,     
    {
        method: 'GET',
        headers:
        {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
    }).then(res => 
    { 
        if (res.status == 200) 
        {
            res.json().then(data => 
            {
                console.log(data.USERNAME)
                store.setUsername(data.USERNAME)
            })
        }
    })
    .then(res => console.log(res))
    .then(window.location.href = "#/profile")
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