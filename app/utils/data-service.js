app.service('DataService', function($firebaseArray, $firebaseObject, CONSTANTS){
	
	this.getTags = function(){
		return $firebaseArray(new Firebase(CONSTANTS.tags));
	}
	
	this.getQuestions = function(){
		return $firebaseArray(new Firebase(CONSTANTS.questions));
	}
	
	this.getQuestion = function(id){
		return $firebaseObject(new Firebase(CONSTANTS.questions + id));
	}
	
});