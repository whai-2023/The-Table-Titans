exports.seed = function (knex) {
  return knex('titans').insert([
    { id: 1, name: 'Cronus' },
    { id: 2, name: 'Rhea' },
    { id: 3, name: 'Hyperion' },
    { id: 4, name: 'Prometheus' },
    { id: 5, name: 'Oceanus' },
    { id: 6, name: 'Epimetheus' },
    { id: 7, name: 'Atlas' },
    { id: 8, name: 'Theia' },
    { id: 9, name: 'Eos' },
    { id: 10, name: 'Athena' },
  ])
}
