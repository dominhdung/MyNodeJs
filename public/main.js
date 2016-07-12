var app = angular.module("MyApp", ['ui.router']);


app.factory('Product', ['$q', '$http', function($q, $http){
	var productService = {};
	productService.items = [];
	productService.brands = [];

	productService.getLatestItems = function(){
		var deferred = $q.defer();
		return $http({
			url: '/product/',
			method: 'GET'

		}).success(function(data){
			deferred.resolve(productService.items = data);
		}).error(function(error){
			deferred.reject(error);
		})
		return deferred.promise;
	}

	productService.getItemsFilterBrand = function(){
		var deferred = $q.defer();
		return $http({
			url: '/product/:id',
			method: 'GET'

		}).success(function(data){
			deferred.resolve(productService.items = data);
		}).error(function(error){
			deferred.reject(error);
		})
		return deferred.promise;
	}
	
	//get all Brands
	productService.getBrands = function(){
		var deferred = $q.defer();
		return $http({
			url: '/brand/',
			method: 'GET'

		}).success(function(data){
			deferred.resolve(productService.brands = data);
		}).error(function(error){
			deferred.reject(error);
		})
		return deferred.promise;
	}


// add a new product review
    productService.addReview = function(newReview){
		var deferred = $q.defer();
		return $http.post('/review/', newReview)
		.success(function(data){
			deferred.resolve(productService.item = data);
		}).error(function(error){
			deferred.reject(error);
		})
		return deferred.promise;
	}
	return productService;
}]);


app.controller('productCtrl', ['$scope', 'Product', function($scope, Product){
	$scope.products = getLatestProducts();
	$scope.brandChecks = [];
	assignBrandsToCheckbox();

	function getLatestProducts(){
		Product.getLatestItems()
		.then(function(data){
			$scope.products = Product.items;
		});
	};

	function assignBrandsToCheckbox(){
		Product.getBrands()
		.then(function(data){
			angular.forEach(Product.brands, function(value, key){

				$scope.brandChecks.push({
					brandID: value.BrandID,
					brandName: value.BrandName,
					val: true
				});
				
			});
		});
	};
	
	

}]);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

    $stateProvider
        .state('review', {
            url: "/route1/:productID/:productName/",
            templateUrl: "review.htm",
			controller: function($scope, $stateParams, Product) {
				$scope.currentItem = {};
				$scope.currentItem.ProductID = $stateParams.productID;
				$scope.currentItem.ProductName = $stateParams.productName;
				$scope.currentItem.CustomerID = 1;
				$scope.currentItem.CustomerName = 'johndave';
				$scope.currentItem.ReviewContent = 'I love it';
				$scope.currentItem.Rating = 8;

				function addProductReview(){

					var newReview = {
						ProductID: $scope.currentItem.ProductID,
						CustomerID: $scope.currentItem.CustomerID,
						ReviewContent: $scope.currentItem.ReviewContent,
						Rating: $scope.currentItem.Rating
					}
				   Product.addReview(newReview);
				}

				angular.element('.btn-submit').click(function(){
					addProductReview();
				});
			}
        })

});
