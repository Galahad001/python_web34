import { createApp } from 'vue'
import './style.css'
import components from "./components/UI"
import App from './App.vue'
import router from '../router'

const app = createApp(App)


components.forEach(component => {
    app.component(component.name, component)
});

app.use(router)

app.mount('#app')
