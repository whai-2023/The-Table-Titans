const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/homepage')
const quizRoutes = require('./routes/quiz')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', userRoutes)
server.use('/quiz', quizRoutes)
module.exports = server
