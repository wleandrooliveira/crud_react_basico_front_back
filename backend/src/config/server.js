// definição da porta onde o servidor funcionara
const port = 3003

//O body-parser é um módulo capaz de converter
//o body da requisição para vários formatos.
//Um desses formatos é json, exatamente o que queremos.
const bodyParser = require('body-parser')

//Definição da constante que importa o express
const express = require('express')
//Importando o arquivo cors.js
const allowCors = require('./cors')

// Constante que recebe a instancia do express
const server = express()
//Definição que o POST feito pode ser realizado por um formulário HTML,
//você vai precisar do urlencoded, já que o request padrão de um formulário
//com o metódo POST é um content-type do tipo "application/x-www-form-urlencoded"
server.use(bodyParser.urlencoded({ extended: true }))
//se os dados vão vir de um POST onde o content-type do request
//for "application/json", então você vai trabalhar com o bodyParser.json()
//Logo habilitamos as duas opções
server.use(bodyParser.json())
server.use(allowCors)
//Definição da porta que o servidor ficará aguardando requisição
server.listen(port, function() {

//Apenas um log que informa que o servidor está funcionando
console.log(`BACKEND is running on port ${port}.`)
})
module.exports = server




