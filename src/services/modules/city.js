import { get_axios } from '../request/request'

export const getAllCityApi = () => {
  return get_axios({
    url: '/city/all'
  })
}

