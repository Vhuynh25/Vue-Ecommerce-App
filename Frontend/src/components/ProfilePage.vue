<template>
    <div class="profile_panel">
        <h1 >
            Hello {{store.username}}
        </h1>
    </div>
</template>

<script setup>

import { store } from "./store.js"


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