const express = require('express')
module.exports = function(server) {
// API Routes
const router = express.Router()
server.use('/api', router)
// Crud Routes
const crudService = require('../api/crud/crudService')
crudService.register(router, '/cruds')
}


