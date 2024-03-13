import { defineStore } from 'pinia'

export const useBookStore = defineStore('books', {
  state: () => ({
    books: [
      {
        id: 1,
        img:
          'https://content.img-gorod.ru/nomenclature/27/550/2755010.jpg?width=304&height=438&fit=bounds',
        name: 'Война и мир',
        price: 2000
      },
      {
        id: 2,
        img:
          'https://content.img-gorod.ru/nomenclature/28/377/2837797.jpg?width=304&height=438&fit=bounds',
        name: 'Ревизор',

        price: 1500
      },
      {
        id: 3,
        img:
          'https://content.img-gorod.ru/nomenclature/29/723/2972394.jpg?width=304&height=438&fit=bounds',
        name: 'Медный всадник',

        price: 1500
      }
    ],
    author: [
      {
        id: 1,
        name: 'Лев Толстой'
      },
      {
        id: 2,
        name: 'Роберто Боланьо'
      },
      {
        id: 3,
        name: 'Роберто Боланьо'
      }
    ],
    categories: [
      {
        id: 1,
        name: 'Роман'
      },
      {
        id: 2,
        name: 'Комедия'
      },
      {
        id: 3,
        name: 'Эпос'
      }
    ],
    isBooksLoading: false,
    selectedSort: '',
    searchQuery: '',
    selectedCategory: {},
    options: [
      { value: 'name', name: 'По названию' },
      { value: 'author', name: 'По авторам' }
    ]
  }),

  getters: {
    searchAndSortedBooks(state) {
      return [...state.books]
        .filter((book) => book.name.toLowerCase().includes(state.searchQuery.toLowerCase()))
        .sort((book1, book2) => book1[state.selectedSort]?.localeCompare(book2[state.selectedSort]))
    },
    categorySort() {
      return this.selectedCategory
    }
    
  },

  actions: {
    addBook(newBook){
      this.books.push(newBook)
    },
    removeBook(book){
      this.books.filter((item) => item.id !== book.id)
    },
    setSelectedCategory(selectedCategory){
      this.selectedCategory = selectedCategory
    }
  },

  mutations: {
    setBooks(state, books) {
      state.books = books
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    
  },
  
})
