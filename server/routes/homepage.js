const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  const template = 'home'
  const viewData = {
    title: 'The Titans',
    quiz: 'Start Quiz!',
    header: 'The Table Titans',
    footer: '@The Table Titans Whai 2023',
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

//we need 1. keep track of the score that the users getting
// show the score page at the end
//add go back home button\
//add next q button
// show descriptions and images

module.exports = router
