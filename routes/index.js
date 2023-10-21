const express = require('express')
const routes = express.Router()
const todoRouter = require('./todo')

routes.use('/todo', todoRouter)

module.exports = routes