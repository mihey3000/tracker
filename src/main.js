import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.scss";
import "./assets/variables.scss";

export const eventBus = createApp(App)

createApp(App).mount('#app')
