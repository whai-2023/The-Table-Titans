const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getATitanById: getATitanById,
  updateAnswer: updateAnswer,
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

// function getUser(id, db = connection) {
//   return db('users').where('id', id).first()
// }
