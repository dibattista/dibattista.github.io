(function(){
	var app = angular.module('socialZoo', ['ngRoute',]);

	app.run(['$anchorScroll', function($anchorScroll) {
	  $anchorScroll.yOffset = 50;
		  // always scroll by 50 extra pixels
	}])

	app.config(['$routeProvider', function($routeProvider){
		$routeProvider

		.when('/',{
			templateUrl : 'partials/home/home.html',
			controller : 'HomeController',
			controllerAs : 'storeHome',

		})
	}]);
/*********************************************/


	app.directive('header', function(){
		return{
			restrict: 'A',
			templateUrl : 'partials/common/header.html',
			    link: function($scope,$element){
			     $(".button-collapse").sideNav();
			      }
		     }
		 });

    app.directive('footer', function(){
    	return{
    		restrict: 'A',
    		templateUrl : 'partials/common/footer.html',
    	}

	});
/*********************************************/


var parallaxData = {
	image : [
		"partials/img/1.png",
		"partials/img/2.gif",
		"partials/img/3.jpg"

	],
	description : 'Welcome to my site .Like Albert Enstein said : Life is like riding a bicycle. To keep your balance you must keep moving. I\' m following this quote and my next step is to become web developer. I really love coding to create, to solve problems, to share and recreate. I came from customer service where I used to help and learnt what need the user. Now, I would like to develop it.'

}
/*********************************************/

    app.controller('HomeController', ['$anchorScroll', '$location', '$scope',
			function($anchorScroll, $location, $scope) {

			this.products = parallaxData;
			$scope.gotoAnchor = function(x) {
			      var newHash = 'anchor' + x;
			      if ($location.hash() !== newHash) {
			        // set the $location.hash to `newHash` and
			        // $anchorScroll will automatically scroll to it
			        $location.hash('anchor' + x);
			      } else {
			        // call $anchorScroll() explicitly,
			        // since $location.hash hasn't changed
			        $anchorScroll();
			      }
			    };
        }
			]);


			app.controller("PrimerControlador" , function ($scope) {
				$scope.comentarios = [
					{

					}

				];
				$scope.agregarComentario = function () {
					$scope.comentarios.push($scope.newComen);
					$scope.newComen={};
				}
			 })

})();
