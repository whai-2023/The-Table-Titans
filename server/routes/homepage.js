const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  const template = 'home'
  const viewData = {
    title: 'The Titans',
    quiz: 'Start Quiz!',
  }

  res.render(template, viewData)

  // db.getUsers()
  //   .then((users) => {
  //     res.render('home', { users: users })
  //   })
  //   .catch((err) => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
})

module.exports = router
