import { get_axios } from "../request/request";

export const getDetailApi = (houseId) => {
  return get_axios({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}