import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary()
    table.uuid('user_id').references('id').inTable('users').index()

    table.text('name').notNullable()
    table.text('description').notNullable()
    table.text('date').notNullable()
    table.text('time').notNullable()
    table
      .enum('on_diet', ['true', 'false'], {
        useNative: true,
        enumName: 'on_diet',
      })
      .notNullable()
      .defaultTo('true')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals')
}
