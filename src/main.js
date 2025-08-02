import { createApp } from 'vue'
import App from './App.vue'
import EventBus from './utils/EventBus'
window.EventBus = EventBus
createApp(App).mount('#app')
