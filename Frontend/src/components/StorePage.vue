<template>
    <div class="store-grid">
        <ProductCard v-for="product in products"
        v-bind:key="product.ID"
        v-bind:name="product.NAME"
        v-bind:image="product.IMAGE"
        />
    </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import {ref, onMounted} from 'vue'

const products = ref([])

onMounted(async () => {
    let response = await fetch("http://localhost:3000/products")
    if (response.ok)
    {
        products.value = await response.json()
    }
    else 
    {
        console.log(response.status)
    }
})

</script>

<style>
.store-grid
{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>