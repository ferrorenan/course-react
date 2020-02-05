//npx nodemon
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://renanferro:mixd102030@cluster0-i3fzb.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

//TIPOS DE PARAMETROS
// Query params: request.query (usados para filtros, ondernação ...)
// Rout params: request.params
// body: request.body (dados para criação ou alteraçãao de um registro)

//DB Usado: MongoDB = Não relacional

app.get('/users', (request, response) => {

    console.log(request.query);

    //json envia um objeto ou um vetor
    return response.json({mesage: 'Hello World'});
});

app.listen(3333);