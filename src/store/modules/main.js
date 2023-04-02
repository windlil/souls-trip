import { defineStore } from "pinia";


const startDay = new Date()
const endDay = new Date()
const nowDate = new Date()
endDay.setDate(nowDate.getDate() + 1)
const useMainStore = defineStore('mainStore', {
  state: () => ({
    startDay: startDay,
    endDay: endDay,

  }),
})

export default useMainStore