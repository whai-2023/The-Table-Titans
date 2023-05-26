const express = require('express')
const db = require('../db/db')
// const { path } = require('../server')

const router = express.Router()

router.get('/:id', async (req, res) => {
  const template = 'quiz'
  const titans = await db.getTitans()
  const titanId = req.params.id
  const titanIndex = titanId - 1
  let difference = 0
  //const titanObject = titans.find(titan => titan.id === titannpm Id);
  console.log('hi: ', titans[titanIndex]['answer'])
  console.log('hi: ', titanIndex)
  console.log('image: ', titans[titanIndex].image)
  const viewData = {
    image: titans[titanIndex].image,
    name: titans[titanIndex].name,
    options: [
      titans[titanIndex]['answer'],
      titans[(titanIndex + 1) % titans.length]['answer'],
      titans[(titanIndex + 2) % titans.length]['answer'],
      titans[(titanIndex + 3) % titans.length]['answer'],
    ],
  }
  res.render(template, viewData)
})

router.post('/:id', async (req, res) => {
  const titanId = req.params.id
  res.redirect('/:answer')
})

function getRandomInt(number) {}

module.exports = router
// '../public/cronus.png'
