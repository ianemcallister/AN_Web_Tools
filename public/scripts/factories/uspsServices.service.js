angular
    .module('ahNuts')
    .factory('uspsServices', uspsServices);

uspsServices.$inject = ['$log', '$http'];

/* @ngInject */
function uspsServices($log, $http) {

	var uspsServices = {
		_parseCityStateResponse: _parseCityStateResponse,
		cityStateLookup: cityStateLookup
	};

	/*
	*	PARSE CITY STATE RESPONSE
	*
	*	@param "cityStateXML"
	*	@return {"city", "state"}
	*/
	function _parseCityStateResponse(cityStateXML) {
		//define local variable
		var self = this;
		var cityStateObject = {
			city: "",
			state: ""
		};

		//return the returnObject
		return cityStateObject;
	};

	/*
	*	CITY STATE LOOKUP
	*	
	*	This function accepts a zipcode and returns 
	*	@param "zipcode"
	*	@returns {"city", "state"}
	*/
	function cityStateLookup(zipcode) {
		//define local variable
		var self = this;
		var urlBase = 'http://production.shippingapis.com/ShippingAPI.dll?API= CityStateLookup&XML=';
		var config = '';
		
		//return async work
		return new Promise(function(resolve, reject) {

			//use the url resource
			$http.get(url, config)
			.then(function success(s) {

				//define local variables
				var cityStateObject = self._parseCityStateResponse(s);
				
				//pass the value back
				resolve(cityStateObject);

			}, function error(e) {

				reject(e);
			});

		});

	};

	return uspsServices;
}