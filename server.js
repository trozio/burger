let express = require("express");

var path = require("path");

let bodyParser = require("body-parser");

let PORT = process.env.PORT || 8080;

let app = express();

let exphbs = require("express-handlebars");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log(`Listening on port ${PORT}.`);
})
