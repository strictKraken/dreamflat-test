import data from "@/mock/data.json";
import { convertData } from "./helpers";
import type { Book } from "@/components/Books/type";

const bookStore = {
  state: () => ({
    books: [],
    genres: [
      "Fiction",
      "Classic",
      "Dystopian",
      "Magical Realism",
      "Fantasy",
      "Psychological Fiction",
      "Adventure",
      "Gothic",
      "Historical Fiction",
      "Epic Poetry",
      "Post-Apocalyptic",
      "Horror",
      "Philosophical Fiction",
      "Non-Fiction"
    ],
    // 0 - sort off, 1 - sort ASC, 2 - sort DESC
    sort: 0,
    selectedGenres: []
  }),
  mutations: {
    set(state, payload) {
      state.books = [...payload];
    },
    setSort(state, sortType: number) {
      state.sort = sortType;
    },
    setFilter(state, genres: string[]) {
      state.selectedGenres = [...genres];
    }
  },
  actions: {
    fetchBooks({ commit }) {
      const response: any[] = data;
      const dataConverted = convertData(response);
      commit("set", dataConverted);
    }
  },
  getters: {
    getBooks(state) {
      const { selectedGenres, sort, books } = state;

      const sortedArray = [...books].sort((a: Book, b: Book) => {
        if (!a.publishedDate) return 1;
        if (!b.publishedDate) return -1;
        if (sort === 1) return b.publishedDate.getTime() - a.publishedDate.getTime();
        if (sort === 2) return a.publishedDate.getTime() - b.publishedDate.getTime();
        return 0;
      });

      return sortedArray.filter((item) => {
        if (selectedGenres.length === 0) return true;
        return selectedGenres.includes(item.genre);
      });
    }
  }
};

export default bookStore;
