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
  getATitanById: getATitanById,
  updateAnswer: updateAnswer,
  getUser: getUser,
  getUsers: getUsers,
  getTitans,
  keepScore,
}

async function getATitanById(id, db = connection) {
  return (
    db('Titans')
      .where({ id })
      //you get first object coming through instead of an array.
      .first()
      //choosing what cols we want to see
      .select()
  )
}

function updateAnswer(id, updatingAnswer, db = connection) {
  return (
    db('correctOrWrong')
      //table 1 titans
      //table 2 correctOrWrong
      //column 1 correctOrWrong.id
      // column 2 correctOrWrong.name
      .where({ id })
      .update({ getAnswer: updatingAnswer })
  )
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

// function getUser(id, db = connection) {
//   return db('users').where('id', id).first()
// }
