angular
    .module('ahNuts')
    .factory('uspsServices', uspsServices);

uspsServices.$inject = ['$log', '$http'];

/* @ngInject */
function uspsServices($log, $http) {

	//define the object
	var uspsServices = {
		_shippingRequest: {
			PackageID: "",
			Service: "",
			ZipOrigination: "",
			ZipDestination: "",
			Pounds: 0,
			Ounces: 0,
			Container: "",
			Size: "",
			Width: 0.0,
			Length: 0.0,
			Height: 0.0,
			Girth: 0.0,
			Value: 0.0
		},
		_shippingOptions: {
			zones: [],
			postage: []
		},
		_uspsUsername: "",
		_generalParse: _generalParse,
		_filterPostageOptions: _filterPostageOptions,
		_parseCityStateResponse: _parseCityStateResponse,
		getShippingRequest: getShippingRequest,
		cityStateLookup: cityStateLookup,
		priceCalculator: priceCalculator
	};

	/*
	*	GENERAL PARSE
	*	
	*	This function uses a 3rd party script to convert xml to json
	*/
	function _generalParse(xml) {
		var x2js = new X2JS();
		var afterCnv = x2js.xml_str2json(xml);
		console.log(afterCnv);
		return afterCnv;
	};

	/*
	*	FILTER POSTAGE OPTIONS
	*
	*	This function selects the most cost effective shipping origin and returns
	*	all the postage options from that location
	*	@param "allOptions" - is all the response data from USPS
	*	@return "filteredOptions" - [] is an array of the best options
	*/
	function _filterPostageOptions(allOptions) {
		//define local variables
		var self = this;
		var filteredOptions = {};
		var packageList = allOptions.RateV4Response.Package;
		var closestZip = {zip: "", zone:100 };

		//iterate through the packages
		Object.keys(packageList).forEach(function(key) {

			//define the origination location
			var ZipOrigination = packageList[key].ZipOrigination;

			//if we haven't added this origination location the model, do so
			if(filteredOptions[ZipOrigination] == undefined) filteredOptions[ZipOrigination] = { zone: 0, services: [] };

			//define the zone
			filteredOptions[ZipOrigination].zone = packageList[key].Zone;

			var postage = {
				mailService: packageList[key].Postage.MailService,
				rate: packageList[key].Postage.Rate
			};

			//push the postage options for this package onto the location
			filteredOptions[ZipOrigination].services.push(postage);

		});

		//check the zones to ship from the closest location
		Object.keys(filteredOptions).forEach(function(key) {

			//console.log(filteredOptions[key].zone, key, closestZip.zone, filteredOptions[key].zone < closestZip.zone)
			//save the closest zone
			if(filteredOptions[key].zone < closestZip.zone) closestZip = { zip: key, zone:filteredOptions[key].zone }

		});	

		//iterate through all the objects, delete all that aren't the closest
		Object.keys(filteredOptions).forEach(function(key) {

			//if it's not the smallest, delete it
			if(key != closestZip.zip) delete filteredOptions[key];

		});


		return filteredOptions
	}

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
	*	GET SHIPPING REQUEST
	*	
	*	This function takes no params and returns the shipping request object
	*	@return _shippingRequest
	*/
	function getShippingRequest() {
		var self = this;
		return self._shippingRequest;
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

	/*
	*	PRICE CALCULATOR
	*
	*	This function accepts the below parameters contained in a shippingRequest object
	*
	*	To make things more complicated this should try from both zip codes (97005 and 84015), it should choose whichever is cheeper
	*
	*	It should also give delivery options for PRIORITY and EXPRESS.
	*
	*	@param "ZipDestination" - required
	*	@param "Pounds" - required
	*	@param "Ounces" - required
	*	@param "Container" - required (RECTANGULAR or NONRECTANGULAR must be indicated when <Size>LARGE</Size>)
	*	@param "Size" - required (REGULAR: Package dimensions are 12’’ or less; LARGE: Any package dimension is larger than 12’’.)
	*	@param "Width" - optional (Value must be numeric. Units are inches.)
	*	@param "Length" - optional (Value must be numeric. Units are inches.)
	*	@param "Height" - optional (Value must be numeric. Units are inches.)
	*	@param "Girth" - optional (Value must be numeric. Units are inches.)
	*	@param "Value" - optional (Package value.  Used to determine availability and cost of extra services.)
	*	
	*	@return Promise: "shippingOptions"{zone[0], postage[{mailService, rate}]}
	*/
	function priceCalculator(shippingRequest) {
		//define local variables
		var self = this;
		var shippingOptions = self._shippingOptions;
		var postageOption = self._postage;
		var ZipOrigination = ['97005', '84015'];
		var Service = ['EXPRESS', 'PRIORITY'];
		var packageSize = '';
		var baseUrl = 'http://production.shippingapis.com/ShippingApi.dll?API=RateV4&XML=<RateV4Request USERID="' + self._uspsUsername + '">';
		var closeRequest = '</RateV4Request> ';
		var optionCount = 0;

		//construct the url by adding to the string
		var url = baseUrl;

		//Determine the package size
		if(shippingRequest.l > 12 || shippingRequest.w > 12 || shippingRequest.h > 12) packageSize = "LARGE"
		else packageSize = 'REGULAR';

		//start by iterating through the zipcodes
		ZipOrigination.forEach(function(zipcode) {

			//then iterate through each services type
			Service.forEach(function(serviceType) {

				//incriment the option counter
				optionCount++;

				//add the package tag
				url += ('<Package ID="' + optionCount + '">');

				//add the service type
				url += ("<Service>" + serviceType + "</Service>");

				//add the origin zip
				url += ("<ZipOrigination>" + zipcode + "</ZipOrigination>");

				//add the destination zip
				url += ("<ZipDestination>" + shippingRequest.zipcode + "</ZipDestination>");

				//add the pounds
				url += ("<Pounds>" + shippingRequest.pounds + "</Pounds>");

				//add the ounces
				url += ("<Ounces>" + shippingRequest.ounces + "</Ounces>");

				//add the container
				url += ("<Container>" + shippingRequest.container + "</Container>");

				//add the size
				url += ("<Size>" + packageSize + "</Size>");

				//add the width
				url += ("<Width>" + shippingRequest.w + "</Width>");

				//add the length
				url += ("<Length>" + shippingRequest.l + "</Length>");

				//add the height
				url += ("<Height>" + shippingRequest.h + "</Height>");

				//add the girth
				//url += ("<Size>" + packageSize + "</Size>");

				//close the package tag
				url += '</Package>';

			});

		});

		//when finished close the request
		url += closeRequest;

		//then pass the url to server
		return new Promise(function(resolve, reject) {

			//use the url resource
			$http.get(url, config)
			.then(function success(s) {

				//parse the xml response
				var dataJsonObject = self._generalParse(s.data);

				//distill the postage options down to most cost effective
				var allPostageOptions = self._filterPostageOptions(dataJsonObject);

				console.log('allPostageOptions', allPostageOptions);

				//pass the results back
				resolve(allPostageOptions);

			}, function error(e) {
				//pass errors back
				reject(e);
			});

		});

	};

	/*
	*	ADDRESS VERIFICATION
	*
	*/
	function addressVerification() {};


	return uspsServices;
}