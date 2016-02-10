app.constant('CONSTANTS', (function(){ 
	var root = 'https://stackunderflow.firebaseio.com/';
	var questions = root + 'questions/'
	var tags = root + 'tags/' 
	
	return {
		fbRef: root,
		questions: questions,
		tags: tags
	}
}()));