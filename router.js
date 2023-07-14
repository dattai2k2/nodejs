'use strict';
module.exports = function(app) {
  let category = require('./controller/controllerCategory');
  let product = require('./controller/controllerProduct');
  // todoList Routes
  app.route('/category')
    .get(category.get)
    .post(category.new);

  app.route('/category/:id')
    .get(category.detail)
    .put(category.update)
    .delete(category.delete);

  app.route('/product')
    .get(product.get)
    .post(product.new);

  app.route('/product/:id')
    .get(product.detail)
    .put(product.update)
    .delete(product.delete);
};