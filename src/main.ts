import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
//import Paginate from 'vuejs-paginate-next'
import './assets/sass/main.scss'

const Paginate = require('vuejs-paginate-next')

const app = createApp(App)

app
    .component('Paginate', Paginate)

app
    .use(store)
    .use(router)
    .mount('#app')

