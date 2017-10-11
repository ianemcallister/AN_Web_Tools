angular
    .module('ahNuts')
    .factory('uspsServices', uspsServices);

uspsServices.$inject = ['$log', '$http'];

/* @ngInject */
function uspsServices($log, $http) {

	var uspsServices = {
		_uspsUsername: "",
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
		
		console.log(cityStateXML, typeof cityStateXML);

		var citySplit = cityStateXML.split('<City>');
		var endCitySplit = citySplit[1].split('</City>');
		var stateSplit = cityStateXML.split('<State>');
		var endStateSplit = stateSplit[1].split('</State>');
		var cityStateObject = {
			city: endCitySplit[0],
			state: endStateSplit[0]
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
		var url = 'http://production.shippingapis.com/ShippingAPI.dll?API= CityStateLookup&XML=<CityStateLookupRequest%20USERID="' + self._uspsUsername + '"><ZipCode ID= "0"><Zip5>' + zipcode + '</Zip5></ZipCode></CityStateLookupRequest>';
		var config = '';
			
		console.log(zipcode);

		//return async work
		return new Promise(function(resolve, reject) {

			//use the url resource
			$http.get(url, config)
			.then(function success(s) {

				//define local variables
				var cityStateObject = self._parseCityStateResponse(s.data);
				
				//ADD IN ERROR HANDLING
				console.log(cityStateObject);

				//pass the value back
				resolve(cityStateObject);

			}, function error(e) {

				reject(e);
			});

		});

	};

	return uspsServices;
}