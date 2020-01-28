//npx nodemon
const express = require('express');

const app = express();

app.get('/', (request, response) => {

    //json envia um objeto ou um vetor
    return response.json({mesage: 'Hello Worlds'});
});

app.listen(3333);