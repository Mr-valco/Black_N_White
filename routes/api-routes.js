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

  const white_List = new RestfulAPI('White_Lists', app, models.White_List);
  white_List.findAll();
  white_List.create();
  white_List.delete('id')
  white_List.update('id')

}