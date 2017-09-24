function accountsController(o,t,e){var r=this;r.registeredUser=!1,r.forgotPassword=!1,o.info("in the accounts controller"),function(o){"CreateProfile"==o||"ForgotPassword"==o?"ForgotPassword"==o&&(r.forgotPassword=!0):r.registeredUser=!0}(t.param)}function cartController(o,t,e){o.info("in the cart controller")}function internalActtsController(o,t,e){o.info("in the internal controller")}function landingController(o,t,e){o.info("in the landing controller")}function locationsController(o,t,e){o.info("in the locations controller")}function loginController(o,t,e){var r=this;o.info("in the login controller"),r.email="",r.password="",r.login=function(){o.info(r.email,r.password)}}function mainController(o,t,e){o.info("in the main controller")}function config(o){o.when("/",{templateUrl:"views/landingPage.htm",controller:"landingController",controllerAs:"vm"}).when("/locations",{templateUrl:"views/locationsPage.htm",controller:"locationsController",controllerAs:"vm"}).when("/login",{templateUrl:"views/loginPage.htm",controller:"loginController",controllerAs:"vm"}).when("/cart",{templateUrl:"views/cartPage.htm",controller:"cartController",controllerAs:"vm"}).when("/MyAccount/:param",{templateUrl:"views/accountsPage.htm",controller:"accountsController",controllerAs:"vm"}).when("/teamMember/:param",{templateUrl:"views/internalActtsPage.htm",controller:"internalActtsController",controllerAs:"vm",resolve:{authentication:authentication}})}function authentication(){console.log("authenticating")}function ahHeader(){function o(o,t,e,r){}function t(o,t,e){var r=this;t.info("in the header directive"),r.navbnt=function(o){t.info("clicked",o),"menu"!=o&&e.path("/"+o)}}o.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/ah.header.directive.htm",replace:!0,scope:{},link:o,controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["$scope","$log","$location"],e}function ahFooter(){function o(o,t,e,r){}function t(o,t){t.info("in the header directive")}o.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/ah.footer.directive.htm",replace:!0,scope:{},link:o,controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["$scope","$log"],e}function createNewAccount(){function o(o,t,e,r){}function t(o,t,e){t.info("in the create new account directive")}o.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/createNewAccount.directive.htm",replace:!0,scope:{},link:o,controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["$scope","$log","$location"],e}function passwordReset(){function o(o,t,e,r){}function t(o,t,e){t.info("in the passwordReset directive")}o.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/passwordReset.directive.htm",replace:!0,scope:{},link:o,controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["$scope","$log","$location"],e}function userDashboard(){function o(o,t,e,r){}function t(o,t,e){t.info("in the userDashboard directive")}o.$inject=["scope","el","attr","ctrl"];var e={restrict:"AECM",templateUrl:"views/directives/userDashboard.directive.htm",replace:!0,scope:{},link:o,controller:t,controllerAs:"vm",bindToController:!0};return t.$inject=["$scope","$log","$location"],e}config.$inject=["$routeProvider"];var ahNuts=angular.module("ahNuts",["ngRoute"]);angular.module("ahNuts").controller("accountsController",accountsController),accountsController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("cartController",cartController),cartController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("internalActtsController",internalActtsController),internalActtsController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("landingController",landingController),landingController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("locationsController",locationsController),locationsController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("loginController",loginController),loginController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").controller("mainController",mainController),mainController.$inject=["$log","$routeParams","$location"],angular.module("ahNuts").config(config),angular.module("ahNuts").directive("ahHeader",ahHeader),angular.module("ahNuts").directive("ahFooter",ahFooter),angular.module("ahNuts").directive("createNewAccount",createNewAccount),angular.module("ahNuts").directive("passwordReset",passwordReset),angular.module("ahNuts").directive("userDashboard",userDashboard);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvY29udHJvbGxlcnMvYWNjb3VudHMuY29udHJvbGxlci5qcyIsInNjcmlwdHMvY29udHJvbGxlcnMvY2FydC5jb250cm9sbGVyLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9pbnRlcm5hbC5hY2NvdW50cy5jb250cm9sbGVyLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9sYW5kaW5nLmNvbnRyb2xsZXIuanMiLCJzY3JpcHRzL2NvbnRyb2xsZXJzL2xvY2F0aW9ucy5jb250cm9sbGVyLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9sb2dpbi5jb250cm9sbGVyLmpzIiwic2NyaXB0cy9jb250cm9sbGVycy9tYWluLmNvbnRyb2xsZXIuanMiLCJzY3JpcHRzL3JvdXRlcy9yb3V0ZXMtY29uZmlnLmpzIiwic2NyaXB0cy9kaXJlY3RpdmVzL2FoLmhlYWRlci5kaXJlY3RpdmUuanMiLCJzY3JpcHRzL2RpcmVjdGl2ZXMvYWhGb290ZXIuZGlyZWN0aXZlLmpzIiwic2NyaXB0cy9kaXJlY3RpdmVzL2NyZWF0ZU5ld0FjY291bnQuZGlyZWN0aXZlLmpzIiwic2NyaXB0cy9kaXJlY3RpdmVzL3Bhc3N3b3JkUmVzZXQuZGlyZWN0aXZlLmpzIiwic2NyaXB0cy9kaXJlY3RpdmVzL3VzZXJEYXNoYm9hcmQuZGlyZWN0aXZlLmpzIiwic2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOlsiYWNjb3VudHNDb250cm9sbGVyIiwiJGxvZyIsIiRyb3V0ZVBhcmFtcyIsIiRsb2NhdGlvbiIsInZtIiwidGhpcyIsInJlZ2lzdGVyZWRVc2VyIiwiZm9yZ290UGFzc3dvcmQiLCJpbmZvIiwidXNlcklkIiwidXNlckNoZWNrIiwicGFyYW0iLCJjYXJ0Q29udHJvbGxlciIsImludGVybmFsQWN0dHNDb250cm9sbGVyIiwibGFuZGluZ0NvbnRyb2xsZXIiLCJsb2NhdGlvbnNDb250cm9sbGVyIiwibG9naW5Db250cm9sbGVyIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luIiwibWFpbkNvbnRyb2xsZXIiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJyZXNvbHZlIiwiYXV0aGVudGljYXRpb24iLCJjb25zb2xlIiwibG9nIiwibGlua0Z1bmMiLCJzY29wZSIsImVsIiwiYXR0ciIsImN0cmwiLCJhaEhlYWRlckNvbnRyb2xsZXIiLCIkc2NvcGUiLCJuYXZibnQiLCJidXR0b24iLCJwYXRoIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJyZXBsYWNlIiwibGluayIsImJpbmRUb0NvbnRyb2xsZXIiLCIkaW5qZWN0IiwiYWhGb290ZXJDb250cm9sbGVyIiwiY3JlYXRlTmV3QWNjb3VudENvbnRyb2xsZXIiLCJwYXNzd29yZFJlc2V0Q29udHJvbGxlciIsInVzZXJEYXNoYm9hcmRDb250cm9sbGVyIiwiYWhOdXRzIiwiYW5ndWxhciIsIm1vZHVsZSIsImFoSGVhZGVyIiwiYWhGb290ZXIiLCJjcmVhdGVOZXdBY2NvdW50IiwicGFzc3dvcmRSZXNldCIsInVzZXJEYXNoYm9hcmQiXSwibWFwcGluZ3MiOiJBQU9BLFNBQUFBLG1CQUFBQyxFQUFBQyxFQUFBQyxHQUdBLElBQUFDLEVBQUFDLEtBR0FELEVBQUFFLGdCQUFBLEVBQ0FGLEVBQUFHLGdCQUFBLEVBR0FOLEVBQUFPLEtBQUEsOEJBR0EsU0FBQUMsR0FHQSxpQkFBQUEsR0FBQSxrQkFBQUEsRUFHQSxrQkFBQUEsSUFBQUwsRUFBQUcsZ0JBQUEsR0FLQUgsRUFBQUUsZ0JBQUEsRUFNQUksQ0FBQVIsRUFBQVMsT0M5QkEsU0FBQUMsZUFBQVgsRUFBQUMsRUFBQUMsR0FLQUYsRUFBQU8sS0FBQSwwQkNMQSxTQUFBSyx3QkFBQVosRUFBQUMsRUFBQUMsR0FNQUYsRUFBQU8sS0FBQSw4QkNOQSxTQUFBTSxrQkFBQWIsRUFBQUMsRUFBQUMsR0FLQUYsRUFBQU8sS0FBQSw2QkNMQSxTQUFBTyxvQkFBQWQsRUFBQUMsRUFBQUMsR0FLQUYsRUFBQU8s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VSxPQUFBQyxRQUFBQyxPQUFBLFVBQUEsWWJEQUQsUUFDQUMsT0FBQSxVQUNBNUIsV0FBQSxxQkFBQXpCLG9CQUVBQSxtQkFBQThDLFNBQUEsT0FBQSxlQUFBLGFDSkFNLFFBQ0FDLE9BQUEsVUFDQTVCLFdBQUEsaUJBQUFiLGdCQUVBQSxlQUFBa0MsU0FBQSxPQUFBLGVBQUEsYUNKQU0sUUFDQUMsT0FBQSxVQUNBNUIsV0FBQSwwQkFBQVoseUJBRUFBLHdCQUFBaUMsU0FBQSxPQUFBLGVBQUEsYUNKQU0sUUFDQUMsT0FBQSxVQUNBNUIsV0FBQSxvQkFBQVgsbUJBRUFBLGtCQUFBZ0MsU0FBQSxPQUFBLGVBQUEsYUNKQU0sUUFDQUMsT0FBQSxVQUNBNUIsV0FBQSxzQkFBQVYscUJBRUFBLG9CQUFBK0IsU0FBQSxPQUFBLGVBQUEsYUNKQU0sUUFDQUMsT0FBQSxVQUNBNUIsV0FBQSxrQkFBQVQsaUJBRUFBLGdCQUFBOEIsU0FBQSxPQUFBLGVBQUEsYUNKQU0sUUFDQUMsT0FBQSxVQUNBNUIsV0FBQSxpQkFBQUwsZ0JBRUFBLGVBQUEwQixTQUFBLE9BQUEsZUFBQSxhQ0pBTSxRQUNBQyxPQUFBLFVBQ0FoQyxPQUFBQSxRQ0tBK0IsUUFDQUMsT0FBQSxVQUNBWixVQUFBLFdBQUFhLFVDRkFGLFFBQ0FDLE9BQUEsVUFDQVosVUFBQSxXQUFBYyxVQ0ZBSCxRQUNBQyxPQUFBLFVBQ0FaLFVBQUEsbUJBQUFlLGtCQ0ZBSixRQUNBQyxPQUFBLFVBQ0FaLFVBQUEsZ0JBQUFnQixlQ0ZBTCxRQUNBQyxPQUFBLFVBQ0FaLFVBQUEsZ0JBQUFpQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gICAgLm1vZHVsZSgnYWhOdXRzJylcbiAgICAuY29udHJvbGxlcignYWNjb3VudHNDb250cm9sbGVyJywgYWNjb3VudHNDb250cm9sbGVyKTtcblxuYWNjb3VudHNDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbiddO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGFjY291bnRzQ29udHJvbGxlcigkbG9nLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbikge1xuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVcblx0dmFyIHZtID0gdGhpcztcblxuXHQvL2RlZmluZSB2aWV3IG1vZGVsIHZhcmlhYmxlXG5cdHZtLnJlZ2lzdGVyZWRVc2VyID0gZmFsc2U7XHQvL2RlZmF1bHQgdG8gZmFsc2Vcblx0dm0uZm9yZ290UGFzc3dvcmQgPSBmYWxzZTtcdC8vZGVmYXVsdCB0byBmYWxzZVxuXG5cdC8vbm90aWZ5IHVzIG9mIHRoZSBsb2NhdGlvblxuXHQkbG9nLmluZm8oJ2luIHRoZSBhY2NvdW50cyBjb250cm9sbGVyJyk7XHQvL1RPRE86IFRBS0UgVEhJUyBPVVQgTEFURVJcblxuXHQvL2NoZWNrIHRoZSBwYXJhbXNcblx0ZnVuY3Rpb24gdXNlckNoZWNrKHVzZXJJZCkge1xuXG5cdFx0Ly9jaGVjayB0aGUgY3JlZGVudGlhbHNcblx0XHRpZih1c2VySWQgPT0gJ0NyZWF0ZVByb2ZpbGUnIHx8IHVzZXJJZCA9PSAnRm9yZ290UGFzc3dvcmQnKSB7XG5cblx0XHRcdC8vaWYgaXQncyBqdXN0IGEgZm9yZ290dGVuIHBhc3N3b3JkIGdvIHRoZXJlXG5cdFx0XHRpZih1c2VySWQgPT0gJ0ZvcmdvdFBhc3N3b3JkJykgdm0uZm9yZ290UGFzc3dvcmQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly9pZiB0aGV5IGFyZSBub3QgY3JlYXRpbmcgYSBuZXcgcHJvZmlsZSwgY2hlY2sgY3JlZGVudGlhbHNcblx0XHRcdHZtLnJlZ2lzdGVyZWRVc2VyID0gdHJ1ZTtcblxuXHRcdH07XG5cblx0fTtcblxuXHR1c2VyQ2hlY2soJHJvdXRlUGFyYW1zLnBhcmFtKTtcbn0iLCJhbmd1bGFyXG4gICAgLm1vZHVsZSgnYWhOdXRzJylcbiAgICAuY29udHJvbGxlcignY2FydENvbnRyb2xsZXInLCBjYXJ0Q29udHJvbGxlcik7XG5cbmNhcnRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbiddO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGNhcnRDb250cm9sbGVyKCRsb2csICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uKSB7XG5cblx0Ly9kZWZpbmUgdmlldyBtb2RlbCB2YXJpYWJsZVxuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdCRsb2cuaW5mbygnaW4gdGhlIGNhcnQgY29udHJvbGxlcicpO1x0Ly9UT0RPOiBUQUtFIFRISVMgT1VUIExBVEVSXG59IiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FoTnV0cycpXG4gICAgLmNvbnRyb2xsZXIoJ2ludGVybmFsQWN0dHNDb250cm9sbGVyJywgaW50ZXJuYWxBY3R0c0NvbnRyb2xsZXIpO1xuXG5pbnRlcm5hbEFjdHRzQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBpbnRlcm5hbEFjdHRzQ29udHJvbGxlcigkbG9nLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbikge1xuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVcblx0dmFyIHZtID0gdGhpcztcblxuXHQvL25vdGlmeSB1cyBvZiB0aGUgbG9jYXRpb25cblx0JGxvZy5pbmZvKCdpbiB0aGUgaW50ZXJuYWwgY29udHJvbGxlcicpO1x0Ly9UT0RPOiBUQUtFIFRISVMgT1VUIExBVEVSXG5cbn0iLCJhbmd1bGFyXG4gICAgLm1vZHVsZSgnYWhOdXRzJylcbiAgICAuY29udHJvbGxlcignbGFuZGluZ0NvbnRyb2xsZXInLCBsYW5kaW5nQ29udHJvbGxlcik7XG5cbmxhbmRpbmdDb250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbiddO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGxhbmRpbmdDb250cm9sbGVyKCRsb2csICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uKSB7XG5cblx0Ly9kZWZpbmUgdmlldyBtb2RlbCB2YXJpYWJsZVxuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdCRsb2cuaW5mbygnaW4gdGhlIGxhbmRpbmcgY29udHJvbGxlcicpO1x0Ly9UT0RPOiBUQUtFIFRISVMgT1VUIExBVEVSXG59IiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FoTnV0cycpXG4gICAgLmNvbnRyb2xsZXIoJ2xvY2F0aW9uc0NvbnRyb2xsZXInLCBsb2NhdGlvbnNDb250cm9sbGVyKTtcblxubG9jYXRpb25zQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBsb2NhdGlvbnNDb250cm9sbGVyKCRsb2csICRyb3V0ZVBhcmFtcywgJGxvY2F0aW9uKSB7XG5cblx0Ly9kZWZpbmUgdmlldyBtb2RlbCB2YXJpYWJsZVxuXHR2YXIgdm0gPSB0aGlzO1xuXG5cdCRsb2cuaW5mbygnaW4gdGhlIGxvY2F0aW9ucyBjb250cm9sbGVyJyk7XHQvL1RPRE86IFRBS0UgVEhJUyBPVVQgTEFURVJcbn0iLCJhbmd1bGFyXG4gICAgLm1vZHVsZSgnYWhOdXRzJylcbiAgICAuY29udHJvbGxlcignbG9naW5Db250cm9sbGVyJywgbG9naW5Db250cm9sbGVyKTtcblxubG9naW5Db250cm9sbGVyLiRpbmplY3QgPSBbJyRsb2cnLCAnJHJvdXRlUGFyYW1zJywgJyRsb2NhdGlvbiddO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGxvZ2luQ29udHJvbGxlcigkbG9nLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbikge1xuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVcblx0dmFyIHZtID0gdGhpcztcblxuXHQkbG9nLmluZm8oJ2luIHRoZSBsb2dpbiBjb250cm9sbGVyJyk7XHQvL1RPRE86IFRBS0UgVEhJUyBPVVQgTEFURVJcblxuXHQvL2RlZmluZSB2aWV3IG1vZGVsIHZhcmlhYmxlc1xuXHR2bS5lbWFpbCA9ICcnO1xuXHR2bS5wYXNzd29yZCA9ICcnO1xuXG5cdC8vZGVmaW5lIHZtIGZ1bmN0aW9uXG5cdHZtLmxvZ2luID0gZnVuY3Rpb24oKSB7XG5cdFx0JGxvZy5pbmZvKHZtLmVtYWlsLCB2bS5wYXNzd29yZCk7XG5cdH07XG59IiwiYW5ndWxhclxuICAgIC5tb2R1bGUoJ2FoTnV0cycpXG4gICAgLmNvbnRyb2xsZXIoJ21haW5Db250cm9sbGVyJywgbWFpbkNvbnRyb2xsZXIpO1xuXG5tYWluQ29udHJvbGxlci4kaW5qZWN0ID0gWyckbG9nJywgJyRyb3V0ZVBhcmFtcycsICckbG9jYXRpb24nXTtcblxuLyogQG5nSW5qZWN0ICovXG5mdW5jdGlvbiBtYWluQ29udHJvbGxlcigkbG9nLCAkcm91dGVQYXJhbXMsICRsb2NhdGlvbikge1xuXG5cdC8vZGVmaW5lIHZpZXcgbW9kZWwgdmFyaWFibGVcblx0dmFyIHZtID0gdGhpcztcblxuXHQkbG9nLmluZm8oJ2luIHRoZSBtYWluIGNvbnRyb2xsZXInKTtcdC8vVE9ETzogVEFLRSBUSElTIE9VVCBMQVRFUlxufSIsImFuZ3VsYXJcbiAgICAubW9kdWxlKCdhaE51dHMnKVxuICAgIC5jb25maWcoY29uZmlnKTtcbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gY29uZmlnKCRyb3V0ZVByb3ZpZGVyKSB7XG5cdCRyb3V0ZVByb3ZpZGVyXG5cdC8vZGVmaW5lIHRoZSBsYW5kaW5nIHJvdXRlXG5cdC53aGVuKCcvJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2xhbmRpbmdQYWdlLmh0bScsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdsYW5kaW5nQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pXG4gICAgLy9kZWZpbmUgdGhlIGxvY2F0aW9ucyByb3V0ZVxuICAgIC53aGVuKCcvbG9jYXRpb25zJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2xvY2F0aW9uc1BhZ2UuaHRtJyxcbiAgICAgICAgY29udHJvbGxlcjogJ2xvY2F0aW9uc0NvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICAgIC8vZGVmaW5lIHRoZSBsb2dpbiByb3V0ZVxuICAgIC53aGVuKCcvbG9naW4nLCB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvbG9naW5QYWdlLmh0bScsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdsb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KVxuICAgIC8vZGVmaW5lIHRoZSBzaG9wcGluZyBjYXJ0IHJvdXRlXG4gICAgLndoZW4oJy9jYXJ0Jywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2NhcnRQYWdlLmh0bScsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdjYXJ0Q29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pXG4gICAgLy9kZWZpbmUgdGhlIG15QWNjb3VudCByb3V0ZSBmb3IgY3VzdG9tZXJzXG4gICAgLndoZW4oJy9NeUFjY291bnQvOnBhcmFtJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2FjY291bnRzUGFnZS5odG0nLFxuICAgICAgICBjb250cm9sbGVyOiAnYWNjb3VudHNDb250cm9sbGVyJyxcbiAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgfSlcbiAgICAvL2RlZmluZSB0aGUgdGVhbU1lbWJlciByb3V0ZVxuXHQud2hlbignL3RlYW1NZW1iZXIvOnBhcmFtJywge1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2ludGVybmFsQWN0dHNQYWdlLmh0bScsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdpbnRlcm5hbEFjdHRzQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcbiAgICAgICAgcmVzb2x2ZTogeyAvKiBAbmdJbmplY3QgKi9cbiAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uOiBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vUmVxdWlyZWQgZnVuY3Rpb25zXG5mdW5jdGlvbiBhdXRoZW50aWNhdGlvbigpIHtcblxuICAgIGNvbnNvbGUubG9nKCdhdXRoZW50aWNhdGluZycpO1x0Ly9UT0RPOiBUQUtFIFRISVMgT1VUIExBVEVSXG59OyIsIi8qIGFoSGVhZGVyLmRpcmVjdGl2ZS5qcyAqL1xuXG4vKipcbiogQGRlc2MgdG9vbGJhciBkaXJlY3RpdmUgdGhhdCBpcyB1c2VkIG9uIHRoZSBtYWluIHBhZ2UgYWNyb3NzIHRoZSBlbnRpcmUgYXBwLlxuKiBAZXhhbXBsZSA8ZGl2IGFoLWhlYWRlcj48L2Rpdj5cbiovXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnYWhOdXRzJylcblx0LmRpcmVjdGl2ZSgnYWhIZWFkZXInLCBhaEhlYWRlcik7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gYWhIZWFkZXIoKSB7XG5cdHZhciBkaXJlY3RpdmUgPSB7XG5cdFx0cmVzdHJpY3Q6ICdBRUNNJyxcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvYWguaGVhZGVyLmRpcmVjdGl2ZS5odG0nLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGxpbms6IGxpbmtGdW5jLFxuXHRcdGNvbnRyb2xsZXI6IGFoSGVhZGVyQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9XG5cblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge1xuICAgIH1cblxuICAgIGFoSGVhZGVyQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJGxvZycsICckbG9jYXRpb24nXTtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBhaEhlYWRlckNvbnRyb2xsZXIoJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24pIHtcblx0ICAgIHZhciB2bSA9IHRoaXM7XG5cblx0ICAgICRsb2cuaW5mbygnaW4gdGhlIGhlYWRlciBkaXJlY3RpdmUnKTtcblxuXHQgICAgLy9kZWZpbmUgdmlld21vZGVsIGZ1bmN0aW9uc1xuXHQgICAgdm0ubmF2Ym50ID0gZnVuY3Rpb24oYnV0dG9uKSB7XG5cblx0ICAgIFx0Ly90ZWxsIHVzIHdoaWNoIGJ1dHRvbiB3YXMgY2xpY2tlZFxuXHQgICAgXHQkbG9nLmluZm8oJ2NsaWNrZWQnLCBidXR0b24pO1xuXG5cdCAgICBcdC8vdGhlbiByZWRpcmVjdCB0aGVyZSwgaWYgbm90IHRoZSBtZW51IGJ1dHRvblxuXHQgICAgXHRpZihidXR0b24gIT0gJ21lbnUnKSB7XG5cdCAgICBcdFx0XG5cdCAgICBcdFx0JGxvY2F0aW9uLnBhdGgoJy8nICsgYnV0dG9uKTtcblx0ICAgIFx0fTtcblx0ICAgIFx0XG5cdCAgICB9O1xuXG5cdH1cblxuXHRyZXR1cm4gIGRpcmVjdGl2ZTtcbn0iLCIvKiBhaEZvb3Rlci5kaXJlY3RpdmUuanMgKi9cblxuLyoqXG4qIEBkZXNjIHRvb2xiYXIgZGlyZWN0aXZlIHRoYXQgaXMgdXNlZCBvbiB0aGUgbWFpbiBwYWdlIGFjcm9zcyB0aGUgZW50aXJlIGFwcC5cbiogQGV4YW1wbGUgPGRpdiBhaC1mb290ZXI+PC9kaXY+XG4qL1xuXG5hbmd1bGFyXG5cdC5tb2R1bGUoJ2FoTnV0cycpXG5cdC5kaXJlY3RpdmUoJ2FoRm9vdGVyJywgYWhGb290ZXIpO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIGFoRm9vdGVyKCkge1xuXHR2YXIgZGlyZWN0aXZlID0ge1xuXHRcdHJlc3RyaWN0OiAnQUVDTScsXG5cdFx0dGVtcGxhdGVVcmw6ICd2aWV3cy9kaXJlY3RpdmVzL2FoLmZvb3Rlci5kaXJlY3RpdmUuaHRtJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7fSxcblx0XHRsaW5rOiBsaW5rRnVuYyxcblx0XHRjb250cm9sbGVyOiBhaEZvb3RlckNvbnRyb2xsZXIsXG5cdFx0Y29udHJvbGxlckFzOiAndm0nLFxuXHRcdGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcblx0fVxuXG5cdC8qIEBuZ0luamVjdCAqL1xuXHRmdW5jdGlvbiBsaW5rRnVuYyhzY29wZSwgZWwsIGF0dHIsIGN0cmwpIHtcbiAgICB9XG5cbiAgICBhaEZvb3RlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnXTtcbiAgICAvKiBAbmdJbmplY3QgKi9cbiAgICBmdW5jdGlvbiBhaEZvb3RlckNvbnRyb2xsZXIoJHNjb3BlLCAkbG9nKSB7XG5cdCAgICB2YXIgdm0gPSB0aGlzO1xuXG5cdCAgICAkbG9nLmluZm8oJ2luIHRoZSBoZWFkZXIgZGlyZWN0aXZlJyk7XG5cblx0fVxuXG5cdHJldHVybiAgZGlyZWN0aXZlO1xufSIsIi8qIGNyZWF0ZU5ld0FjY291bnQuZGlyZWN0aXZlLmpzICovXG5cbi8qKlxuKiBAZGVzYyB0b29sYmFyIGRpcmVjdGl2ZSB0aGF0IGlzIHVzZWQgb24gdGhlIG1haW4gcGFnZSBhY3Jvc3MgdGhlIGVudGlyZSBhcHAuXG4qIEBleGFtcGxlIDxkaXYgY3JlYXRlLW5ldy1hY2NvdW50PjwvZGl2PlxuKi9cblxuYW5ndWxhclxuXHQubW9kdWxlKCdhaE51dHMnKVxuXHQuZGlyZWN0aXZlKCdjcmVhdGVOZXdBY2NvdW50JywgY3JlYXRlTmV3QWNjb3VudCk7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gY3JlYXRlTmV3QWNjb3VudCgpIHtcblx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRyZXN0cmljdDogJ0FFQ00nLFxuXHRcdHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9jcmVhdGVOZXdBY2NvdW50LmRpcmVjdGl2ZS5odG0nLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGxpbms6IGxpbmtGdW5jLFxuXHRcdGNvbnRyb2xsZXI6IGNyZWF0ZU5ld0FjY291bnRDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH1cblxuXHQvKiBAbmdJbmplY3QgKi9cblx0ZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCBjdHJsKSB7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3QWNjb3VudENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gY3JlYXRlTmV3QWNjb3VudENvbnRyb2xsZXIoJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24pIHtcblx0ICAgIHZhciB2bSA9IHRoaXM7XG5cblx0ICAgICRsb2cuaW5mbygnaW4gdGhlIGNyZWF0ZSBuZXcgYWNjb3VudCBkaXJlY3RpdmUnKTtcblxuXHQgICAgLy9kZWZpbmUgdmlld21vZGVsIGZ1bmN0aW9uc1xuXG5cdH1cblxuXHRyZXR1cm4gIGRpcmVjdGl2ZTtcbn0iLCIvKiBwYXNzd29yZFJlc2V0LmRpcmVjdGl2ZS5qcyAqL1xuXG4vKipcbiogQGRlc2MgdG9vbGJhciBkaXJlY3RpdmUgdGhhdCBpcyB1c2VkIG9uIHRoZSBtYWluIHBhZ2UgYWNyb3NzIHRoZSBlbnRpcmUgYXBwLlxuKiBAZXhhbXBsZSA8ZGl2IHBhc3N3b3JkLXJlc2V0PjwvZGl2PlxuKi9cblxuYW5ndWxhclxuXHQubW9kdWxlKCdhaE51dHMnKVxuXHQuZGlyZWN0aXZlKCdwYXNzd29yZFJlc2V0JywgcGFzc3dvcmRSZXNldCk7XG5cbi8qIEBuZ0luamVjdCAqL1xuZnVuY3Rpb24gcGFzc3dvcmRSZXNldCgpIHtcblx0dmFyIGRpcmVjdGl2ZSA9IHtcblx0XHRyZXN0cmljdDogJ0FFQ00nLFxuXHRcdHRlbXBsYXRlVXJsOiAndmlld3MvZGlyZWN0aXZlcy9wYXNzd29yZFJlc2V0LmRpcmVjdGl2ZS5odG0nLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHt9LFxuXHRcdGxpbms6IGxpbmtGdW5jLFxuXHRcdGNvbnRyb2xsZXI6IHBhc3N3b3JkUmVzZXRDb250cm9sbGVyLFxuXHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcblx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXG5cdH1cblxuXHQvKiBAbmdJbmplY3QgKi9cblx0ZnVuY3Rpb24gbGlua0Z1bmMoc2NvcGUsIGVsLCBhdHRyLCBjdHJsKSB7XG4gICAgfVxuXG4gICAgcGFzc3dvcmRSZXNldENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRsb2cnLCAnJGxvY2F0aW9uJ107XG4gICAgLyogQG5nSW5qZWN0ICovXG4gICAgZnVuY3Rpb24gcGFzc3dvcmRSZXNldENvbnRyb2xsZXIoJHNjb3BlLCAkbG9nLCAkbG9jYXRpb24pIHtcblx0ICAgIHZhciB2bSA9IHRoaXM7XG5cblx0ICAgICRsb2cuaW5mbygnaW4gdGhlIHBhc3N3b3JkUmVzZXQgZGlyZWN0aXZlJyk7XG5cblx0ICAgIC8vZGVmaW5lIHZpZXdtb2RlbCBmdW5jdGlvbnNcblxuXHR9XG5cblx0cmV0dXJuICBkaXJlY3RpdmU7XG59IiwiLyogdXNlckRhc2hib2FyZC5kaXJlY3RpdmUuanMgKi9cblxuLyoqXG4qIEBkZXNjIHRvb2xiYXIgZGlyZWN0aXZlIHRoYXQgaXMgdXNlZCBvbiB0aGUgbWFpbiBwYWdlIGFjcm9zcyB0aGUgZW50aXJlIGFwcC5cbiogQGV4YW1wbGUgPGRpdiB1c2VyLWRhc2hib2FyZD48L2Rpdj5cbiovXG5cbmFuZ3VsYXJcblx0Lm1vZHVsZSgnYWhOdXRzJylcblx0LmRpcmVjdGl2ZSgndXNlckRhc2hib2FyZCcsIHVzZXJEYXNoYm9hcmQpO1xuXG4vKiBAbmdJbmplY3QgKi9cbmZ1bmN0aW9uIHVzZXJEYXNoYm9hcmQoKSB7XG5cdHZhciBkaXJlY3RpdmUgPSB7XG5cdFx0cmVzdHJpY3Q6ICdBRUNNJyxcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXdzL2RpcmVjdGl2ZXMvdXNlckRhc2hib2FyZC5kaXJlY3RpdmUuaHRtJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7fSxcblx0XHRsaW5rOiBsaW5rRnVuYyxcblx0XHRjb250cm9sbGVyOiB1c2VyRGFzaGJvYXJkQ29udHJvbGxlcixcblx0XHRjb250cm9sbGVyQXM6ICd2bScsXG5cdFx0YmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuXHR9XG5cblx0LyogQG5nSW5qZWN0ICovXG5cdGZ1bmN0aW9uIGxpbmtGdW5jKHNjb3BlLCBlbCwgYXR0ciwgY3RybCkge1xuICAgIH1cblxuICAgIHVzZXJEYXNoYm9hcmRDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckbG9nJywgJyRsb2NhdGlvbiddO1xuICAgIC8qIEBuZ0luamVjdCAqL1xuICAgIGZ1bmN0aW9uIHVzZXJEYXNoYm9hcmRDb250cm9sbGVyKCRzY29wZSwgJGxvZywgJGxvY2F0aW9uKSB7XG5cdCAgICB2YXIgdm0gPSB0aGlzO1xuXG5cdCAgICAkbG9nLmluZm8oJ2luIHRoZSB1c2VyRGFzaGJvYXJkIGRpcmVjdGl2ZScpO1xuXG5cdCAgICAvL2RlZmluZSB2aWV3bW9kZWwgZnVuY3Rpb25zXG5cblx0fVxuXG5cdHJldHVybiAgZGlyZWN0aXZlO1xufSIsIi8vIE1PRFVMRVxudmFyIGFoTnV0cyA9IGFuZ3VsYXIubW9kdWxlKCdhaE51dHMnLCBbJ25nUm91dGUnXSk7Il19
