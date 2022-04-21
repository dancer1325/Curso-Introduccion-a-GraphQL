# How has the project been created?
* `npm init -y`
* `npm install env-cmd`
    * Passing environment variables via '.env' file
* `npm install --save-dev nodemon`
* `npm install apollo-server`
* `npm install graphql`
* `npm install graphql-type-datetime`
* `npm install graphql-tools`
* `npm install install`
  * Handle the 'require' and 'exports'

# How to run?
* `npm install`
* `npm run dev`
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
* 'Queries' folder
  * Folder to store our queries
    * 1 query / file
  * It will allow us triggering queries, based on the plugin downloaded in our IDE
