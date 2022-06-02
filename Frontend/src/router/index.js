import { createRouter, createWebHistory } from "vue-router"
import LoginPage from "../components/LoginPage.vue"
import NotFound from "../components/NotFound.vue"
import StorePage from "../components/StorePage.vue"
import SignupPage from "../components/SignupPage.vue"
import ProfilePage from "../components/ProfilePage.vue"
import ProductPage from "../components/ProductPage.vue"

const routes = [
	{
		path: "/login",
		name: "LoginPage",
		component: LoginPage
	},
	{
		path: "/store", 
		name: "StorePage",
		component: StorePage
	},
  
	{
		path: "/signup",
		name: "SignupPage",
		component: SignupPage
	},
	{
		path: "/product/:id/:image",
		name: "ProductPage",
		component: ProductPage,
		props: true
	},
	{
		path: "/profile",
		name: "ProfilePage",
		component: ProfilePage
	},
	{
		path: "/notfound",
		name: "NotFound",
		component: NotFound
	}
]

const router = createRouter(
	{
		history: createWebHistory(process.env.BASE_URL),
		routes
	})

export default router