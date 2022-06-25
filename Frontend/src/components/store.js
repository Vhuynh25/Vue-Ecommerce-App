import {reactive} from "vue"

export const store = reactive({
	user: null,
	setUsername(user)
	{
		this.user = user
	}
})
