/*
*	Web Tools Server App
*
*	This script will run the server and all required endpoint functionality.
*/


// load all required modules
var express = require('express');
var favicon = require('serve-favicon');				//COME BACK TO THIS TO ADD
var cookieParser = require('cookie-parser');		//WILL THIS BE USED??
var bodyParser = require('body-parser');
var api = require('./api/api.js');
var authentication = require('./api/authentication.controller.js');

//return the express object
var app = express();

//environment variables
var port = process.env.PORT || 3000;

//get the URL encoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

//tell it the folder to serve
app.use(express.static('dist'));

//define our body parsers
app.use(jsonParser); // for parsing application/json
app.use(urlencodedParser); // for parsing application/x-www-form-urlencoded

//my own middleware
app.use('/', function(req, res, next) {
	//log the url to the console
	console.log('Request Url: ' + req.url);

	next();
});

//handle HTTP requests, for GET calls
app.get('/', function(req, res) {

	//send back html
	//res.send('success');

});

//handle all HTTP request, for GET calls for assets
app.get('/assets/:type/:filename', function(req, res) {

	res.send(api.supplyAsset(req.params.type, req.params.filename))
});

//handle all HTTP requests, for GET calls for DB resources
app.get('/api/productlist', function(req, res) {

	//pass the params to the api for approriate resources
	api.dbRequest(req.query)
	.then(function success(s) {
		//send the resources back
		res.send(s);
	}).catch(function error(e) {
		//pass the error back
		res.send(e);
	});

});

//handles HTTP requests, for GET calls
app.get('/api/dailySqrSalesDwnld', function(req, res) {

	

	res.send('success');
});

app.get('/api/profile/', function(req, res) {
	///api/profile/USERID (GET) – to return profile details when given a USERID

	console.log("Registering user: " + req.body.email);
	
	res.status(200);
	
	res.json({
		"message" : "User registered: " + req.body.email
	});

});

//handles HTTP request, for POST calls only on square credentials
app.post('/api/square-creds', function(req, res) {

	console.log("got this request", req.body);

	//supply the needed creds
	var squareCreds = api.supplySquareCreds(req.body.key);

	//send them back to the browser
	res.send(squareCreds);

});

//handle HTTP rwquests, for POSTs only on Authentication
app.post('/api/authenticate', function(req, res) {

	console.log('got this request', req.body);

	api.authUser(req.body);

	res.send('gdisj@hs-1n2-nsi2');
});

//handles HTTP requests, for POST only on Authentication
app.post('/api/register', function(req, res) {
	
	console.log("Registering user: " + req.body.email);
		
	//
	res.status(200);
	res.json({
		"message" : "User registered: " + req.body.email
	});

});

//ADD THIS LATER
app.post('/api/login', function(req, res) {

	console.log("Registering user: " + req.body.email);
	
	res.status(200);
	res.json({
		"message" : "User registered: " + req.body.email
	});

});

//handle HTTP requets, for POSTs only on smart delivery
app.post('/api/smartDelivery', function(req, res) {

	//zip & Date
	//pickup or delivery
	//chose a location
	//upgrade your gift
	//pickup or delivery information
	//add ons
	//shopping cart
	//checkout (back into angular)


});

//handles HTTP request, for POSTs only on process-card
app.post('/process-card', function(req, res) {

	console.log('got this nonce', req.body);

	res.send('it worked');
});

//handles HTTP request, for shits
app.post('/api/shiftEarnings', function(req, res) {

	//reach out to the api
	api.shiftEarnings(req.body)
	.then(function(response) {
		//console.log(response);
		res.send(response);
	});

});

//open the port for local development
app.listen(port,function() {
	console.log('Express server is up and running on port ' + port);
});