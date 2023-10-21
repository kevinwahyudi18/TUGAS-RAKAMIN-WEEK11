const express = require('express');
const routes = express.Router();
const TodoController = require('../controller/todoController')

routes.get('/', TodoController.getAll)
routes.get('/:id',TodoController.getOne)
routes.post('/', TodoController.create)
routes.put('/:id', TodoController.update)
routes.delete('/:id', TodoController.delete)

module.exports = routes