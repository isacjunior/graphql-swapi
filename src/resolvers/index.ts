import { mergeResolvers } from 'merge-graphql-schemas'
import people from './people'

const resolvers = mergeResolvers([
  people,
])

export default resolvers
