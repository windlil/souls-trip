import { defineStore } from "pinia";
import { getDetailApi } from "../../services";

const useDetailStore = defineStore('detailStore', {
  state: () => ({
    detailData: {},
    picList: [],
    picGroup: {}
  }),
  actions: {
    async getDetail(id) {
      this.picList = []
      this.picGroup = {}
      const res = await getDetailApi(id)
      this.detailData = res.data
      this.picList = res.data.mainPart.topModule.housePicture.housePics
      for(let item of this.picList) {
        let array = this.picGroup[item.enumPictureCategory]
        if(!array) {
          array = []
          this.picGroup[item.enumPictureCategory] = array
        }
        array.push(item)
      }
    }
  }
})

export default useDetailStore