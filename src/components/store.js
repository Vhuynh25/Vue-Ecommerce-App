import {reactive} from "vue"

export const store = reactive({
	userEmail: null,
	shoppingCart: [],
	setShoppingList(list)
	{
		this.shoppingCart = list
	},
	pushShoppingList(itemId)
	{
		this.shoppingCart.push(itemId)
	},
	setUsername(email)
	{
		this.userEmail = email
	}
})
