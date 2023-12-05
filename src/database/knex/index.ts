import setupKnex, { type Knex } from 'knex'
import { env } from '../../env'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: {
    extension: 'ts',
    directory: './src/database/knex/migrations',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
