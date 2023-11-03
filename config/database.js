const mongoose = require('mongoose');

const connectDB = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/todoapp')
    .then(() => {
      console.log('MongoDB Successfully Connected');
    })
    .catch((err) => {
      console.log('Error Occured while connecting to DB ' + err);
    });
};

module.exports = connectDB;
