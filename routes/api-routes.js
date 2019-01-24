//require models library
const RestfulAPI = require('./RestClass');
const models = require('../models');
//restAPI
module.exports = function (app) {
  
  const black_List = new RestfulAPI('Black_Lists', app, models.Black_List);
  black_List.findAll();
  black_List.create();
  black_List.delete('id')
  black_List.update('id')

  /* const user = new RestfulAPI('user', app, models.User);
  user.find('id');
  user.create();
  user.delete('id')
  user.update('id')

  const event = new RestfulAPI('event', app, models.Event);
  event.findAll();
  event.find('date');
  event.create();
  event.delete('id')
  event.update('id') */
}


//require models library
/* const db = require('../models');
module.exports = function (app) {

    // GET products
    app.get('/api/Black_Lists', function (req, res) {
        db.Product.findAll({}).then(function (rows) {
            res.json(rows);
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    //GET the products by id
    app.get('/api/Black_Lists/:id', function (req, res) {
        db.Product.find({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });
    //Update by id
    app.put('/api/Black_Lists/:id', function (req, res) {
        console.log(req.params.id, "we are in update");
        db.Product.update(
            req.body,
            { where: { id: req.params.id } }
        ).then(function (data) {
            res.json({ success: true, data: data })
        }).catch(function (error) {
            res.json({ success: false, error: error });
        });
    });

    app.post('/api/Black_Lists', function (req, res) {
        models.Task.create(req.body)
            .then(function (data) {
                res.json(data);
            })
            .err(function (err) {
                res.json(err);
            })
    });

};   */