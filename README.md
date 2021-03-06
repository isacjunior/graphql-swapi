## SWAPI API GraphQL

Este repositório faz parte do artigo publicado em meu medium https://medium.com/@isacjunior

## GraphiQL - Heroku

https://graphql-swapi-ts.herokuapp.com/

### Descrição

É um simples middleware em GraphQL que utiliza os recursos da api SWAPI https://swapi.co/ como fonte de dados. A aplicação foi feita utilizando Typescript e algumas ferramentas do GraphQL para facilitar a leitura e a manutenção.

### Estrutura
```
├── src
│   ├── loaders           # Responsável por buscar e tratar as informações vindas de uma fonte de dados
│   ├── resolvers         # Estes são os responsáveis por resolver e coletar as informações dos loaders
│   ├── services          # Parte responsável por integrar com serviços externos, ex: api's
│   ├── types             # Armazena os tipos do graphql e do typescript
├── index.ts              # Contém as configurações do nosso web framework e do middleware graphql
├── schema.ts             # Schema contendo a junção dos types e resolvers
└── typeDefs.ts           # Pra facilitar a escrita de tipos em .graphql
```

### Scripts

```json
"dev": "nodemon src/index.ts", // Executa a nossa aplicação em modo de desenvolvimento
"type:check": "tsc --noEmit", // Faz a verificação dos tipos em typescript
"copy:types": "cpx 'src/types/*.graphql' build/types", // Precisamos copiar nossos arquivos .graphql ao buildar
"clean:build": "rm -rf build", // Deleta a pasta `build`
"build": "yarn clean:build && tsc && yarn copy:types", // Realiza o build da nossa aplicação em `build`
"start": "node build/index.js" // Executa a nossa aplicação em produção
```

### Start
Instale as dependências:
```shell
yarn install
```

Inicie o projeto
```shell
yarn dev
```

Abra o GraphiQL
http://localhost:3000/graphql