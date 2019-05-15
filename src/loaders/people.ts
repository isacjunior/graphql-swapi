import SwapiService from '../services/swapi'
import { People } from '../types/people'

const getPeopleById = async (id: string): Promise<People> => {
  const { data } = await SwapiService.getPeopleById(id)
  return data
}

const getPeoples = async (): Promise<People[]> => {
  const { data: { results } } = await SwapiService.getPeoples()
  return results
}

export {
  getPeopleById,
  getPeoples,
}
