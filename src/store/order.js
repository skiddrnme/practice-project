import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    orders: [],
    orderPrice: 0
  }),
  actions: {
    addOrder(newOrder) {
      this.orders.push(newOrder)
      this.orderPrice += newOrder.price
    },
    removeOrder(order) {
      this.orders.filter((item) => item.id !== order.id)
    },

  }
})
