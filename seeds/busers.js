exports.seed = function(knex, Promise){
  
  return Promise.join(
    //Deletes all existing entries
    knex('users').del(),

    // inserts seed entries
    knex('users').insert(
      {
          id: 1,
          first: 'Tony',
          last: 'Tiger',
          email: 'tonytiger@gmail.com',
          password: 'IamGRRR8!',
          admin: false
      }),
    knex('users').insert(
      {
          id: 2,
          first: 'Count',
          last: 'Chocula',
          email: 'countchocula@hotmail.com',
          password: 'cocovampir3',
          admin: false
      }),
    knex('users').insert(
      {
          id: 3,
          first: 'Lucky',
          last: 'Leprechaun',
          email: 'lepluck@yahoo.com',
          password: 'magicallyDelicious',
          admin: false
      }),
    knex('users').insert(
      {
          id: 4,
          first: 'James',
          last: 'Volmert',
          email: 'JamesV@gmail.com',
          password: 'OriginalGrain',
          admin: true
      })
);};