import { defineStore } from "pinia";
import { getHotSuggestsApi, getCategoriesApi, getHomeListApi } from '@/services/index'


const useHomeStore = defineStore('homeStore', {
  state: ()=> ({
    hotSuggests: [],
    categories: [],
    homeList: [],
    page: 1
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
      const res = await getHomeListApi(this.page)
       this.homeList.push(...res.data)
      this.page++
    }
  }
})

export default useHomeStore