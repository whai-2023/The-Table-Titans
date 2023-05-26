const express = require('express')

const db = require('../db/db')

const router = express.Router()
const path = require('node:path')
const fs = require('node:fs/promises')

const allTitans = [
  'Cronus',
  'Styx',
  'Atlas',
  'Hecatonchires',
  'Asteria',
  'Eos',
  'Hyperion',
  'Themis',
  'Prometheus',
  'Rhea',
]

function pickTitans(realTitan) {
  let titans = ['Themis', 'Prometheus', 'Rhea'] //pick random titans
  titans.push(realTitan)
  return titans.sort((a, b) => 0.5 - Math.random())
}

router.get('/question/:id', async (req, res) => {
  let id = req.params.id
  const titan = await db.getATitanById(id)
  console.log('titan', titan)
  const template = 'quiz'
  const viewData = {
    title: 'Which Titan is it?',
    choice: pickTitans(titan?.name),
    titan,
  }
  res.render(template, viewData)
})

router.post('/question/:id/:input', async (req, res) => {
  let id = req.params.id
  const titan = await db.getATitanById(id)
  let input = req.params.input
  let correctAnswer = titan.name === input
  await db.updateAnswer(id, correctAnswer)
  const template = 'showAnswer'
  const viewData = {
    correctAnswer,
    titan,
  }

  res.render(template, viewData)
})

module.exports = router
