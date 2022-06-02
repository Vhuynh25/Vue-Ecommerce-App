<template>
    <div class="product-panel">
        <p id="description">
        </p>
        <div>
            <h1 id="name" class="product-name">
            </h1>
            <h2 id="price">
            </h2>
        </div>
        <img id="image" class="product-picture" :src="require(`../../public/img/${image}`)">
    </div>
</template>

<script setup>
import { defineProps, onMounted} from "vue"

const props = defineProps(["id", "image"])

onMounted(async () => {
    
	let response = await fetch("http://localhost:3000/products?id=" + props.id)
	if (response.ok)
	{
		let row = await response.json()
		document.getElementById("name").innerHTML = row.NAME
		document.getElementById("price").innerHTML = row.PRICE
		document.getElementById("description").innerHTML = row.DESCRIPTION
	}
	else 
	{
		console.log(response.status)
	}
})
</script>

<style scoped>
.product-panel
{
    display: flex;
    flex-direction: column-reverse;
    width: 50%;
    border: 2px solid;
    margin-left: auto;
    margin-right: auto;
    background-color: silver;
    height: 500px;
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

</style>