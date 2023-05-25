const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getTitans,
  keepScore,
}

function getUsers(db = connection) {
  return db('titans').select()
}

function getUser(id, db = connection) {
  return db('titans').where('id', id).first()
}

// titans = titans.id, titans.name
// traits = traits.id, traits.titans_id, traits.description, traits.images

function getTitans(id, db = connection) {
  return db('titans')
    .join('traits', 'titans.trait_id', 'traits.id')
    .where('titans.id', id)
    .select(
      'titans.id',
      'titans.name',
      'traits.description',
      'traits.images',
      'traits_id as traitsId'
    )
}

function keepScore(result, games) {
  let total = 0
  for (let i = 0; i < games.length; i++) {
    if (result > 0) {
      total++
    } else {
      total
    }
  }

  return total
}
