var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cwatch' });
});

router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Checkout' });
});

router.get('/review', function(req, res, next) {
  res.render('review', { title: 'Review' });
});

router.post('/checkout', function(req, res, next) {
  console.log(req.body);
  var street = req.body.address;
  var state = req.body.state;
  var zip = req.body.zip;
  var address = street+' '+state+' '+zip;
  var creditcard = req.body.ccnumber;
  var ccexperation = req.body.ccexpiration;
  var ccv = req.body.cvc;
  console.log(ccv);

  knex('orders').insert({
    // need id
    address: address,
    creditcard: creditcard,
    ccexperation: ccexperation,
    ccv: ccv
  });

  return res.redirect('review');
});

module.exports = router;
