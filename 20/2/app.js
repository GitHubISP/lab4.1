const express = require('express');

const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.use('/', function (request, response) {
    response.send('<h1>О сайте</h1>');
});

app.listen(3000);