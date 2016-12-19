(function(){
	var app = angular.module('socialZoo', ['ngRoute',]);


	app.config(['$routeProvider', function($routeProvider){
		$routeProvider

		.when('/',{
			templateUrl : 'partials/home/home.html',
			controller : 'HomeController',
			controllerAs : 'storeHome',

		})
	}]);
/********************************************controller */

    app.controller('HomeController', function(){
    	this.products = parallaxData;
    });

	app.directive('header', function(){
		return{
			restrict: 'A',
			templateUrl : 'partials/commom/header.html',

		}
		 });

    app.directive('footer', function(){
    	return{
    		restrict: 'A',
    		templateUrl : 'partials/commom/footer.html',
    	}

	});


var parallaxData = {
	image : [
		"partials/img/1.jpg",
		"partials/img/2.jpg",
		"partials/img/1 copy.jpg"
	],
	description : 'Welcome to my site .Like Albert Enstein said : Life is like riding a bicycle. To keep your balance you must keep moving. I\' m following this quote and my next step is to become web developer. I really love coding to create, to solve problems, to share and recreate. I came from customer service where I used to help and learnt what need the user. Now, I would like to develop it.'

}


})();
