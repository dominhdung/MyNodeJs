var mysql = require('mysql');
var q = require('q');

function getConnection() {
  var deferred = q.defer();
//this is from online mysql hosting provider
  var connection = mysql.createConnection({
     host: 'sql6.freemysqlhosting.net',
    user: 'sql6126730',
    password: 'wWuEL4pDZM',
    database: 'sql6126730'
  });

//Here is my local mysql
/*
	var connection = mysql.createConnection({
	host: '127.0.0.1',
    user: 'dungdom',
    password: 'Abcd1234',
    database: 'super_store'
  });
*/

  connection.connect(function (err) {
    if (err) {
      console.error(err);
      deferred.reject(err);
    }
    console.log('[CONN] – Connection created with id:'+ connection.threadId);
    deferred.resolve(connection);
  });

  return deferred.promise;
}

module.exports = {
   getConnection: getConnection
}
