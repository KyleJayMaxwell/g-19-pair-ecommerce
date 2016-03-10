exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', function(table){
    table.increments('id');
    table.string('name');
    table.integer('price');
    table.string('image');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');  
};