let connection = require("./connection.js");

var tableName = "burgers";

let orm = {

	selectAll: function(tableName, callback) {
		let s = "SELECT * FROM " + tableName;
		connection.query(s, function(err, result) {
			callback(result);
		});
	},

	insertOne: function(name, callback) {
		let s = "INSERT INTO burgers" + "(burger_name, devoured) VALUES (?, false)";
		connection.query(s, [name], function(err, result) {
			if (err) {
				console.log(err);
			}
			console.log(result);
		});
	},

	updateOne: function(name, devoured, id, callback) {
		let s = "UPDATE " + tableName + "SET burger_name = ? devoured = ? WHERE id = ?";
		connection.query(s, [name, devoured, id], function(err, result) {
			callback(result);
		});
	}

};

module.exports = orm;
