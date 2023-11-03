const Todo = require('../models/todoModel');

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description });

    res.status(200).json({
      status: true,
      data: todo,
      message: 'Todo Item created Successfully',
    });
  } catch (err) {
    console.log('Error Occured while creating a Todo Item ' + err);
    res.status(500).json({
      status: false,
      message: 'Error Occured while creating Todo Item',
    });
  }
};

module.exports = createTodo;
