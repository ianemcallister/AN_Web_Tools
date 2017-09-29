/*
*	Web Tools Server App
*
*	This script will run the server and all required endpoint functionality.
*/


// load all required modules
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api/api.js');

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

//handles HTTP requests, for GET calls
app.get('/api/dailySqrSalesDwnld', function(req, res) {

	

	res.send('success');
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