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
import {ref as vueRef, onMounted} from "vue"
import {useRouter} from "vue-router"

import { getDatabase, ref as dbRef, get, child} from "firebase/database"

const router = useRouter()
const products = vueRef([])

const db = dbRef(getDatabase())

function visitProduct(id, image)
{
	router.push(`/product/${id}/${image}`)
}

onMounted(async () => {
	get(child(db, "products")).then((snapshot) => {
		if (snapshot.exists()) {
			products.value = snapshot.val()
		} else {
			console.log("No data available")
		}
	}).catch((error) => {
		console.error(error)
	})
})

</script>

<style>
.store-grid
{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>