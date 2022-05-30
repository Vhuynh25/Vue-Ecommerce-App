import {reactive} from 'vue'

export const store = reactive({
    username: null,
    setUsername(name)
    {
        this.username = name
    }
})
