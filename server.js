const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbConfig = require('./config/db');

const app = express();
const port = 8000;

app.use(express.json());
// app.use(function(req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   // res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });

MongoClient.connect(
  dbConfig.url,
  { useNewUrlParser: true },
  (err, database) => {
    if (err) {
      return console.error(err);
    }

    const db = database.db('lister');
    require('./app/routes')(app, db);

    app.listen(port, () => {
      console.log(`listening on port:${port}`);
    });
  }
);
