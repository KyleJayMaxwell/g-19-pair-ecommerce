exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table){
    table.increments('id');
    table.integer('user_id');
    table.string('address');
    table.bigInteger('creditcard');
    table.string('ccexperation');
    table.integer('ccv');
    table.foreign('user_id')
    .references('users(id)');
  });  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');   
};