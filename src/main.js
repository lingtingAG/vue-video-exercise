import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vue3videoPlay from "vue3-video-play"; // 引入组件
import "vue3-video-play/dist/style.css"; // 引入css

let app = createApp(App);
app.use(vue3videoPlay);
app.mount('#app');
