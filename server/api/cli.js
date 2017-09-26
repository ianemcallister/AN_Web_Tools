var firebase = require('./firebase.js');
//var squareup = require('./squareup.js');
//var mailcenter = require('./mailcenter.js');
var datacenter = require('./datacenter.js');

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
/*
var allDates = [
	{ year: "2017", month: "08", day: "01", next: "02"},
	{ year: "2017", month: "08", day: "02", next: "03"},
	{ year: "2017", month: "08", day: "03", next: "04"},
	{ year: "2017", month: "08", day: "04", next: "05"},
	{ year: "2017", month: "08", day: "05", next: "06"},
	{ year: "2017", month: "08", day: "06", next: "07"},
	{ year: "2017", month: "08", day: "07", next: "08"},
	{ year: "2017", month: "08", day: "08", next: "09"},
	{ year: "2017", month: "08", day: "09", next: "10"},
	{ year: "2017", month: "08", day: "10", next: "11"},
	{ year: "2017", month: "08", day: "11", next: "12"},
	{ year: "2017", month: "08", day: "12", next: "13"},
	{ year: "2017", month: "08", day: "13", next: "14"},
	{ year: "2017", month: "08", day: "14", next: "15"},
	{ year: "2017", month: "08", day: "15", next: "16"},
	{ year: "2017", month: "08", day: "16", next: "17"},
	{ year: "2017", month: "08", day: "17", next: "18"},
	{ year: "2017", month: "08", day: "18", next: "19"},
	{ year: "2017", month: "08", day: "19", next: "20"},
	{ year: "2017", month: "08", day: "20", next: "21"},
	{ year: "2017", month: "08", day: "21", next: "22"},
	{ year: "2017", month: "08", day: "22", next: "23"},
	{ year: "2017", month: "08", day: "23", next: "24"},
	{ year: "2017", month: "08", day: "24", next: "25"},
	{ year: "2017", month: "08", day: "25", next: "26"},
	{ year: "2017", month: "08", day: "26", next: "27"},
	{ year: "2017", month: "08", day: "27", next: "28"},
	{ year: "2017", month: "08", day: "28", next: "29"},
	{ year: "2017", month: "08", day: "29", next: "30"},
	{ year: "2017", month: "08", day: "30", next: "31"}
];*/

//iterate through all the dates
/*allDates.forEach(function(date) {

	squareup.downloadDailySales(date)
	.then(function success(s) {
		console.log('success');

		var dateString = date.year + "-" + date.month + "-" + date.day;
		var path = 'raw_sales_data/' + dateString
		firebase.write(path, s[dateString])
		.then(function success(newS) {
			console.log(newS);
		}).catch(function errror(e) {
			console.log(e);
		});

	}).catch(function error(e) {
		console.log('error', e);
	});

});*/

/*
mailcenter.send('iemcallister@gmail.com', 'ian@ah-nuts.com', 'testing', {plainText: 'This is a test email', htmlText:"<strong>Test</strong>"})
.then(function success(s) {
	console.log("Success:", s);
}).catch(function error(e) {
	console.log("Error:", e);
})*/

//console.log(datacenter._buildTimeObject('2017-09-23', '08_00_00'));

firebase.read('/raw_sales_data/2017-09-23')
.then(function success(s) {

	//once we have the tx, run them through the data center
	console.log(datacenter.calcEvntDyErnngs(
		'2017-09-23', 
		'06_00_00',
		'14_30_00',
		['Ah-Nuts03-Oregon'],
		['lfRy4B4G-0lA_udwGgQr'],
		s
	));

}).catch(function error(e){
	console.log("Error:", e);
});




