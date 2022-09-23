import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './router';

const router = createRouter({ routes, history: createWebHashHistory() });

const app = createApp(App).use(router);
app.mount('#app');
