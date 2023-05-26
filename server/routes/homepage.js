const express = require('express')
const path = require('node:path')
const db = require('../db/db')
// const { path } = require('../server')

const router = express.Router()

router.get('/', async (req, res) => {
  const titans = await db.getTitans()
  console.log(titans)
  const template = 'home'
  const viewData = {
    title: 'The Titans',
    quiz: 'Start Quiz!',
    image: '/atlas.png',
    header: 'The Table Titans',
    footer: '@The Table Titans Whai 2023',
  }
  console.log(viewData.image)

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
// '../public/cronus.png'
