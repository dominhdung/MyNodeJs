var express = require('express');
var q = require('q');
var product = require('./product');
var brand = require('./brand');

module.exports = {
   configure: function(app) {
      //page lists products
      app.get('/', function (req, res) {
         res.sendFile( __dirname + "/public/" + "product.htm" );
      })

      //api for latest products
      app.get('/product/', function(req, res) {
         product.getLatestItems()
         .then(function(data){
            console.info(data);
            res.json(data);
         })
         .fail(function(err){
            res.status(500).json({error: err.message});
         })
      });

      //api for Products filter on Brand
      app.get('/productFilter/', function(req, res) {
         //product.getItemsFilterBrand(req.params.id)
		 product.getItemsFilterBrand(req.body)
         .then(function(data){
            console.info(data);
            res.json(data);
         })
         .fail(function(err){
            res.status(500).json({error: err.message});
         })
      });

      //api of getting Brand
      app.get('/brand/', function(req, res) {
         brand.getBrands()
         .then(function(data){
            console.info(data);
            res.json(data);
         })
         .fail(function(err){
            res.status(500).json({error: err.message});
         })
      });

      //api of update product review in Product table
	  app.put('/product-review/', function(req, res) {
         product.addReview(req.param('reviewID'), req.param('productID'))
         .then(function(ProductID){
            console.info('Update successfully at ProductID');
            res.status(201).json({ProductID: ProductID});
         })
         .fail(function(err){
            res.status(500).json({error: err.message});
         })

      });

      //api for adding new product review
      app.post('/review/', function(req, res) {
         product.addReview(req.body)
         .then(function(ReviewID){
            console.info('Created with id: ' + ReviewID);
            res.status(201).json({ReviewID: ReviewID});
         })
         .fail(function(err){
            res.status(500).json({error: err.message});
         })

      });
   }
};
