exports.seed = function(knex, Promise){
  
  return Promise.join(
    //Deletes all existing entries
    knex('products').del(),

    // inserts seed entries
    knex('products').insert(
      {
          id: 1,
          name: 'Breguet',
          price: 250000,
          image: '../../client/img/breguet.jpg',
          description: 'The plates and bridges of the RD01SQ movement have been refined to the limit in a dazzling display of extreme technicality. The skeleton dial is a sight to behold with the rose gold of the outer case adding finesse to the overall look of the watch. A brown alligator leather strap finishes this watch perfectly, making it the ideal buy for any man looking for something spectacular.'
      }),
    knex('products').insert(    
      {
          id: 2,
          name: 'Hublot',
          price: 210000,
          image: '../../client/img/hublot.jpg',
          description: 'Made up of 237 components and containing 30 jewels, this beautifully constructed chronograph watch is not only an incredible timepiece to own but something to be treasured and passed down to a loved one. With a open-worked graphite coloured dial and visible inner movement, this model is a dream. The carefully-crafted tonneau shape-characteristic of the Kalpa collection makes this watch all the more unique.'
      }),
    knex('products').insert(
      {
          id: 3,
          name: 'Jaeger',
          price: 175000,
          image: '../../client/img/jaeger.jpg',
          description: 'Made up of 237 components and containing 30 jewels, this beautifully constructed watch is not only an incredible timepiece to own but something to be treasured and passed down to a loved one. This watch features a dial that visibly displays the power reserve as well as the tourbillon movement through crystal glass. The detail of rose gold indexes on the carefully-crafted 3 part round case of this watch make it all the more unique.'
      }),
    knex('products').insert(
      {
          id: 4,
          name: 'Roger',
          price: 160000,
          image: '../../client/img/roger.jpg',
          description: 'Revealing a flying tourbillon within a skeleton movement, this Roger Dubuis Pulsion embodies ultimate perfection in each and every detail. While remaining loyal to the Roger Dubuis genetic heritage, it nonetheless transcends it thanks to its exceptional character and contemporary aesthetic. Robust, as well as exquisitely designed, thanks to the 100 metre water resistance and sapphire crystal glass; Roger Dubuis have succeeded in creating a timepiece of exemplary style and peerless engineering that will stand the test of time.'
      }),
    knex('products').insert(
      {
          id: 5,
          name: 'Panerai',
          price: 125000,
          image: '../../client/img/panerai.jpg',
          description: 'A timepiece of supreme artistry, Officine Panerai have combined their exquisite design prowess, unique sense of history and prodigious technical know-how to create the Radiomir 1940 Chronograph Platino. Reminiscent of Panerais elegant lines from the 1940s with their cushioned shapes, wire loop straps and polished finishes the Radiomir pays due homage to this illustrious legacy. Firstly, every part of the Radiomir is polished, from the push-buttons controlling the chronograph functions to the winding crown and bezel. The bezel frames a crystal made of Plexiglas, akin to the original material used by the Italian Navy which demonstrates the robustness of this exceptional piece.'
      }),
    knex('products').insert(
      {
          id: 6,
          name: 'Parmigiani',
          price: 102000,
          image: '../../client/img/parmigiani.jpg',
          description: 'A classic watch with a highly accurate tourbillon movement. Power reserve indication and a date at 9 oclock. In 18-carat rose gold this model is highly technical and extremely precious. It is rare to find a piece as high in quality as this one.'
      })
);};