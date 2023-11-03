const express = require('express');
const router = express.Router();

const createTodo = require('../controllers/createTodo');
const { getAllTodo, getTodoById } = require('../controllers/getTodo');
const updateTodo = require('../controllers/updateTodo');
const deleteTodo = require('../controllers/deleteTodo');

router.post('/createTodo', createTodo);
router.get('/getTodo', getAllTodo);
router.get('/getTodo/:todoId', getTodoById);
router.put('/updateTodo/:todoId', updateTodo);
router.delete('/deleteTodo/:todoId', deleteTodo);

module.exports = router;
