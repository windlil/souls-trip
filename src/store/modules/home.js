import { defineStore } from "pinia";
import { getHotSuggestsApi, getCategoriesApi, getHomeListApi } from '@/services/index'


const useHomeStore = defineStore('homeStore', {
  state: ()=> ({
    hotSuggests: [],
    categories: [],
    homeList: []
  }),
  actions: {
    async getHotSuggests() {
      const res = await getHotSuggestsApi()
      this.hotSuggests = res.data
    },
    async getCategories() {
      const res = await getCategoriesApi()
      this.categories = res.data
    },
    async getHomeList() {
      const res = await getHomeListApi()
      this.homeList = res.data
    }
  }
})

export default useHomeStore