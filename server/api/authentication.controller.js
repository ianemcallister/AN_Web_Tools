//It would have to do all of these things, but I'm using firebase
//1. take the data from the submitted form and create a new Mongoose model instance
//2. Call the setPassword method we created earlier to add the salt and the hash to the instance
//3. Save the instance as a record to the database
//4. Generate a JWT
//5. Send the JWT inside the JSON response


//so instead, our model will

//define dependencies
var admin = require("firebase-admin");

var authentication = {

};



module.exports = authentication;