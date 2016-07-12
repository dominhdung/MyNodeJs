var q = require('q');
var connectionManager = require('./connection');

//get latest 10 products
function getBrands() {
    var deferred = q.defer();
    connectionManager.getConnection()
        .then(function (connection) {
           connection.query('select * from Brand;', function (error, result) {
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
   getBrands: getBrands
}
