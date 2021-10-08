const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./src/config');
const setupController = require('./src/controller/setupController');
const apiController = require('./src/controller/apiController');

const port = process.env.PORT || 5000;

const corsOptions = {
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
}

app.use('/assets', express.static(__dirname + '/public'));
app.use(cors(corsOptions));
app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setupController(app);
apiController(app);

app.listen(port);
