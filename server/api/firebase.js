//define dependencies
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("../../config/ah-nuts-firebase-adminsdk-9z7q2-9e9e440fd1.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ah-nuts.firebaseio.com"
});

//TODO: TAKE THIS OUT LATER
/*admin.auth().getUserByEmail('ian@ah-nuts.com')
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully fetched user data:", userRecord.toJSON());
  })
  .catch(function(error) {
    console.log("Error fetching user data:", error);
  });*/

var firebase = {
	read: read,
  write: write
};

//read from the database
function read(path) {

  //define local variable
  var ref = admin.database().ref(path);

  //return async work
  return new Promise(function(resolve, reject) {

    //hit the database
    ref.once("value")
    .then(function(snapshot) {
        
        //pass the data back
        resolve(snapshot.val());

    });

  });

};

//write data to the database 
function write(path, data) {

   var ref = admin.database().ref(path);

   //return async work
   return new Promise(function(resolve, reject) {

      //hit the database
      ref.set(data, function(error) {
        if (error) {
          reject("Data could not be saved." + error);
        } else {
          resolve("Data saved successfully.");
        }
      });

   });

};

module.exports = firebase;
