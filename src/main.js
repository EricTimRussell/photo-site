import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire } from 'vuefire'
import { firebaseApp } from '@/firebase.js'
import App from './App.vue'
import router from './router'
import './assets/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.use(VueFire, {
  firebaseApp,
  modules: [],
})
