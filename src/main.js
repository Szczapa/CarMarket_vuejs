import './assets/main.css';
import axios from 'axios';

import {createApp} from 'vue';
import App from './App.vue';
import router from './router/router.js';

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.withCredentials = true;

app.use(router);
app.mount('#app');
