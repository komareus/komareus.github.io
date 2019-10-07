import axios from 'axios'
import api from './api'

export default async () => {
  try {
    const { data } = await axios.get(api.news.newsIndexList)
    return data.map(item => item.name.split('.')[0])
  } catch (err) {
    console.error(err)
  }
}
