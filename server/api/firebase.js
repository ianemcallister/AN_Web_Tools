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
	_read: _read,
  _write: _write,
  downloadEmployeesList: downloadEmployeesList,
  downloadTimecards: downloadTimecards
};

//read from the database
function _read(path) {

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
function _write(path, data) {

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

/*
*   download Employees List
*
*/
function downloadEmployeesList() {

  //define local variables
  var self = this;

  //return async work
  return new Promise(function(resolve, reject) {

    //read employees list
    self._read('employees')
    .then(function success(s) {
      resolve(s);
    }).catch(function error(e) {
      reject(e);
    });

  });

};

/*
*   download Employees List
*
*/
function downloadTimecards() {

  //define local variables
  var self = this;

  //return async work
  return new Promise(function(resolve, reject) {

    //read employees list
    self._read('timecards')
    .then(function success(s) {
      resolve(s);
    }).catch(function error(e) {
      reject(e);
    });

  });

};

module.exports = firebase;
