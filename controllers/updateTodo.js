const Todo = require('../models/todoModel');

const updateTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      { _id: todoId },
      { title, description },
      { new: true }
    );

    res.status(200).json({
      status: true,
      data: todo,
      message: 'Todo Updated Successfully',
    });
  } catch (error) {
    console.log('Error Occured while Updating Todo');
    res.status(500).json({
      status: false,
      message: 'Error Occured while Updating Todo',
    });
  }
};

module.exports = updateTodo;
