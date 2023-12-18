import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./stores";

import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(router);
app.use(store, key);

app.mount("#app");
