import { defineStore } from 'pinia'

export const useBookStore = defineStore('books', {
  state: () => ({
    books: [
      {
        id: 1,
        imgSrc:
          'https://content.img-gorod.ru/nomenclature/30/224/3022442-3.jpg?width=310&height=500&fit=bounds',
        bookTitle: 'Дикие сыщики',
        author: 'Роберто Боланьо',
        price: 1500
      },
      {
        id: 2,
        imgSrc:
          'https://content.img-gorod.ru/nomenclature/27/550/2755010.jpg?width=310&height=500&fit=bounds',
        bookTitle: 'Война и мир',
        author: 'Лев Толстой',
        price: 2000
      },
      {
        id: 3,
        imgSrc:
          'https://content.img-gorod.ru/nomenclature/27/550/2755010.jpg?width=310&height=500&fit=bounds',
        bookTitle: 'Война и мир',
        author: 'Лев Толстой',
        price: 2000
      },
      {
        id: 4,
        imgSrc:
          'https://content.img-gorod.ru/nomenclature/27/550/2755010.jpg?width=310&height=500&fit=bounds',
        bookTitle: 'Война и мир',
        author: 'Лев Толстой',
        price: 2000
      },
      {
        id: 5,
        imgSrc:
          'https://content.img-gorod.ru/nomenclature/27/550/2755010.jpg?width=310&height=500&fit=bounds',
        bookTitle: 'Война и мир',
        author: 'Лев Толстой',
        price: 2000
      }
    ],
    isBooksLoading: false,
    selectedSort: '',
    searchQuery: '',
    options: [
      { value: 'bookTitle', name: 'По названию' },
      { value: 'author', name: 'По авторам' }
    ]
  }),

  getters: {
    searchAndSortedBooks(state) {
      return [...state.books]
        .filter((book) => book.bookTitle.toLowerCase().includes(state.searchQuery.toLowerCase()))
        .sort((book1, book2) => book1[state.selectedSort]?.localeCompare(book2[state.selectedSort]))
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
    }
  }
})
