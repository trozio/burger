let express = require("express");
let burger = require("../models/burger.js");
let app = express();
let orm = require("../config/orm.js");



app.get('/', function (req, res) {


    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

app.post("/", function(req, res){
    burger.insertOne("burgers", req.body.burger_name, function(error, result) {
if(error){
    console.log(error)
}
res.redirect('/');
    })

   });





module.exports = app;
