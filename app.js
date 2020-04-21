const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed',feedRoutes);

mongoose.connect(
    'mongodb+srv://akanksha:12345@practise-timpz.mongodb.net/messages?retryWrites=true&w=majority'
).then(result => {
    app.listen(8080);
}).catch(err => console.log(err));