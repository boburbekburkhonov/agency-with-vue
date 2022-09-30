import { createApp } from 'vue'
import App from './App.vue'
import Components from './components/UI'

const app = createApp(App)

Components.forEach(item => {
  app.component(item.name, item)
})

app.mount('#app')
