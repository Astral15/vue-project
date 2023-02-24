import { createApp } from "vue";
import App from "./App.vue";

import Store from './store'
import "./assets/main.css";
import router from "./router";


createApp(App)
  .use(router)
  .use(Store)
  .mount("#app");
