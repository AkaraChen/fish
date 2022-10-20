import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './router';
import './style.css';

const router = createRouter({ routes, history: createWebHashHistory() });

const app = createApp(App).use(router);
app.mount('#app');
