import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: '',
    points: 0
  }),
  getters: {
    upperCaseName: state => state.name.toUpperCase()
  },
  actions: {
    setName (newName: string) {
      this.name = newName
    },
    addPoints (amount: number) {
      this.points += amount
    }
  }
})
