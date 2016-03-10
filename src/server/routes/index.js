var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cwatch' });
});

router.get('/products', function(req, res, next) {
  knex.select().table('products').then(function(result) {
    res.render('products', {title: 'Products', watches: result });
  });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Checkout' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/review', function(req, res, next) {
  res.render('review', { title: 'Review' });
});

router.get('/charge', function(req, res, next) {
  res.render('charge', { title: 'Charge' });
});

router.post('/charge', function(req, res,next) {
    var stripeToken = req.body.stripeToken;
    var amount =  2000;

    stripe.charges.create({
        card: stripeToken,
        currency: 'usd',
        amount: amount
    },
    function(err, charge) {
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            res.send('success');
        }
    });
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
