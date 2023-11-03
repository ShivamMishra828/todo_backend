const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started at Port: ${PORT}`);
});

const router = require('./routes/route');
app.use('/api/v1', router);

const connectDB = require('./config/database');
connectDB();
