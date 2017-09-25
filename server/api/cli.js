var firebase = require('./firebase.js');
var squareup = require('./squareup.js');

/*firebase.read()
.then(function(response) {
	console.log('got this response', response);
});*/

/*
squareup.employeesList()
.then(function(response) {
	var employees = JSON.parse(response);
	console.log('got this response');
	console.log(employees);

	var newEmployeesList = buildList(employees);

	console.log(newEmployeesList);

	firebase.write(newEmployeesList)
	.then(function success(response) {
		console.log(response);
	})
	.catch(function error(e) {
		console.log(e);
	});

});*/

squareup.downloadDailySales()
.then(function success(s) {
	console.log('success');
}).catch(function error(e) {
	console.log('error', e);
});