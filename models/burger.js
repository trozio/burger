let orm = require("../config/orm.js");

let burger = {
	selectAll: function(callback){
orm.selectAll('burgers', function(res) {
      res.json(res);
    });
},
insertOne: function(callback) {
orm.insertOne("whopper", false);
},
updateOne: function(callback){
// Find the buyer with the most pets.
orm.updateOne("Royale with Cheese", "true");
}};
module.exports = burger;
