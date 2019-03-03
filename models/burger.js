let orm = require("../config/orm.js");

let burger = {
	selectAll: function(cb){
orm.selectAll('burgers', function(res) {
      cb(res);
    });
},
insertOne: function(burger, callback) {
orm.insertOne(burger);
},
updateOne: function(callback){
// Find the buyer with the most pets.
orm.updateOne("Royale with Cheese", "true");
}};
module.exports = burger;
