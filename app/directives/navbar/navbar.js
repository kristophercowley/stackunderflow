app.directive('navbar', function(){
	return {
		restrict: 'AE',
		controller: function($scope, $state, AuthService){
			$scope.logout = function(){
				AuthService.logout();
				$state.go('home')
			}
		},
		templateUrl: 'app/directives/navbar/navbar.html'
	}
})