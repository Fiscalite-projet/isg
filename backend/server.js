const express = require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');




const userApi = require('./routes/user');
const stepsApi = require('./routes/steps');
const sarlApi= require('./routes/sarl')
const suarlApi = require('./routes/suarl');
const  decInvApi=require('./routes/declarations')
const zoneRoutes = require('./routes/zones');
const decex=require('./routes/decExistance')

require('./connect');

app.use(express.json());
app.use(cors());
app.use('/user', userApi);
app.use('/steps', stepsApi);
app.use('/sarl', sarlApi);
app.use("/suarl", suarlApi);
app.use("/declarations", decInvApi);
app.use('/zones', zoneRoutes);
app.use('/decex', decex);

const server = http.listen(5000, () => {
    console.log('Le serveur est en cours d\'exécution sur le port 5000');
  });

  module.exports = { app}