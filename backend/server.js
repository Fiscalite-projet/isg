const express = require('express');
const app = express();
const http = require('http').Server(app);

const cors = require('cors');
const userApi = require('./routes/user');
const stepsApi = require('./routes/steps');
require('./connect');

app.use(express.json());
app.use(cors());
app.use('/user', userApi);
app.use('/steps', stepsApi);

const server = http.listen(5000, () => {
    console.log('Le serveur est en cours d\'exécution sur le port 5000');
  });

  module.exports = { app}