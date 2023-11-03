const Todo = require('../models/todoModel');

const deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findByIdAndDelete(todoId);

    res.status(200).json({
      status: true,
      data: todo,
      message: 'Todo Deleted Successfully',
    });
  } catch (error) {
    console.log('Error Occured while Deleting Todo');
    res.status(500).json({
      status: false,
      message: 'Error Occured while Deleting Todo',
    });
  }
};

module.exports = deleteTodo;
