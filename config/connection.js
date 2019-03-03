let mysql = require('mysql');
let connection = 0;

if (process.env.JAWSDB_URL) {
    console.log("Hello");
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    console.log("Hello again");
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burgers_db'
	});
	connection.connect();
}

module.exports = connection;
