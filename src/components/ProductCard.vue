<template>
    <div class="card">
        <img class="card-img-top" :src="require(`../../public/img/${image}`)">
        <div class="card-body">
            <h1 class="card-title">
                {{name}}
            </h1>
        </div>
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