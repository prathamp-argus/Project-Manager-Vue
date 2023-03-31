import { createApp } from 'vue'
import App from './App.vue'
import router from "./router.js"
import store from "./store/index.js"

import BaseSpinner from "./ui/BaseSpinner.vue"
import BaseButton from "./ui/BaseButton.vue"
import BaseCard from "./ui/BaseCard.vue"


const app = createApp(App)
app.use(router)
app.use(store)

// app.component(BaseSpinner)
app.component('BaseSpinner',BaseSpinner)
app.component('BaseCard',BaseCard)
app.component('BaseButton',BaseButton)


app.mount('#app')
