/**
 * É uma biblioteca para fornecer rapidamente uma API REST com express.
 * Com ela você registra recursos de mongoose e as rotas RESTful padrão são feitas automaticamente.
 * */
const restful = require('node-restful')
const mongoose = restful.mongoose
const crudSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora:{ type: String, required: true },
    paginas:{type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})
module.exports = restful.model('Livro', crudSchema)