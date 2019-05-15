import { getPeopleById, getPeoples } from '../loaders/people'
import { People } from '../types/people'

interface Param {
  id: string,
}

export default {
  Query: {
    people: (_: any, { id }: Param): Promise<People> => getPeopleById(id),
    peoples: (): Promise<People[]> => getPeoples(),
  },
}
