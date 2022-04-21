# How has the project been created?
* `npm init -y`
* `npm install env-cmd`
    * Passing environment variables via '.env' file
* `npm install --save-dev nodemon`
* `npm install apollo-server`
* `npm install graphql`
* `npm install graphql-type-datetime`
* `npm install graphql-tools`


# How to run?
* `npm install`
* `npm run dev`
  * Problems:
    * Problem 0: 'Failed to find .env file at default paths:'
      * Solution: Create an '.env' file although it's not used at all
    * Problem1: ' "Query" defined in resolvers, but not in schema'
      * Solution: It's necessary to add 'type Query' in the '.gql' schema, but that will be fixed in next module
* `npm run dev:noenv`
  * Start up, without needing an '.env' file

# Notes
* 'graphql'
    * JS implementation for GraphQL
* 'https://studio.apollographql.com/sandbox/explorer'
    * Navigate to this url in your browser
    * Your apollo server is hosted in that url
    * You can execute the queries against GraphQL schema defined
* 'typeDefs.gql'
    * Define the graphql schema, but in this module, we don't use it yet
* 'graphql-type-datetime'
    * DateTime scalar type for GraphQL.js, following the ISO 8601 format.
* 'graphql-tools'
  * Set of tools to help to work with graphql

