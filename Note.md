<!-- Setting up prrismaDb -->
1. firrst step is to create the database from prisma website if prisma postgres if prfferable
2. npx prisma init
3. setup your shema.prism and prisma.config.ts files to work with your db setup
4. setup your models inside the shema.prisma
5. Run npx prisma migrate --name "migration table name" to migrate yor shema to the db
6. Run npx prisma generate to generate model types that you ca use to interact with the db in your codebase