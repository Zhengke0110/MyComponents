import { createApp } from "vue";
import "./global-style.css";
import App from "./App.vue";


import { createPinia } from "pinia";
import router from "./router";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";


// 检查并应用暗色模式
const darkModePreference = localStorage.getItem('darkMode');
if (darkModePreference === 'true' || 
    (!darkModePreference && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
}

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).use(router).mount("#app");
