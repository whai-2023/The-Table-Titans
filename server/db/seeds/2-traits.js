exports.seed = function (knex) {
  return knex('traits').insert([
    { id: 11, titans_id: 1, description: '', image: '' },
    { id: 12, titans_id: 2, description: '', image: '' },
    { id: 13, titans_id: 3, description: '', image: '' },
    { id: 14, titans_id: 4, description: '', image: '' },
    { id: 15, titans_id: 5, description: '', image: '' },
    { id: 16, titans_id: 6, description: '', image: '' },
    { id: 17, titans_id: 7, description: '', image: '' },
    { id: 18, titans_id: 8, description: '', image: '' },
    { id: 19, titans_id: 9, description: '', image: '' },
    { id: 20, titans_id: 10, description: '', image: '' },
  ])
}
