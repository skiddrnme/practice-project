import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuth: true,
    user: {}
  }),
  actions: {
    setIsAuth(bool){
        this.isAuth = bool
    },
    setUser(user){
        this.user = user
    }
  },
  getters: {
    getIsAuth(){
        return this.isAuth
    },
    getUser(){
        return this.user
    }
  }
})
