app.controller('QuestionsController', function($scope, AuthService){
	AuthService.authMember();
});

app.controller('QuestionController', function($scope, AuthService){
	AuthService.authMember();
});