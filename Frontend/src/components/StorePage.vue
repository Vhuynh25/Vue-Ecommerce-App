<template>
    <div class="store-grid">
        <ProductCard v-for="product in products"
        v-bind:key="product.ID"
        v-bind:name="product.NAME"
        v-bind:image="product.IMAGE"
        @click="visitProduct(product.ID,product.IMAGE)"
        />
    </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue"
import {ref, onMounted} from "vue"
import {useRouter} from "vue-router"

const router = useRouter()
const products = ref([])

function visitProduct(id, image)
{
	router.push(`/product/${id}/${image}`)
}

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