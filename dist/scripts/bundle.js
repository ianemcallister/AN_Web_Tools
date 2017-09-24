function accountsController(t,o,e){var r=this;r.registeredUser=!1,r.forgotPassword=!1,t.info("in the accounts controller"),function(t){"CreateProfile"==t||"ForgotPassword"==t?"ForgotPassword"==t&&(r.forgotPassword=!0):r.registeredUser=!0}(o.param)}function cartController(t,o,e){t.info("in the cart controller")}function internalActtsController(t,o,e){t.info("in the internal controller")}function landingController(t,o,e,r,n){var l=this,a=n;l.example={test:"TEST TEST TEST","another test":"try again"},o.info("in the landing controller"),a.test().then(function(e){o.info("got this result",e),l.example.test=e,t.$apply()})}function locationsController(t,o,e){t.info("in the locations controller")}function loginController(t,o,e){var r=this;t.info("in the login controller"),r.email="",r.password="",r.login=function(){}}function mainController(t,o,e){t.info("in the main controller")}function ahHeader(){function t(t,o,e,r){}function o(t,o,e){var r=this;o.info("in the header directive"),r.navbnt=function(t){o.info("clicked",t),"menu"!=t&&e.path("/"+t)}}t.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/ah.header.directive.htm",replace:!0,scope:{},link:t,controller:o,controllerAs:"vm",bindToController:!0};return o.$inject=["$scope","$log","$location"],e}function ahFooter(){function t(t,o,e,r){}function o(t,o){o.info("in the header directive")}t.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/ah.footer.directive.htm",replace:!0,scope:{},link:t,controller:o,controllerAs:"vm",bindToController:!0};return o.$inject=["$scope","$log"],e}function createNewAccount(){function t(t,o,e,r){}function o(t,o,e){o.info("in the create new account directive")}t.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/createNewAccount.directive.htm",replace:!0,scope:{},link:t,controller:o,controllerAs:"vm",bindToController:!0};return o.$inject=["$scope","$log","$location"],e}function passwordReset(){function t(t,o,e,r){}function o(t,o,e){o.info("in the passwordReset directive")}t.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/passwordReset.directive.htm",replace:!0,scope:{},link:t,controller:o,controllerAs:"vm",bindToController:!0};return o.$inject=["$scope","$log","$location"],e}function userDashboard(){function t(t,o,e,r){}function o(t,o,e){o.info("in the userDashboard directive")}t.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/userDashboard.directive.htm",replace:!0,scope:{},link:t,controller:o,controllerAs:"vm",bindToController:!0};return o.$inject=["$scope","$log","$location"],e}function dataServices(t,o){return{test:function(){return new Promise(function(t,o){t("a new form of testing")})}}}function config(t){t.when("/",{templateUrl:"views/landingPage.htm",controller:"landingController",controllerAs:"vm"}).when("/locations",{templateUrl:"views/locationsPage.htm",controller:"locationsController",controllerAs:"vm"}).when("/login",{templateUrl:"views/loginPage.htm",controller:"loginController",controllerAs:"vm"}).when("/cart",{templateUrl:"views/cartPage.htm",controller:"cartController",controllerAs:"vm"}).when("/MyAccount/:param",{templateUrl:"views/accountsPage.htm",controller:"accountsController",controllerAs:"vm"}).when("/teamMember/:param",{templateUrl:"views/internalActtsPage.htm",controller:"internalActtsController",controllerAs:"vm",resolve:{authentication:authentication}})}function authentication(){console.log("authenticating")}config.$inject=["$routeProvider"];var ahNuts=angular.module("ahNuts",["ngRoute"]);angular.module("ahNuts").controller("accountsController",accountsController),accountsController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("cartController",cartController),cartController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("internalActtsController",internalActtsController),internalActtsController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("landingController",landingController),landingController.$inject=["$scope","$log","$routeParams","$location","dataServices"],angular.module("ahNuts").controller("locationsController",locationsController),locationsController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("loginController",loginController),loginController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("mainController",mainController),mainController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").directive("ahHeader",ahHeader),angular.module("ahNuts").directive("ahFooter",ahFooter),angular.module("ahNuts").directive("createNewAccount",createNewAccount),angular.module("ahNuts").directive("passwordReset",passwordReset),angular.module("ahNuts").directive("userDashboard",userDashboard),angular.module("ahNuts").factory("dataServices",dataServices),dataServices.$inject=["$log","$http"],angular.module("ahNuts").config(config);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvY29udHJvbGxlcnMvYWNjb3VudHMuY29udHJvbGxlci5qcyIsInNjcmlwdHMvY29udHJvbGxlcnMvY2FydC5jb250cm9sbGVyLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9pbnRlcm5hbC5hY2NvdW50cy5jb250cm9sbGVyLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9sYW5kaW5nLmNvbnRyb2xsZXIuanMiLCJzY3JpcHRzL2NvbnRyb2xsZXJzL2xvY2F0aW9ucy5jb250cm9sbGVyLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9sb2dpbi5jb250cm9sbGVyLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9tYWluLmNvbnRyb2xsZXIuanMiLCJzY3JpcHRzL2RpcmVjdGl2ZXMvYWguaGVhZGVyLmRpcmVjdGl2ZS5qcyIsInNjcmlwdHMvZGlyZWN0aXZlcy9haEZvb3Rlci5kaXJlY3RpdmUuanMiLCJzY3JpcHRzL2RpcmVjdGl2ZXMvY3JlYXRlTmV3QWNjb3VudC5kaXJlY3RpdmUuanMiLCJzY3JpcHRzL2RpcmVjdGl2ZXMvcGFzc3dvcmRSZXNldC5kaXJlY3RpdmUuanMiLCJzY3JpcHRzL2RpcmVjdGl2ZXMvdXNlckRhc2hib2FyZC5kaXJlY3RpdmUuanMiLCJzY3JpcHRzL2ZhY3Rvcmllcy9kYXRhLnNlcnZpY2VzLmZhY3RvcnkuanMiLCJzY3JpcHRzL3JvdXRlcy9yb3V0ZXMtY29uZmlnLmpzIiwic2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOlsiYWNjb3VudHNDb250cm9sbGVyIiwiJGxvZyIsIiRyb3V0ZVBhcmFtcyIsIiRsb2NhdGlvbiIsInZtIiwidGhpcyIsInJlZ2lzdGVyZWRVc2VyIiwiZm9yZ290UGFzc3dvcmQiLCJpbmZvIiwidXNlcklkIiwidXNlckNoZWNrIiwicGFyYW0iLCJjYXJ0Q29udHJvbGxlciIsImludGVybmFsQWN0dHNDb250cm9sbGVyIiwibGFuZGluZ0NvbnRyb2xsZXIiLCIkc2NvcGUiLCJkYXRhU2VydmljZXMiLCJkYXRhIiwiZXhhbXBsZSIsInRlc3QiLCJhbm90aGVyIHRlc3QiLCJ0aGVuIiwicmVzdWx0IiwiJGFwcGx5IiwibG9jYXRpb25zQ29udHJvbGxlciIsImxvZ2luQ29udHJvbGxlciIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsIm1haW5Db250cm9sbGVyIiwibGlua0Z1bmMiLCJzY29wZSIsImVsIiwiYXR0ciIsImN0cmwiLCJhaEhlYWRlckNvbnRyb2xsZXIiLCJuYXZibnQiLCJidXR0b24iLCJwYXRoIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZVVybCIsInJlcGxhY2UiLCJsaW5rIiwiY29udHJvbGxlciIsImNvbnRyb2xsZXJBcyIsImJpbmRUb0NvbnRyb2xsZXIiLCIkaW5qZWN0IiwiYWhGb290ZXJDb250cm9sbGVyIiwiY3JlYXRlTmV3QWNjb3VudENvbnRyb2xsZXIiLCJwYXNzd29yZFJlc2V0Q29udHJvbGxlciIsInVzZXJEYXNoYm9hcmRDb250cm9sbGVyIiwiJGh0dHAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsImF1dGhlbnRpY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImFoTnV0cyIsImFuZ3VsYXIiLCJtb2R1bGUiLCJhaEhlYWRlciIsImFoRm9vdGVyIiwiY3JlYXRlTmV3QWNjb3VudCIsInBhc3N3b3JkUmVzZXQiLCJ1c2VyRGFzaGJvYXJkIiwiZmFjdG9yeSJdLCJtYXBwaW5ncyI6IkFBT0EsU0FBQUEsbUJBQUFDLEVBQUFDLEVBQUFDLEdBR0EsSUFBQUMsRUFBQUMsS0FHQUQsRUFBQUUsZ0JBQUEsRUFDQUYsRUFBQUcsZ0JBQUEsRUFHQU4sRUFBQU8sS0FBQSw4QkFHQSxTQUFBQyxHQUdBLGlCQUFBQSxHQUFBLGtCQUFBQSxFQUdBLGtCQUFBQSxJQUFBTCxFQUFBRyxnQkFBQSxHQUtBSCxFQUFBRSxnQkFBQSxFQU1BSSxDQUFBUixFQUFBUyxPQzlCQSxTQUFBQyxlQUFBWCxFQUFBQyxF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VUFDQXpCLFVBQUEsV0FBQTBCLFVDRkFGLFFBQ0FDLE9BQUEsVUFDQXpCLFVBQUEsV0FBQTJCLFVDRkFILFFBQ0FDLE9BQUEsVUFDQXpCLFVBQUEsbUJBQUE0QixrQkNGQUosUUFDQUMsT0FBQSxVQUNBekIsVUFBQSxnQkFBQTZCLGVDRkFMLFFBQ0FDLE9BQUEsVUFDQXpCLFVBQUEsZ0JBQUE4QixlQ1RBTixRQUNBQyxPQUFBLFVBQ0FNLFFBQUEsZUFBQXRELGNBRUFBLGFBQUErQixTQUFBLE9BQUEsU0NKQWdCLFFBQ0FDLE9BQUEsVUFDQVIsT0FBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FoTnV0cycpXG4gICAgLmNvbnRyb2xsZXIoJ2FjY291bnRzQ29udHJvbGxlcicsIGFjY291bnRzQ29udHJvbGxlcik7XG5cbmFjY291bnRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBhY2NvdW50c0NvbnRyb2xsZXIoJGxvZywgJHJvdXRlUGFyYW1zLCAkbG9jYXRpb24pIHtcblxuXHQvL2RlZmluZSB2aWV3IG1vZGVsIHZhcmlhYmxlXG5cdHZhciB2bSA9IHRoaXM7XG5cblx0Ly9kZWZpbmUgdmlldyBtb2RlbCB2YXJpYWJsZVxuXHR2bS5yZWdpc3RlcmVkVXNlciA9IGZhbHNlO1x0Ly9kZWZhdWx0IHRvIGZhbHNlXG5cdHZtLmZvcmdvdFBhc3N3b3JkID0gZmFsc2U7XHQvL2RlZmF1bHQgdG8gZmFsc2VcblxuXHQvL25vdGlmeSB1cyBvZiB0aGUgbG9jYXRpb25cblx0JGxvZy5pbmZvKCdpbiB0aGUgYWNjb3VudHMgY29udHJvbGxlcicpO1x0Ly9UT0RPOiBUQUtFIFRISVMgT1VUIExBVEVSXG5cblx0Ly9jaGVjayB0aGUgcGFyYW1zXG5cdGZ1bmN0aW9uIHVzZXJDaGVjayh1c2VySWQpIHtcblxuXHRcdC8vY2hlY2sgdGhlIGNyZWRlbnRpYWxzXG5cdFx0aWYodXNlcklkID09ICdDcmVhdGVQcm9maWxlJyB8fCB1c2VySWQgPT0gJ0ZvcmdvdFBhc3N3b3JkJykge1xuXG5cdFx0XHQvL2lmIGl0J3MganVzdCBhIGZvcmdvdHRlbiBwYXNzd29yZCBnbyB0aGVyZVxuXHRcdFx0aWYodXNlcklkID09ICdGb3Jnb3RQYXNzd29yZCcpIHZtLmZvcmdvdFBhc3N3b3JkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vaWYgdGhleSBhcmUgbm90IGNyZWF0aW5nIGEgbmV3IHByb2ZpbGUsIGNoZWNrIGNyZWRlbnRpYWxzXG5cdFx0XHR2bS5yZWdpc3RlcmVkVXNlciA9IHRydWU7XG5cblx0XHR9O1xuXG5cdH07XG5cblx0dXNlckNoZWNrKCRyb3V0ZVBhcmFtcy5wYXJhbSk7XG59IiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FoTnV0cycpXG4gICAgLmNvbnRyb2xsZXIoJ2NhcnRDb250cm9sbGVyJywgY2FydENvbnRyb2xsZXIpO1xuXG5jYXJ0Q29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBjYXJ0Q29udHJvbGxlcigkbG9nLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbikge1xuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVcblx0dmFyIHZtID0gdGhpcztcblxuXHQkbG9nLmluZm8oJ2luIHRoZSBjYXJ0IGNvbnRyb2xsZXInKTtcdC8vVE9ETzogVEFLRSBUSElTIE9VVCBMQVRFUlxufSIsImFuZ3VsYXJcbiAgICAubW9kdWxlKCdhaE51dHMnKVxuICAgIC5jb250cm9sbGVyKCdpbnRlcm5hbEFjdHRzQ29udHJvbGxlcicsIGludGVybmFsQWN0dHNDb250cm9sbGVyKTtcblxuaW50ZXJuYWxBY3R0c0NvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZycsICckcm91dGVQYXJhbXMnLCAnJGxvY2F0aW9uJ107XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gaW50ZXJuYWxBY3R0c0NvbnRyb2xsZXIoJGxvZywgJHJvdXRlUGFyYW1zLCAkbG9jYXRpb24pIHtcblxuXHQvL2RlZmluZSB2aWV3IG1vZGVsIHZhcmlhYmxlXG5cdHZhciB2bSA9IHRoaXM7XG5cblx0Ly9ub3RpZnkgdXMgb2YgdGhlIGxvY2F0aW9uXG5cdCRsb2cuaW5mbygnaW4gdGhlIGludGVybmFsIGNvbnRyb2xsZXInKTtcdC8vVE9ETzogVEFLRSBUSElTIE9VVCBMQVRFUlxuXG59IiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FoTnV0cycpXG4gICAgLmNvbnRyb2xsZXIoJ2xhbmRpbmdDb250cm9sbGVyJywgbGFuZGluZ0NvbnRyb2xsZXIpO1xuXG5sYW5kaW5nQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCckbG9nJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nLCAnZGF0YVNlcnZpY2VzJ107XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gbGFuZGluZ0NvbnRyb2xsZXIoJHNjb3BlLCAkbG9nLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbiwgZGF0YVNlcnZpY2VzKSB7XG5cblx0Ly9kZWZpbmUgdmlldyBtb2RlbCB2YXJpYWJsZVxuXHR2YXIgdm0gPSB0aGlzO1xuXHR2YXIgZGF0YSA9IGRhdGFTZXJ2aWNlcztcblxuXHQvL2RlZmluZSB2aWV3IG1vZGVsIHZhcmlhYmxlc1xuXHR2bS5leGFtcGxlID0ge1xuXHRcdHRlc3Q6IFwiVEVTVCBURVNUIFRFU1RcIixcblx0XHRcImFub3RoZXIgdGVzdFwiOiBcInRyeSBhZ2FpblwiXG5cdH07XG5cblx0JGxvZy5pbmZvKCdpbiB0aGUgbGFuZGluZyBjb250cm9sbGVyJyk7XHQvL1RPRE86IFRBS0UgVEhJUyBPVVQgTEFURVJcblxuXHQvL2RlZmluZSBsb2NhbCBmdW5jdGlvbnNcblx0ZnVuY3Rpb24gZGF0YVRlc3QoKSB7XG5cblx0XHQvL2dldCBkYXRhXG5cdFx0ZGF0YS50ZXN0KClcblx0XHQudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcblx0XHRcdCRsb2cuaW5mbygnZ290IHRoaXMgcmVzdWx0JywgcmVzdWx0KTtcblx0XHRcdHZtLmV4YW1wbGUudGVzdCA9IHJlc3VsdDtcblx0XHRcdCRzY29wZS4kYXBwbHkoKTtcblx0XHR9KTtcblxuXHR9O1xuXG5cdC8vcnVuIHRoZSB0ZXN0XG5cdGRhdGFUZXN0KCk7XG5cbn0iLCJhbmd1bGFyXG4gICAgLm1vZHVsZSgnYWhOdXRzJylcbiAgICAuY29udHJvbGxlcignbG9jYXRpb25zQ29udHJvbGxlcicsIGxvY2F0aW9uc0NvbnRyb2xsZXIpO1xuXG5sb2NhdGlvbnNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbiddO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGxvY2F0aW9uc0NvbnRyb2xsZXIoJGxvZywgJHJvdXRlUGFyYW1zLCAkbG9jYXRpb24pIHtcblxuXHQvL2RlZmluZSB2aWV3IG1vZGVsIHZhcmlhYmxlXG5cdHZhciB2bSA9IHRoaXM7XG5cblx0JGxvZy5pbmZvKCdpbiB0aGUgbG9jYXRpb25zIGNvbnRyb2xsZXInKTtcdC8vVE9ETzogVEFLRSBUSElTIE9VVCBMQVRFUlxufSIsImFuZ3VsYXJcbiAgICAubW9kdWxlKCdhaE51dHMnKVxuICAgIC5jb250cm9sbGVyKCdsb2dpbkNvbnRyb2xsZXInLCBsb2dpbkNvbnRyb2xsZXIpO1xuXG5sb2dpbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJGxvZycsICckcm91dGVQYXJhbXMnLCAnJGxvY2F0aW9uJ107XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gbG9naW5Db250cm9sbGVyKCRsb2csICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uKSB7XG5cblx0Ly9kZWZpbmUgdmlldyBtb2RlbCB2YXJpYWJsZVxuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdCRsb2cuaW5mbygnaW4gdGhlIGxvZ2luIGNvbnRyb2xsZXInKTtcdC8vVE9ETzogVEFLRSBUSElTIE9VVCBMQVRFUlxuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVzXG5cdHZtLmVtYWlsID0gJyc7XG5cdHZtLnBhc3N3b3JkID0gJyc7XG5cblx0Ly9kZWZpbmUgdm0gZnVuY3Rpb25cblx0dm0ubG9naW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vdXBvbiBsb2dpbiwgYXJlIHRoZSBjcmVkZW50YWlscyBnb29kXG5cdFx0XG5cdH07XG59IiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FoTnV0cycpXG4gICAgLmNvbnRyb2xsZXIoJ21haW5Db250cm9sbGVyJywgbWFpbkNvbnRyb2xsZXIpO1xuXG5tYWluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBtYWluQ29udHJvbGxlcigkbG9nLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbikge1xuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVcblx0dmFyIHZtID0gdGhpcztcblxuXHQkbG9nLmluZm8oJ2luIHRoZSBtYWluIGNvbnRyb2xsZXInKTtcdC8vVE9ETzogVEFLRSBUSElTIE9VVCBMQVRFUlxufSIsIi8qIGFoSGVhZGVyLmRpcmVjdGl2ZS5qcyAqL1xuXG4vKipcbiogQGRlc2MgdG9vbGJhciBkaXJlY3RpdmUgdGhhdCBpcyB1c2VkIG9uIHRoZSBtYWluIHBhZ2UgYWNyb3NzIHRoZSBlbnRpcmUgYXBwLlxuKiBAZXhhbXBsZSA8ZGl2IGFoLWhlYWRlcj48L2Rpdj5cbiovXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnYWhOdXRzJylcblx0LmRpcmVjdGl2ZSgnYWhIZWFkZXInLCBhaEhlYWRlcik7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gYWhIZWFkZXIoKSB7XG5cdHZhciBkaXJlY3RpdmUgPSB7XG5cdFx0cmVzdHJpY3Q6ICdBRUNNJyxcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvYWguaGVhZGVyLmRpcmVjdGl2ZS5odG0nLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGxpbms6IGxpbmtGdW5jLFxuXHRcdGNvbnRyb2xsZXI6IGFoSGVhZGVyQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9XG5cblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge1xuICAgIH1cblxuICAgIGFoSGVhZGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nXTtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBhaEhlYWRlckNvbnRyb2xsZXIoJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24pIHtcblx0ICAgIHZhciB2bSA9IHRoaXM7XG5cblx0ICAgICRsb2cuaW5mbygnaW4gdGhlIGhlYWRlciBkaXJlY3RpdmUnKTtcblxuXHQgICAgLy9kZWZpbmUgdmlld21vZGVsIGZ1bmN0aW9uc1xuXHQgICAgdm0ubmF2Ym50ID0gZnVuY3Rpb24oYnV0dG9uKSB7XG5cblx0ICAgIFx0Ly90ZWxsIHVzIHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZFxuXHQgICAgXHQkbG9nLmluZm8oJ2NsaWNrZWQnLCBidXR0b24pO1xuXG5cdCAgICBcdC8vdGhlbiByZWRpcmVjdCB0aGVyZSwgaWYgbm90IHRoZSBtZW51IGJ1dHRvblxuXHQgICAgXHRpZihidXR0b24gIT0gJ21lbnUnKSB7XG5cdCAgICBcdFx0XG5cdCAgICBcdFx0JGxvY2F0aW9uLnBhdGgoJy8nICsgYnV0dG9uKTtcblx0ICAgIFx0fTtcblx0ICAgIFx0XG5cdCAgICB9O1xuXG5cdH1cblxuXHRyZXR1cm4gIGRpcmVjdGl2ZTtcbn0iLCIvKiBhaEZvb3Rlci5kaXJlY3RpdmUuanMgKi9cblxuLyoqXG4qIEBkZXNjIHRvb2xiYXIgZGlyZWN0aXZlIHRoYXQgaXMgdXNlZCBvbiB0aGUgbWFpbiBwYWdlIGFjcm9zcyB0aGUgZW50aXJlIGFwcC5cbiogQGV4YW1wbGUgPGRpdiBhaC1mb290ZXI+PC9kaXY+XG4qL1xuXG5hbmd1bGFyXG5cdC5tb2R1bGUoJ2FoTnV0cycpXG5cdC5kaXJlY3RpdmUoJ2FoRm9vdGVyJywgYWhGb290ZXIpO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGFoRm9vdGVyKCkge1xuXHR2YXIgZGlyZWN0aXZlID0ge1xuXHRcdHJlc3RyaWN0OiAnQUVDTScsXG5cdFx0dGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2FoLmZvb3Rlci5kaXJlY3RpdmUuaHRtJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7fSxcblx0XHRsaW5rOiBsaW5rRnVuYyxcblx0XHRjb250cm9sbGVyOiBhaEZvb3RlckNvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0fVxuXG5cdC8qIEBuZ0luamVjdCAqL1xuXHRmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIGN0cmwpIHtcbiAgICB9XG5cbiAgICBhaEZvb3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBhaEZvb3RlckNvbnRyb2xsZXIoJHNjb3BlLCAkbG9nKSB7XG5cdCAgICB2YXIgdm0gPSB0aGlzO1xuXG5cdCAgICAkbG9nLmluZm8oJ2luIHRoZSBoZWFkZXIgZGlyZWN0aXZlJyk7XG5cblx0fVxuXG5cdHJldHVybiAgZGlyZWN0aXZlO1xufSIsIi8qIGNyZWF0ZU5ld0FjY291bnQuZGlyZWN0aXZlLmpzICovXG5cbi8qKlxuKiBAZGVzYyB0b29sYmFyIGRpcmVjdGl2ZSB0aGF0IGlzIHVzZWQgb24gdGhlIG1haW4gcGFnZSBhY3Jvc3MgdGhlIGVudGlyZSBhcHAuXG4qIEBleGFtcGxlIDxkaXYgY3JlYXRlLW5ldy1hY2NvdW50PjwvZGl2PlxuKi9cblxuYW5ndWxhclxuXHQubW9kdWxlKCdhaE51dHMnKVxuXHQuZGlyZWN0aXZlKCdjcmVhdGVOZXdBY2NvdW50JywgY3JlYXRlTmV3QWNjb3VudCk7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gY3JlYXRlTmV3QWNjb3VudCgpIHtcblx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRyZXN0cmljdDogJ0FFQ00nLFxuXHRcdHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9jcmVhdGVOZXdBY2NvdW50LmRpcmVjdGl2ZS5odG0nLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGxpbms6IGxpbmtGdW5jLFxuXHRcdGNvbnRyb2xsZXI6IGNyZWF0ZU5ld0FjY291bnRDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH1cblxuXHQvKiBAbmdJbmplY3QgKi9cblx0ZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCBjdHJsKSB7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3QWNjb3VudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3QWNjb3VudENvbnRyb2xsZXIoJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24pIHtcblx0ICAgIHZhciB2bSA9IHRoaXM7XG5cblx0ICAgICRsb2cuaW5mbygnaW4gdGhlIGNyZWF0ZSBuZXcgYWNjb3VudCBkaXJlY3RpdmUnKTtcblxuXHQgICAgLy9kZWZpbmUgdmlld21vZGVsIGZ1bmN0aW9uc1xuXG5cdH1cblxuXHRyZXR1cm4gIGRpcmVjdGl2ZTtcbn0iLCIvKiBwYXNzd29yZFJlc2V0LmRpcmVjdGl2ZS5qcyAqL1xuXG4vKipcbiogQGRlc2MgdG9vbGJhciBkaXJlY3RpdmUgdGhhdCBpcyB1c2VkIG9uIHRoZSBtYWluIHBhZ2UgYWNyb3NzIHRoZSBlbnRpcmUgYXBwLlxuKiBAZXhhbXBsZSA8ZGl2IHBhc3N3b3JkLXJlc2V0PjwvZGl2PlxuKi9cblxuYW5ndWxhclxuXHQubW9kdWxlKCdhaE51dHMnKVxuXHQuZGlyZWN0aXZlKCdwYXNzd29yZFJlc2V0JywgcGFzc3dvcmRSZXNldCk7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gcGFzc3dvcmRSZXNldCgpIHtcblx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRyZXN0cmljdDogJ0FFQ00nLFxuXHRcdHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9wYXNzd29yZFJlc2V0LmRpcmVjdGl2ZS5odG0nLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGxpbms6IGxpbmtGdW5jLFxuXHRcdGNvbnRyb2xsZXI6IHBhc3N3b3JkUmVzZXRDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH1cblxuXHQvKiBAbmdJbmplY3QgKi9cblx0ZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCBjdHJsKSB7XG4gICAgfVxuXG4gICAgcGFzc3dvcmRSZXNldENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gcGFzc3dvcmRSZXNldENvbnRyb2xsZXIoJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24pIHtcblx0ICAgIHZhciB2bSA9IHRoaXM7XG5cblx0ICAgICRsb2cuaW5mbygnaW4gdGhlIHBhc3N3b3JkUmVzZXQgZGlyZWN0aXZlJyk7XG5cblx0ICAgIC8vZGVmaW5lIHZpZXdtb2RlbCBmdW5jdGlvbnNcblxuXHR9XG5cblx0cmV0dXJuICBkaXJlY3RpdmU7XG59IiwiLyogdXNlckRhc2hib2FyZC5kaXJlY3RpdmUuanMgKi9cblxuLyoqXG4qIEBkZXNjIHRvb2xiYXIgZGlyZWN0aXZlIHRoYXQgaXMgdXNlZCBvbiB0aGUgbWFpbiBwYWdlIGFjcm9zcyB0aGUgZW50aXJlIGFwcC5cbiogQGV4YW1wbGUgPGRpdiB1c2VyLWRhc2hib2FyZD48L2Rpdj5cbiovXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnYWhOdXRzJylcblx0LmRpcmVjdGl2ZSgndXNlckRhc2hib2FyZCcsIHVzZXJEYXNoYm9hcmQpO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIHVzZXJEYXNoYm9hcmQoKSB7XG5cdHZhciBkaXJlY3RpdmUgPSB7XG5cdFx0cmVzdHJpY3Q6ICdBRUNNJyxcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvdXNlckRhc2hib2FyZC5kaXJlY3RpdmUuaHRtJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7fSxcblx0XHRsaW5rOiBsaW5rRnVuYyxcblx0XHRjb250cm9sbGVyOiB1c2VyRGFzaGJvYXJkQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9XG5cblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge1xuICAgIH1cblxuICAgIHVzZXJEYXNoYm9hcmRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbiddO1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIHVzZXJEYXNoYm9hcmRDb250cm9sbGVyKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uKSB7XG5cdCAgICB2YXIgdm0gPSB0aGlzO1xuXG5cdCAgICAkbG9nLmluZm8oJ2luIHRoZSB1c2VyRGFzaGJvYXJkIGRpcmVjdGl2ZScpO1xuXG5cdCAgICAvL2RlZmluZSB2aWV3bW9kZWwgZnVuY3Rpb25zXG5cblx0fVxuXG5cdHJldHVybiAgZGlyZWN0aXZlO1xufSIsImFuZ3VsYXJcbiAgICAubW9kdWxlKCdhaE51dHMnKVxuICAgIC5mYWN0b3J5KCdkYXRhU2VydmljZXMnLCBkYXRhU2VydmljZXMpO1xuXG5kYXRhU2VydmljZXMuJGluamVjdCA9IFsnJGxvZycsICckaHR0cCddO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGRhdGFTZXJ2aWNlcygkbG9nLCAkaHR0cCkge1xuXG5cdHZhciBkYXRhU2VydmljZXNPYmplY3QgPSB7XG5cdFx0dGVzdDogdGVzdFx0XHRcblx0fTtcblxuXHQvL2RlZmluZSBhbGwgbWV0aG9kc1xuXHRmdW5jdGlvbiB0ZXN0KCkge1xuXHRcdFx0XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG5cdFx0XHRyZXNvbHZlKCdhIG5ldyBmb3JtIG9mIHRlc3RpbmcnKTtcblxuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiBkYXRhU2VydmljZXNPYmplY3Q7XG59IiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FoTnV0cycpXG4gICAgLmNvbmZpZyhjb25maWcpO1xuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBjb25maWcoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0Ly9kZWZpbmUgdGhlIGxhbmRpbmcgcm91dGVcblx0LndoZW4oJy8nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbGFuZGluZ1BhZ2UuaHRtJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2xhbmRpbmdDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcbiAgICAvL2RlZmluZSB0aGUgbG9jYXRpb25zIHJvdXRlXG4gICAgLndoZW4oJy9sb2NhdGlvbnMnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbG9jYXRpb25zUGFnZS5odG0nLFxuICAgICAgICBjb250cm9sbGVyOiAnbG9jYXRpb25zQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pXG4gICAgLy9kZWZpbmUgdGhlIGxvZ2luIHJvdXRlXG4gICAgLndoZW4oJy9sb2dpbicsIHtcbiAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9sb2dpblBhZ2UuaHRtJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2xvZ2luQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pXG4gICAgLy9kZWZpbmUgdGhlIHNob3BwaW5nIGNhcnQgcm91dGVcbiAgICAud2hlbignL2NhcnQnLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvY2FydFBhZ2UuaHRtJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2NhcnRDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcbiAgICAvL2RlZmluZSB0aGUgbXlBY2NvdW50IHJvdXRlIGZvciBjdXN0b21lcnNcbiAgICAud2hlbignL015QWNjb3VudC86cGFyYW0nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvYWNjb3VudHNQYWdlLmh0bScsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdhY2NvdW50c0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICAgIC8vZGVmaW5lIHRoZSB0ZWFtTWVtYmVyIHJvdXRlXG5cdC53aGVuKCcvdGVhbU1lbWJlci86cGFyYW0nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvaW50ZXJuYWxBY3R0c1BhZ2UuaHRtJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2ludGVybmFsQWN0dHNDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxuICAgICAgICByZXNvbHZlOiB7IC8qIEBuZ0luamVjdCAqL1xuICAgICAgICAgICAgYXV0aGVudGljYXRpb246IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy9SZXF1aXJlZCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGF1dGhlbnRpY2F0aW9uKCkge1xuXG4gICAgY29uc29sZS5sb2coJ2F1dGhlbnRpY2F0aW5nJyk7XHQvL1RPRE86IFRBS0UgVEhJUyBPVVQgTEFURVJcbn07IiwiLy8gTU9EVUxFXG52YXIgYWhOdXRzID0gYW5ndWxhci5tb2R1bGUoJ2FoTnV0cycsIFsnbmdSb3V0ZSddKTsiXX0=
