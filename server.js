//npm installs
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Assigning express
var app = express();
var PORT = 3000;

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Listening on port
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});