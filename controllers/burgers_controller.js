let express = require("express");
let burger = require("../models/burger.js");
let app = express();
let orm = require("../config/orm.js");



app.get('/', function (req, res) {
    res.render('index');
});

app.post("/api/burgers", function(req, res){
    burger.insertOne("burgers", req.body.burger_name, function(data) {
       res.json(data);
     });
   });





module.exports = app;
