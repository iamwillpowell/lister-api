const listRoutes = require('./list-routes');

module.exports = function (app, db) {
    listRoutes(app, db);
    // ...more routes
}