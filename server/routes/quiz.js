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

router.get('/:id', async (req, res) => {
  let id = Number(req.params.id)
  const titan = await db.getATitanById(id)
  // console.log('titan', titan)
  const template = 'quiz'
  const viewData = {
    title: 'Which Titan is it?',
    choice: pickTitans(titan?.name),
    titan,
    nextQuestion: id + 1,
  }
  res.render(template, viewData)
})

router.post('/:id/:input', async (req, res) => {
  let id = Number(req.params.id)
  const titan = await db.getATitanById(id)
  let input = req.params.input
  let correctAnswer = titan.name === input
  let realAnswer = correctAnswer ? 'Correct' : 'Incorrect'
  await db.updateAnswer(id, correctAnswer)
  const template = 'showAnswer'
  const viewData = {
    realAnswer,
    titan,
    nextQuestion: id + 1,
  }

  res.render(template, viewData)
})

module.exports = router
