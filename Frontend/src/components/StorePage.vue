<template>
    <div class="store-grid">
        <ProductCard v-for="product in products"
        v-bind:key="product.id"
        v-bind:name="product.name"
        v-bind:image="product.image"
        @click="visitProduct(product.id)"
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
	router.push(`/product/${id}`)
}

onMounted(async () => {
	get(child(db, "Products")).then((snapshot) => {
		if (snapshot.exists()) {
			products.value = snapshot.val()
		} else {
			alert("No data available")
		}
	}).catch((error) => {
		alert(error)
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