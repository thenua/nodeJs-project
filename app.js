const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express()

const config = {
  views: 'views',
  static: 'public',
  logging: true,

  db: vertex.nedb()
}
vertex.configureApp(app, config)

const main= require('./routes/main')

app.use('/', main)

module.exports = app
