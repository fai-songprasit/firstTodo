const express = require('express')
const todos = require('./routes/todos')

const server = express()

server.use(express.json())
server.use(express.static('public'))

server.use('/api/v1/todos', todos)

module.exports = server