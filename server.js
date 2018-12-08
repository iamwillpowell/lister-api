const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbConfig = require('./config/db');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(dbConfig.url, { useNewUrlParser: true }, (err, database) => {
    if (err) {
        return console.error(err);
    }

    const db = database.db('lister');
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log(`listening on port:${port}`);
    });
})

