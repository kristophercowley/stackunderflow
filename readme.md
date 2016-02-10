![StackUnderflow](assets/img/stackunderflow-alt.png)
================================================

Step 1: The Requirements
------------------------

> Good Questions are hard to come by.... and their answers even more so. As your client I am requesting you to build me an application that will be the next best thing since sliced bread. 

###My Application will need the following features.
1. A place for users to post questions.
2. Each question should be able to have its own list of responses and comments. 
3. Each Response can have its own list of comments.
4. Responses can be marked as solutions.
5. Questions, Responses, and comments can be upvoted or downvoted and should be ordered according to the most votes.
6. Questions should also be sortable by date.
7. Questions should be able to have topic tags attached to help with searching.
8. A search bar should be availble and will filter the questions based upon the query.


Using this Repo
---------------

This repo is using bower so after you fork and clone it down make sure to run bower i to grab all the dependencies. Then run http-server to start the app.

```terminal
> git clone https://github.com/BoiseCodeWorks/stackunderflow.git
> cd stackunderflow
> bower i
> http-server .
```

The app uses Firebase as its database. If you want to visualize your own data and setup your own security rules go to

```
/app/config/constants.js
```
Edit the root url to use your own firebase app

```javascript
app.constant('CONSTANTS', (function(){ 
	var root = 'https://<your-firebase-ref>.firebaseio.com/';
	var questions = root + 'questions/'
	var tags = root + 'tags/' 
	
	return {
		fbRef: root,
		questions: questions,
		tags: tags
	}
}()));
```

As you look through the repo you will see many comments in the component.js and .html files. 

For now you shouldn't have to worry to much about the routes or getting the necessary data from firebase as the majority of these tasks have already been resolved. 

You will however need to use the files at your disposal to add, edit, and build out the rest of the functionality for our StackUnderflow.

To get started fire up the app and register as a user to get a feel for how the app works. Then go back to the code and start adding the necessary requirements.

A good starting point would be either the dashboard-component.js or the questions-component.js and their respective views.

>##Heads Up
> The app will keep a user logged even with a page refresh. Anytime you want to access the memberObject from a controller you will need to use `$rootScope`

```javascript
app.controller('SomeController', function($rootScope){
	
	//You should never redefine $rootScope.member 
	console.log('If Logged in the memberObject will show up:', $rootScope.member)
	
	//To update the member object in Firebase call
	$rootScope.member.$save()
	
})
```

Accessing the member object from the view can simple be done with `{{member}}`

```html
<h1>{{member.firstName}} {{member.lastName}}</h1>
```

--------------------------------------------------------------

## Copyright

© BoiseCodeWorks LLC, 2016.

![bcw](https://boisecodeworks.com/assets/img/nav-logo.png)