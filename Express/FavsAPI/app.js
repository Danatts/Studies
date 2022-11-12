const express = require('express');
const configExpress = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./utils/routes');

const app = express();

// Configuration
configExpress(app);
connectDB();
routes(app);

app.get('/', (req, res) => {
  res.send('<h1>FavsAPI</h1>');
});

module.exports = { app };
