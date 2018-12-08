# Lister

## Document store
Lister is a node api that connects to a MongoDB instance. Connect to a local Mongodb or an mLab version by switchin urls in `/config/db.js`

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