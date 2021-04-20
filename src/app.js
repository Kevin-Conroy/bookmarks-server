require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { NODE_ENV } = require('./config')
const validateBearerToken = require('./validate-bearer-token')
const errorHandler = require('./error-handler')
const bookmarksRouter = require('./bookmarks/bookmarks-router')

const app = express()

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test'
}))

app.use(cors())
app.use(helmet())
app.use(validateBearerToken)

app.use(bookmarksRouter)

app.get('/', (req, res) => {
  
  res.send('Hello, world!')
})

app.use(errorHandler)

module.exports = app;
