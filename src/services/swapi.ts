import SwapiApi from './apis/swapi'
import { AxiosPromise } from 'axios'
import { People, Peoples } from '../types/people'

const SwapiService = {
  getPeopleById: (id: string): AxiosPromise<People> => SwapiApi.get(`/people/${id}`),
  getPeoples: (): AxiosPromise<Peoples> => SwapiApi.get('/people'),
}

export default SwapiService
