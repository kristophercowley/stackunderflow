app.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'app/components/home/home.html',
		controller: 'HomeController',
		controllerAs: 'hc'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'app/components/auth/login.html',
		controller: 'LoginController',
		controllerAs: 'lc'
	})
	.state('questions', {
		url: '/questions',
		templateUrl: 'app/components/questions/questions.html',
		controller: 'QuestionsController',
		controllerAs: 'qsc'
	})
	.state('question', {
		url: '/questions/:id',
		templateUrl: 'app/components/questions/question.html',
		controller: 'QuestionController',
		controllerAs: 'qc',
		resolve: {
			question: function($stateParams, DataService){
				return DataService.getQuestion($stateParams.id);
			},
			comments: function($stateParams, DataService){
				return DataService.getComments($stateParams.id);
			},
			responses: function($stateParams, DataService){
				return DataService.getResponses($stateParams.id);
			}
		}
	})
	.state('auth', {
		url: '/user',
		abstract: true,
		template: '<ui-view></ui-view>',
		controller: 'AuthController'
	})
	.state('auth.dashboard', {
		url: '/dashboard',
		templateUrl: 'app/components/dashboard/dashboard.html',
		controller: 'DashboardController',
		controllerAs: 'dc'
	})
})

app.run(function($rootScope, $state, AuthService){
	$rootScope.$on('$stateChangeStart', function(event, toState, toStateParams){
		AuthService.authMember();
	});
})