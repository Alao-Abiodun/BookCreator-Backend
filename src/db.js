const mongoose = require('mongoose');

const db = mongoose
  .connect(
    'mongodb+srv://alaoabiodun:alao1996@cluster0.jbxby.mongodb.net/taskDB?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('Database connected successfully'))
  .catch(() => console.log('Error connection'));

module.exports = db;
