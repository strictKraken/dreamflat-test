## Navigation
* [GithubPages Build](https://strictkraken.github.io/dreamflat-test/)
* [Description](#description)
* [Project start and setup](#setup)

<a name="description"></a>

## Description
Library used:  
* [vuex](https://vuex.vuejs.org/) (store manager)
* vue3 + typescript framework
* [Ant Design of Vue](https://antdv.com/docs/vue/introduce) (UI components library)

Main page
 * [HomeView](https://github.com/strictKraken/dreamflat-test/blob/main/src/views/HomeView.vue) 

[Books component](https://github.com/strictKraken/dreamflat-test/tree/main/src/components/Books)  
Components: 
  * [BookList](https://github.com/strictKraken/dreamflat-test/blob/main/src/components/Books/BookList.vue)
  * [BookCard](https://github.com/strictKraken/dreamflat-test/blob/main/src/components/Books/BookCard.vue)
  * [FilterPanel](https://github.com/strictKraken/dreamflat-test/blob/main/src/components/Books/FilterPanel.vue)


  **BookList**: Компонент отображения книг , отображает сетку книг, получает из хранилища данные на вход. 

  **BookCard**: Компонент отображения одной книги.

  **FilterPanel**: Компонент для фильтрации исходных данных. При изменения жанра или сортировки срабатывают методы, которые меняют состояние флагов сортировки и фильтрации в хранилище  
  (store: флаг определяющий порядок сортировки (0 - исходный порядок, 1 - ASC, 2 DESC ). selectedGenres - выбранные жанры для фильтрации).
  
  **HomeView**: Компонент страницы, на mount происходит запрос данных, которые попадают в хранилище.


<a name="setup"></a>
## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
