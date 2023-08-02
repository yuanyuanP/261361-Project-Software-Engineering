//in terminal use "node index.js" tp open server 
//**if change anything need to close the old terminal and open the new one then run node again

var express = require('express')
var ejs = require('ejs')

var app = express(); 

app.use(express.static('public'));  //tell express to use public folder
app.set('view engine', 'ejs'); //tell express set 'view engine' to ejs, express use ejs as view engine (.ejs use in view) .ejs sending data to html easy

app.listen(8080); //localhost:8080


app.get('/', function(req, res){
    res.render('pages/home');
});

app.get("/home", function (req, res) {
  res.render("pages/index");
});

app.get('/about', function (req, res) {
  res.render("pages/about");
});

app.get("/model", function (req, res) {
  res.render("pages/model");
});