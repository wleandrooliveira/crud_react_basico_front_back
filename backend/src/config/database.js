//Importação do mongoose biblioteca mongoose
const mongoose = require('mongoose')
//Promise é um objeto usado para processamento assíncrono.
//Um Promise (de "promessa") representa um valor que pode
//estar disponível agora, no futuro ou nunca.
mongoose.Promise = global.Promise
//Configuração da url banco
module.exports = mongoose.connect('mongodb://localhost/crudreact')