import { createStore } from "vuex";

import bookStore from "./books";

const store = createStore({
  modules: {
    bookStore
  }
});

export default store;
