import data from "@/mock/data.json";

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
      commit("set", data);
    }
  },
  getters: {
    getBooks(state) {
      const { selectedGenres, sort } = state;
      return state.books
        .filter((item) => {
          if (selectedGenres.length === 0) return true;
          return selectedGenres.includes(item.genre);
        })
        .sort((a, b) => {
          // console.log('sort', a,b)
          if (sort === 0) return 0;
          if (sort === 1) return a - b;
          if (sort === 2) return b - a;
        });
    }
  }
};

export default bookStore;
