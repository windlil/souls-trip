import { get_axios } from "../request/request";

export const getHotSuggestsApi = () => {
  return get_axios({
    url: '/home/hotSuggests'
  })
}

export const getCategoriesApi = () => {
  return get_axios({
    url: '/home/categories'
  })
}

export const getHomeListApi = () => {
  return get_axios({
    url: '/home/houselist',
    params: {
      page: 1
    }
  })
}