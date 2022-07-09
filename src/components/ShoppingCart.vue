<template>
	<div class="col-sm-2 h-10">
    	<div class="products">
        <ProductCard v-for="product in products"
        v-bind:key="product.id"
        v-bind:name="product.name"
        v-bind:image="product.image"
        @click="visitProduct(product.id)"
        />
    	</div>
		<button class="clear_button" @click="clearShoppingCart()">Clear Shopping Cart</button>
	</div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue"
import {ref as vueRef, onMounted} from "vue"
import {useRouter} from "vue-router"
import {store} from "./store"

import { getDatabase, ref as dbRef, get, child} from "firebase/database"

const router = useRouter()
const products = vueRef([])

const db = dbRef(getDatabase())

function visitProduct(id)
{
	router.push(`/product/${id}`)
}
///
function clearShoppingCart()
{
	products.value = []
	store.setShoppingList([])
	localStorage.clear()
}

onMounted(async () => {
	// get list of item ids from cookies
	let ids = localStorage.getItem("shopping-cart").split(",")
	get(child(db, "Products")).then((snapshot) => {
		if (snapshot.exists() && Array.isArray(ids)) {
			snapshot.forEach((product) => {
				if(ids.includes(product.val().id.toString())){
			        products.value.push(product.val())
				}
			})
		} else {
			alert(Array.isArray(ids))
		}
	}).catch((error) => {
		alert(error)
	})
	// alert(products.value)
})

</script>

<style>
.products
{
	margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.clear_button
{
	margin-top: 10px;
	margin-bottom: 10px;
}

.shopping_cart
{
	display: flex;
    flex-direction: column;
	margin: 14px;
}

</style>