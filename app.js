const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID });
const express = require('express');

const app = express();


const config = {
  views: 'views', 
  static: 'public', 
  logging: true,
}

vertex.configureApp(app, config)

// import routes
const main = require('./routes/main')

// set routes
app.use('/', main)

module.exports = app
