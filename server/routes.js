const express = require('express')
const db = require('./db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  const titans = await db.getAllTitans()
  console.log(titans)
  const template = 'home'
  const viewData = {
    title: 'Here comes the TITANS',
    heading: 'Do you know us?',
    titans,
  }
  res.render(template, viewData)
})

// router.get('/:id', async (req, res) => {
//   le
// })

module.exports = router
