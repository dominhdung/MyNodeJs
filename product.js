var q = require('q');
var connectionManager = require('./connection');

//get latest 10 products
function getLatestItems() {
    var deferred = q.defer();
    connectionManager.getConnection()
        .then(function (connection) {
           connection.query('select  p.ProductID, p.ProductName, b.BrandName, p.Description, p.Price, r.ReviewContent, r.Rating from Product p'
                     + ' inner join Brand b'
                     + ' on p.BrandID = b.BrandID'
                     + ' left join Review r'
                     + ' on p.ProductID = r.ProductID'
					 + ' order by DateCreated desc Limit 10;', function (error, result) {
               if (error) {
                   console.error(error);
                   deferred.reject(error);
               }
               deferred.resolve(result);
           });

        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });
    return deferred.promise;
}

//update product
function updateProduct(reviewID, productID){
	var deferred = q.defer();

    connectionManager.getConnection()
        .then(function (connection) {
           connection.query('update Product set ?  where ?', [{LatestReviewID: reviewID}, {ProductID: productID}], function (error, result) {
               if (error) {
                   console.error(error);
                   deferred.reject(error);
               }
               deferred.resolve(result);
           });
        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });

    return deferred.promise;
}


//get products on filter
function getItemsFilterBrand(id){
	var deferred = q.defer();

    connectionManager.getConnection()
        .then(function (connection) {
           connection.query('select  p.ProductName, b.BrandName, p.Description, r.ReviewContent, r.Rating from Product p'
                     + ' inner join Brand b'
                     + ' on p.BrandID = b.BrandID'
                     + ' left join Review r'
                     + ' on p.ProductID = r.ProductID'
					 + ' where b.BrandID in (?)'
                     + ' order by DateCreated desc Limit 10;', [id], function (error, result) {
               if (error) {
                   console.error(error);
                   deferred.reject(error);
               }
               deferred.resolve(result);
           });

        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });

    return deferred.promise;
}

//add new review
function addReview(review){
	var deferred = q.defer();

    connectionManager.getConnection()
        .then(function (connection) {
           connection.query('Insert into Review set ? ', review, function (error, result) {
               if (error) {
                   console.error(error);
                   deferred.reject(error);
               }
               deferred.resolve(result);
           });
        })
        .fail(function (err) {
            console.error(JSON.stringify(err));
            deferred.reject(err);
        });

    return deferred.promise;
}


module.exports = {
   getLatestItems: getLatestItems,
   getItemsFilterBrand: getItemsFilterBrand,
   updateProduct: updateProduct,
   addReview: addReview
}
