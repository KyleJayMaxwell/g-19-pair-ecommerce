exports.up = function(knex, Promise) {
  return knex.schema.createTable('sales', function(table){
    table.increments('id');
    table.integer('order_id');
    table.integer('product_id');
    table.integer('quantity');
    table.foreign('order_id')
    .references('id')
    .inTable('orders');
    table.foreign('product_id')
    .references('id')
    .inTable('products');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sales');   
};