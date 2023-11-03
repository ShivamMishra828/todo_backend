const Todo = require('../models/todoModel');

const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.status(200).json({
      status: true,
      data: todo,
      message: 'All Todo fetched Successfully',
    });
  } catch (error) {
    console.log('Error Occured while fetching all Todos' + error);
    res.status(500).json({
      status: false,
      message: 'Error Occured while fetching all Todos',
    });
  }
};

const getTodoById = async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findById(todoId);
    res.status(200).json({
      status: true,
      data: todo,
      message: 'Todo fetched Successfully',
    });
  } catch (error) {
    console.log('Error Occured while fetching Todo by ID');
    res.status(500).json({
      status: false,
      message: 'Error Occured while fetching Todo by ID',
    });
  }
};

module.exports = { getAllTodo, getTodoById };
