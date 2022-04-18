import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

createApp(App)
    .use(PrimeVue)
    .use(createPinia())
    .mount('#app')