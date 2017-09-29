angular
    .module('ahNuts')
    .factory('testObject', testObject);

testObject.$inject = ['$log'];

/* @ngInject */
function testObject($log) {

	var testObjectObject = {
		image: undefined,
		code: 1203,
		rating: undefined,
		name: "Cone"
		Sizes: [
			{ title: "Impressive", oz: 16, price: 1800 },
			{ title: "Average", oz: 8, price: 1300 },
			{ title: "Small", oz: 4, price: 700 }
		],
		Qty: undefined,
		Description: "The most amazing pecans you've ever taste"
		Ingredients: ['Pecans', 'Sugar', 'Vanilla', 'Salt']
	};


	return testObjectObject;
}
