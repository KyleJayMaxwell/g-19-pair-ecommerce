exports.seed = function(knex, Promise){
  
  return Promise.join(
    //Deletes all existing entries
    knex('sales').del(),

    // inserts seed entries
    knex('sales').insert(
      {
          id: 1,
          order_id: 1,
          product_id: 1,
          quantity: 1
      }),
    knex('sales').insert(    
      {
          id: 2,
          order_id: 2,
          product_id: 3,
          quantity: 1
      }),
    knex('sales').insert(    
      {
          id: 3,
          order_id: 2,
          product_id: 5,
          quantity: 1
      }),
    knex('sales').insert(    
      {
          id: 4,
          order_id: 3,
          product_id: 4,
          quantity: 3
      })
);};