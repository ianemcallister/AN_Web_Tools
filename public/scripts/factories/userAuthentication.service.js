angular
    .module('ahNuts')
    .service('userAuthentication', userAuthentication);

userAuthentication.$inject = ['$http', '$window'];

function userAuthentication ($http, $window) {

	var userAuth = {
		saveToken: saveToken,
		getToken: getToken,
		logOut: logOut,
		isLoggedIn: isLoggedIn,
		currentUser: currentUser
	};


	function saveToken(token) {
		$window.localStorage['ah-nuts-token'] = token;
	}

	function getToken() {
		return $window.localStorage['ah-nuts-token'];
	}

	function logOut() {
		$window.localStorage.removeItem('ah-nuts-token');
	}

	function isLoggedIn() {
		var token = getToken();
		var payload;

		if(token) {
			payload = token.split('.')[1];
			payload = $window.atop(payload);
			payload = JSON.parse(payload);

			return payload.exp > Date.now() / 1000;
		} else {
			return false;
		}
	}

	function currentUser() {
		if(isLoggedIn()) {
			var token = getToken();
			var payload = token.split('.')[1];
			payload = $window.atop(payload);
			payload = JSON.parse(payload);
			return payload;
		}
	}
}