exports.seed = function(knex, Promise){
  
  return Promise.join(
    //Deletes all existing entries
    knex('items').del(),

    // inserts seed entries
    knex('items').insert(
      {
          id: 1,
          user_id: 1,
          product_id: 1,
          quantity: 1
      }),
    knex('items').insert(    
      {
          id: 2,
          user_id: 2,
          product_id: 4,
          quantity: 2
      }),
    knex('items').insert(    
      {
          id: 3,
          user_id: 3,
          product_id: 5,
          quantity: 1,
      })
);};