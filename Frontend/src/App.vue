<template>
  <header class="header">
  <a class="link" href="#/login">Login</a>
  <a class="link" href="#/signup">Sign up</a>
  <a class="link" href="#/store">Store</a>
  <a class="link" href="#/profile">Profile</a>
  </header>
  <component :is="currentView"  />
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import LoginPage from './components/LoginPage.vue'
import NotFound from './components/NotFound.vue'
import StorePage from './components/StorePage.vue'
import SignupPage from './components/SignupPage.vue'
import ProfilePage from './components/ProfilePage.vue'
import { ref } from 'vue'


const routes = 
{
  '/login': LoginPage,
  '/store': StorePage,
  '/signup': SignupPage,
  '/profile': ProfilePage,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => 
{
  currentPath.value = window.location.hash
})

const currentView = computed(() => 
{
  return routes[currentPath.value.slice(1) || '/'] || NotFound
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
