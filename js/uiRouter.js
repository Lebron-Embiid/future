var app = angular.module("myapp",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	//默认打开的页面
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state('index',{
		url:'/index',
		views:{
			'':{
				templateUrl:"view/index.html"
			},
			'nav@index':{
				templateUrl:"view/nav.html"
			},
			'content@index':{
				templateUrl:"view/content.html"
			},
			'footer@index':{
				templateUrl:"view/footer.html"
			}
		}
	}).state('about',{
		parent:'index',
		// url:'/username',
		views:{
			'content@index':{
				templateUrl:"view/about.html"
			}
		}
	}).state('article',{
		parent:'index',
		// url:'/user1',
		views:{
			'content@index':{
				templateUrl:"view/article.html"
			}
		}
	})
})