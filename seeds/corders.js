exports.seed = function(knex, Promise){
  
  return Promise.join(
    //Deletes all existing entries
    knex('orders').del(),

    // inserts seed entries
    knex('orders').insert(
      {
          id: 1,
          user_id: 1,
          address: '1800 S. Fake St. Denver, CO 80230',
          creditcard: 4444444444444444,
          ccexperation: '04/24',
          ccv: 444
      }),
    knex('orders').insert(    
      {
          id: 2,
          user_id: 2,
          address: '123 Platte Place Denver, CO 80277',
          creditcard: 1234567812345678,
          ccexperation: '07/24',
          ccv: 499
      }),
    knex('orders').insert(    
      {
          id: 3,
          user_id: 3,
          address: '303 Arbor Boulevard Denver, CO 80764',
          creditcard: 1324576887654321,
          ccexperation: '02/19',
          ccv: 963
      })
);};