const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  const col = db.collection('lists');

  // GET All
  app.get('/lists/', (request, response) => {
    col.find().toArray((err, result) => {
      if (err) {
        console.error('find error:', err);
        response.send({ error: 'Bummer, an error occurred'});
      } else {
        response.send(result);
      }
    });
  });

  // POST
  app.post('/lists', (request, response) => {
    const list = {
      title: request.body.title,
      text: request.body.text,
      items: request.body.items
    };

    col.insertOne(list, (err, result) => {
      if (err) {
        console.error('insert error:', err);
        response.send({ error: 'Bummer, an error occurred' });
      } else {
        response.send(result.ops[0]);
      }
    });
  });

  // GET
  app.get('/lists/:id', (request, response) => {
    const id = request.params.id;
    const details = { _id: ObjectID(id) };
    col.findOne(details, (err, item) => {
      if (err) {
        console.error('insert error:', err);
        response.send({ error: 'Bummer, an error occurred' });
      } else {
        response.send(item);
      }
    });
  });

  // PUT
  app.put('/lists/:id', (request, response) => {
    const id = request.params.id;
    const details = { _id: ObjectID(id) };
    const note = {
      title: request.body.title,
      text: request.body.text,
      items: request.body.items
    };
    col.update(details, note, (err, result) => {
      if (err) {
        console.error('delete error:', err);
        response.send({ error: 'Bummer, an error occurred' });
      } else {
        console.log(result);
        response.send(result);
      }
    });
  });

  // DELETE
  app.delete('/lists/:id', (request, response) => {
    const id = request.params.id;
    const details = { _id: ObjectID(id) };
    col.deleteOne(details, (err, result) => {
      if (err) {
        console.error('delete error:', err);
        response.send({ error: 'Bummer, an error occurred' });
      } else {
        response.send(`${result.deletedCount} deleted`);
      }
    });
  });
};
