<template>
    <div class="product-card">
        <img class="product-picture" :src="require(`../../public/img/${image}`)">
        <h1 class="product-name">
            {{name}}
        </h1>
    </div>
</template>

<script setup>
import {defineProps} from "vue"

defineProps(["image", "name"])

</script>

<style>
.product-card
{
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: white;
    padding: 10px;
}

.product-picture
{
    max-width: 100%;
    max-height: 200px;
}

.product-name
{
    color: black;
}
</style>