/*
*	Filter
*
*	This module helps filter data
*/


var filter = {
	prdctDetails: prdctDetails,
	productList: productList
};

function prdctDetails(allProducts, filter) {
	//define local variables
	var returnObject = [];

	console.log('select', filter);
	console.log('allProducts', allProducts.length);

	//if there's a filter, use it, otherwise return the data passed in
	if(filter.select != 'undefined') {
	
		//iterate through each of the objects,
		allProducts.forEach(function(product) {

			//console.log(product.type, filter.filter);

			//if 
			if(product.code == filter.select) {
				returnObject.push(product);
			}

		});	
			
	} else {

		returnObject = allProducts;
	}
		
	//console.log('returnObject', returnObject.length);

	return returnObject[0];
};

function productList(allProducts, filter) {

	//define local variables
	var returnObject = [];

	console.log('filter', filter);
	console.log('allProducts', allProducts.length);

	//if there's a filter, use it, otherwise return the data passed in
	if(filter.filter != 'undefined') {
	
		//iterate through each of the objects,
		allProducts.forEach(function(product) {

			//console.log(product.type, filter.filter);

			//if 
			if(product.type == filter.filter) {
				returnObject.push(product);
			}

		});	
			
	} else {

		returnObject = allProducts;
	}
		
	//console.log('returnObject', returnObject.length);

	return returnObject;
};

module.exports = filter;

