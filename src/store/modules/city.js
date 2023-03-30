import { defineStore } from "pinia";
import { getAllCityApi } from '../../services/index'

const useCityStore = defineStore('city', {
  state: () => ({
    allCityData: {},
    currentCity: {
      cityName: '广州'
    }
  }),
  actions: {
    async getAllCityData() {
      if(Object.keys(this.allCityData).length === 0) {
        const res = await getAllCityApi()
        this.allCityData = res.data
      }
    }
  }
})

export default useCityStore