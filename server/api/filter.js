/*
*	Filter
*
*	This module helps filter data
*/


var filter = {
	productList: productList
};

function productList(allProducts, filter) {

	//define local variables
	var returnObject = [];

	console.log('filter', filter);
	console.log('allProducts', allProducts.length);

	//if there's a filter, use it, otherwise return the data passed in
	if(filter != undefined) {
	
		//iterate through each of the objects,
		allProducts.forEach(function(product) {

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

