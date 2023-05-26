const { default: knex } = require('knex')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('correctOrWrong', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.boolean('getAnswer')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('correctOrWrong')
}
