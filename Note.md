<!-- Setting up prrismaDb -->
1. firrst step is to create the database from prisma website if prisma postgres if prfferable
2. npx prisma init
3. setup your shema.prism and prisma.config.ts files to work with your db setup
4. setup your models inside the shema.prisma
5. Run npx prisma migrate --name "migration table name" to migrate yor shema to the db
6. Run npx prisma generate to generate model types that you ca use to interact with the db in your codebase

<!-- Setting up prisma client to seed the files  -->
1. I had to change the configuration to bring in the databaseUrl from .env
2. I had to change the configuration to use the latest configuratio of prisma client which utlises pg-adapter and pool
3. "seed:movies": "node --env-file=.env prisma/seed.js" Load the environment variables: If your seed script runs directly via Node (node prisma/seed.js), Node won't load .env files automatically unless you tell it to. If your package.json script looks like node prisma/seed.js, change it to look like this to natively preload your environment variables: