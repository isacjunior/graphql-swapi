import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const application = express()

application.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

application.listen(3000)
