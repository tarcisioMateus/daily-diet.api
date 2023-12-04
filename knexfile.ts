import { Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './src/database/database.db',
  },
  migrations: {
    extension: 'ts',
    directory: './src/database/knex/migrations',
  },
  useNullAsDefault: true,
}
