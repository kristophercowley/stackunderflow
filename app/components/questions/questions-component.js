app.controller('QuestionsController', function($scope, AuthService, DataService){
	AuthService.authMember();
});

app.controller('QuestionController', function($scope, AuthService, DataService){
	AuthService.authMember();
});