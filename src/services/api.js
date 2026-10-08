import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '4b30603f35b3b09c7e84998e1f73b6b8',
    language: 'pt-BR',
    page: 1,
  },
})

export default api
