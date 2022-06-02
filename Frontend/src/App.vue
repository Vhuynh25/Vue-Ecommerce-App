<template>
  <header class="header">
  <router-link class="link" to="/login">Login</router-link>
  <router-link class="link" to="/signup">Sign up</router-link>
  <router-link class="link" to="/store">Store</router-link>
  <router-link class="link" to="/profile">Profile</router-link>
  </header>
  <router-view/>
</template>

<script setup>
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
