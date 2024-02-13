import { createApp } from 'vue'
import App from './App.vue'
import store from '@/components/store/index';

const app = createApp(App);
// createApp(App).mount('#app')

app.use(store);

app.mount('#app');