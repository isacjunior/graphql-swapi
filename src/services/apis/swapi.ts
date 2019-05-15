import axios from 'axios'

const SwapiApi = axios.create({
  baseURL: 'https://swapi.co/api',
})

export default SwapiApi
