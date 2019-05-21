import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const application = express()

application.use('/', graphqlHTTP({
  schema,
  graphiql: true,
}))

const port = process.env.PORT || 3000

application.listen(port, (): void => {
  console.log(`🚀 Server ready at ${port}`)
})
