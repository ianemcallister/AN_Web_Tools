/*	MAIL CENTER
*
*	This mail center is used to send and receive emails from node.
*
*/

//define dependencies
var mailer = require('nodemailer');

//define module
var mailcenter = {
	_defineMailOptions: _defineMailOptions,
	send: send
};

//local methods
function _define_globals() {
	
	//define local variable
	var credentials = {
		HOST: "",
		PORT: "",
		USER: "",
		PASS: ""
	};

	//check for the environment
	if(process.env.NODE_ENV != 'development') {

	} else {
		credentials.HOST = process.env.AH_NUTS_MAIL_HOST;
		credentials.PORT = process.env.AH_NUTS_MAIL_PORT;
		credentials.USER = process.env.AH_NUTS_MAIL_USER;
		credentials.PASS = process.env.AH_NUTS_MAIL_PASSWORD;
	}

	return credentials;
}

//define global variables
var MAIL_CREDENTIALS = _define_globals();
var SMTPCONFIG = {					//define the email settings
		host: MAIL_CREDENTIALS.HOST,
		port: MAIL_CREDENTIALS.PORT,
		secure: true, // use SSL
		auth: {
			user: MAIL_CREDENTIALS.USER,
			pass: MAIL_CREDENTIALS.PASS			
		}
	};
var TRANSPORTER = mailer.createTransport(SMTPCONFIG);	// create reusable transporter object using the default SMTP transport


console.log(MAIL_CREDENTIALS);

/*
*	_DEFINE MAIL OPTIONS
*
*	This method comiles all the required information into a single object
*/
function _defineMailOptions(to, from, subject, body, attch) {
	return {
		from: from,
		to: to,
		subject: subject,
		text: body.plainText,
		html: body.htmlText
	};
};

/*
*	SEND
*
*	This method composes and sends an email
*/
function send(to, from, subject, body, attch) {

	//build the mail options
	var mailOptions = _defineMailOptions(to, from, subject, body, attch);

	//return async work
	return new Promise(function(resolve, reject) {

		//send mail with the defined transport object
		TRANSPORTER.sendMail(mailOptions, function results(error, info){

			//if there was an error notify the user
			if(error) reject(info);
			else resolve('Message sent: ' + info.response);
			//if not send a positive response

		});

	});

};

//export the module
module.exports = mailcenter;

