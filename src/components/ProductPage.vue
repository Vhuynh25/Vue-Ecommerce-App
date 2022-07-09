<template>
    <div class="product-panel">
        <p id="description" class="product-description">
        </p>
        <div class="product-buying">
            <h2 id="price" class="product-price">
            </h2>
            <button class="buy-button" @click="addToShoppingCart()">Add to Cart</button>
        </div>
        <h1 id="name" class="product-name">
        </h1>
        <img id="image" class="product-picture">
    </div>
</template>

<script setup>
import {store} from "./store"
import { defineProps, onMounted} from "vue"
import { getDatabase, ref as dbRef, get, child} from "firebase/database"

const props = defineProps(["id"])
const db = dbRef(getDatabase())

function addToShoppingCart()
{
	store.pushShoppingList(props.id)
	localStorage.setItem("shopping-cart", store.shoppingCart)
	alert(localStorage.getItem("shopping-cart"))
}

onMounted(async () => {
	get(child(db, `Products/${props.id}`)).then((snapshot) => {
		if (snapshot.exists()) {
			document.getElementById("name").innerHTML = snapshot.val().name
		    document.getElementById("price").innerHTML = `$${snapshot.val().price}`
			document.getElementById("description").innerHTML = snapshot.val().description
			document.getElementById("image").src = `${process.env.BASE_URL}img/${snapshot.val().image}`
		} else {
			alert("No data available")
		}
	}).catch((error) => {
		alert(error)
	})
})
</script>

<style scoped>
.product-panel
{
    display: flex;
    flex-direction: column-reverse;
    width: 40%;
    border: 2px solid;
    margin: 14px;
    background-color: silver;
    height: 400px;
}

.product-picture
{
    margin: auto;
    flex-grow: 1;
    max-width: 70%;
    flex-shrink: 0;
}

.product-name
{
    color: black;
}

.product-description
{
    margin: auto;
    color: black;
}

.product-price
{
    margin: auto;
    color: black;
}

.product-buying
{
    display: flex;
    flex-direction: row;
    margin: auto;
    height: 400px;
    justify-content: space-between;
    width: 50%;
}

.buy-button
{
    min-width: 80px;
    min-height: 40px;
    margin: auto;
}

</style>