const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

/*function randomiseOptions(titans) {
  const randomizeTitans = [...titans]
  for (let i = randomizeTitans.length - 1; i > 0; i--) {
    const x = (Math.floor(Math.random() * (i + 1))[
      (randomizeTitans[i], randomizeTitans[x])
    ] = [randomizeTitans[x], randomizeTitans[i]])
  }
  return randomizeTitans
}
console.log(randomiseOptions())*/

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getTitans,
}

function getUsers(db = connection) {
  return db('users').select()
}

function getUser(id, db = connection) {
  return db('users').where('id', id).first()
}

function getTitans(db = connection) {
  return db('Titans').select('Titans.*')
}
