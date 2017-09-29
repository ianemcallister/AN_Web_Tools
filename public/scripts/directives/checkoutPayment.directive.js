/* checkoutPayment.directive.js */

/**
* @desc toolbar directive that is used on the main page across the entire app.
* @example <div checkout-payment></div>
*/

angular
	.module('ahNuts')
	.directive('checkoutPayment', checkoutPayment);

/* @ngInject */
function checkoutPayment() {
	var directive = {
		restrict: 'AECM',
		templateUrl: 'views/directives/checkoutPayment.directive.htm',
		replace: true,
		scope: {
			squareCreds: '='
		},
		link: linkFunc,
		controller: checkoutPaymentController,
		controllerAs: 'vm',
		bindToController: true
	}

	/* @ngInject */
	function linkFunc(scope, el, attr, ctrl) {
    }

    checkoutPaymentController.$inject = ['$scope', '$log', 'dataServices'];
    /* @ngInject */
    function checkoutPaymentController($scope, $log, dataServices) {
	    var vm = this;
	    vm.data = dataServices;

	    var applicationId = 'sandbox-sq0idp-yGc6DrklfJNBsc4MQ5fDDw'; // <-- Add your application's ID here
		var locationId = '14E8S7P16JQDM';    // <-- For Apple Pay, set your location ID here

		// Make sure the application ID is set before continuing.
		// Note: checking locationId if using Apple Pay.
		if (applicationId == '') {
		  alert('You need to provide a value for the applicationId variable.');
		}
	    $log.info('in the checkoutPayment directive');

	    var paymentForm = new SqPaymentForm({
		    applicationId: applicationId,
		    locationId: locationId,
		    inputClass: 'sq-input',
		    inputStyles: [
		      {
		        fontSize: '15px'
		      }
		    ],
		    // Used for credit card payments
		    cardNumber: {
		      elementId: 'sq-card-number',
		      placeholder: '•••• •••• •••• ••••'
		    },
		    cvv: {
		      elementId: 'sq-cvv',
		      placeholder: 'CVV'
		    },
		    expirationDate: {
		      elementId: 'sq-expiration-date',
		      placeholder: 'MM/YY'
		    },
		    postalCode: {
		      elementId: 'sq-postal-code'
		    },
		    // Used for Web Apple Pay payments
		    applePay: {
		        elementId: 'sq-apple-pay'
		    },
		    // Payment form callback functions
		    callbacks: {

		      // Credit card payments are always supported, but the Web Apple Pay
		      // button should only display if Apple Pay is supported for this
		      // domain. Apple Pay support is determined by the SqPaymentForm library
		      // when the page loads. You do not need to modify this function.
		      methodsSupported: function (methods) {
		          if (methods.applePay === true) {
		              // Show apple pay button
		              var element = document.getElementById('sq-apple-pay');
		              element.style.display = 'inline-block';
		          }
		      },

		      // createPaymentRequest is triggered when the Apple Pay button is
		      // clicked. The payment request object is used by digital wallets
		      // (like Apple Pay) to create their equivalent of a credit card nonce.
		      // NOTE: The payment request below is provided as guidance. You should
		      // add code to create the object programmatically.
		      createPaymentRequest: function () {
		          return {
		              requestShippingAddress: true,
		              currencyCode: "USD",
		              countryCode: "US",
		              total: {
		                  label: "{{ MERCHANT NAME }}",
		                  amount: "{{TOTAL AMOUNT}}",
		                  pending: false,
		              },
		              lineItems: [
		                  {
		                      label: "Subtotal",
		                      amount: "{{SUBTOTAL AMOUNT}}",
		                      pending: false,
		                  },
		                  {
		                      label: "Shipping",
		                      amount: "{{SHIPPING AMOUNT}}",
		                      pending: true,
		                  },
		                  {
		                      label: "Tax",
		                      amount: "{{TAX AMOUNT}}",
		                      pending: false,
		                  }
		              ]
		          };
		      },

		      // Used for credit card payments. Called when the SqPaymentForm
		      // completes a request to generate a card nonce, even if the request
		      // failed because of an error.
		      cardNonceResponseReceived: function(errors, nonce, cardData) {
		        if (errors) {
		          console.log("Encountered errors:");

		          // This logs all errors encountered during nonce generation to the
		          // Javascript console.
		          errors.forEach(function(error) {
		            console.log('  ' + error.message);
		          });

		          return;
		        } else {

		          // You can delete this line, it's provided for testing purposes
		          //alert('Nonce received: ' + nonce);


		          // Assign the nonce value to the hidden form field
		          document.getElementById('card-nonce').value = nonce;
		          document.getElementById('nonce-form').submit();

		          // Let the form continue to the payment processing page
		          //submitPayment(nonce);
		          vm.data.post('/process-card', { nonce: nonce});
		        }
		      },

		      unsupportedBrowserDetected: function() {
		        // Fill in this callback to alert buyers when their browser is not supported.
		      },

		      // Fill in these cases to respond to various events that can occur while a
		      // buyer is using the payment form.
		      inputEventReceived: function(inputEvent) {
		        switch (inputEvent.eventType) {
		          case 'focusClassAdded':
		            // Handle as desired
		            break;
		          case 'focusClassRemoved':
		            // Handle as desired
		            break;
		          case 'errorClassAdded':
		            // Handle as desired
		            break;
		          case 'errorClassRemoved':
		            // Handle as desired
		            break;
		          case 'cardBrandChanged':
		            // Handle as desired
		            break;
		          case 'postalCodeChanged':
		            // Handle as desired
		            break;
		        }
		      },

		      paymentFormLoaded: function() {
		        // Fill in this callback to perform actions after the payment form is
		        // done loading (such as setting the postal code field programmatically).
		        // paymentForm.setPostalCode('94103');
		      }
		    }
		  });

		// This function is called when a buyer clicks the Submit button on the webpage
		// to charge their card.
		vm.requestCardNonce = function(event) {

			console.log('requestion card Nonce');

		  // This prevents the Submit button from submitting its associated form.
		  // Instead, clicking the Submit button should tell the SqPaymentForm to generate
		  // a card nonce, which the next line does.
		  event.preventDefault();

		  paymentForm.requestCardNonce();
		}

		//build payment form after controller loads
		paymentForm.build();

	}

	return  directive;
}