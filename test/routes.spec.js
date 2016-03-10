var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server/app');

var should = chai.should();

chai.use(chaiHttp);

describe('testing API routes', function() {

  it('should get the index page', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err, res){
      // console.log(res.text);
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.have.string('<title>Cwatch</title>');
      // res.text.should.contain('')
      done();
    });
  });

  it('should get the Products page', function(done) {
    chai.request(server)
    .get('/products')
    .end(function(err, res){
      // console.log(res.text);
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.have.string('<title>Products</title>');
      // res.text.should.contain('')
      done();
    });
  });

  it('should get the checkout page', function(done) {
    chai.request(server)
    .get('/checkout')
    .end(function(err, res){
      // console.log(res.text);
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.have.string('<title>Checkout</title>');
      // res.text.should.contain('')
      done();
    });
  });

  it('should get the review page', function(done) {
    chai.request(server)
    .get('/review')
    .end(function(err, res){
      // console.log(res.text);
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.have.string('<title>Review</title>');
      // res.text.should.contain('')
      done();
    });
  });

  it('should get the Login page', function(done) {
    chai.request(server)
    .get('/login')
    .end(function(err, res){
      // console.log(res.text);
      res.should.have.status(200);
      res.should.be.html;
      res.text.should.have.string('<title>Login</title>');
      // res.text.should.contain('')
      done();
    });
  });

});

