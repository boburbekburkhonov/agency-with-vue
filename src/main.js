import { createApp } from 'vue'
import App from './App.vue'
import Components from './components/UI'
import { CAlert } from '@coreui/vue';

const app = createApp(App)

Components.forEach(item => {
  app.component(item.name, item)
})

app.mount('#app')
