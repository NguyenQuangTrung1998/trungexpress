var express = require('express');
var app = express();
var port = 8001;
var bodyParser = require('body-parser');
var userRoute = require('./router/users-router');

app.use(bodyParser.json());// for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/',function(req,res){
	res.render('index');
});

app.use('/users',userRoute);



app.listen(port,function(){
	console.log('server port'+port);
});