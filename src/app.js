const express = require('express');

const db = require('./db');
db;

const UserRoute = require('../routes/user.route');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is the main index route');
});

// create a new user
app.use('/v1', UserRoute);

app.listen(PORT, () => {
  console.log(`connected to PORT ${PORT}`);
});
