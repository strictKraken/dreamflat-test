import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import bookStore from "./books";

export interface State {}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    bookStore
  }
});

export function useStore() {
  return baseUseStore(key);
}
