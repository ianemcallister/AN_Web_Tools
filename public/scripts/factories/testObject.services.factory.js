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
		name: "Specialty Cones",
		sizes: [
			{ code: 1203001, title: "Impressive", oz: 16, price: 1800 },
			{ code: 1203002, title: "Average", oz: 8, price: 1300 },
			{ code: 1203003, title: "Small", oz: 4, price: 700 }
		],
		description: "The most amazing pecans you've ever taste",
		ingredients: ['Pecans', 'Sugar', 'Vanilla', 'Salt']
	};


	return testObjectObject;
}
