import { get_axios } from "../request/request";

export const getHotSuggestsApi = () => {
  return get_axios({
    url: '/home/hotSuggests'
  })
}