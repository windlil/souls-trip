import { defineStore } from "pinia";
import { getHotSuggestsApi } from '@/services/index'


const useHomeStore = defineStore('homeStore', {
  state: ()=> ({
    hotSuggests: []
  }),
  actions: {
    async getHotSuggests() {
      const res = await getHotSuggestsApi()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore