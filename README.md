# Lister

## Document store
Lister is a node api that connects to a MongoDB instance. Connect to a local Mongodb or an mLab version by adding urls in a `/config/db.js` file. Example:

```
/*  /config/db.js */
module.exports = {
  url: 'mongodb://localhost:27017/lister'
};
```

### How to run local MongoDB
database: lister
collection: lists

start local daemon
`$ mongod`

start local command
`$ mongo`

## How to run app
It's a node app with a standard package.json file, just run the following:
`$ npm run dev`

## How to connect

### Postman, or similar

GET localhost:8000/lists