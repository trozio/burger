let mysql = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'burgers_db'
});

connection.connect();



module.exports = connection;
