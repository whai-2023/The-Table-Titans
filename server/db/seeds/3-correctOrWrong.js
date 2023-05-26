/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('correctOrWrong').del()
  await knex('correctOrWrong').insert([
    {
      id: 1,
      name: 'Cronus',
      getAnswer: false,
    },
    {
      id: 2,
      name: 'Styx',
      getAnswer: false,
    },
    {
      id: 3,
      name: 'Hecatonchires',
      getAnswer: false,
    },
    {
      id: 4,
      name: 'Eos',
      getAnswer: false,
    },
    {
      id: 5,
      name: 'Prometheus',
      getAnswer: false,
    },
    {
      id: 6,
      name: 'Rhea',
      getAnswer: false,
    },
    {
      id: 7,
      name: 'Themis',
      getAnswer: false,
    },
    {
      id: 8,
      name: 'Hyperion',
      getAnswer: false,
    },
    {
      id: 9,
      name: 'Asteria',
      getAnswer: false,
    },
    {
      id: 10,
      name: 'Atlas',
      getAnswer: false,
    },
  ])
}
