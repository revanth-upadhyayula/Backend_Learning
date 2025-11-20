const express = require('express');
const {getTodos, createTodos }= require('../../controllers/getTodos.controller');
const { createValidator } = require('../../validators/todo.validator');
const router = express.Router();

router.get('/', getTodos);
router.post('/', createValidator, createTodos)

module.exports=router;