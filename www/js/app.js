angular.module('caloriesapp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
          $stateProvider
		//this is the intro state with the App instructions		
		  .state('intro', {
          url: '/',
          templateUrl: 'intro.html'
        })

          .state('calories', {
            url: '/calories',
            abstract: true,
            templateUrl: "calories.html"
          })
		//this is the breakfast state URL
          .state('calories.breakfast', {
            url: '/breakfast',
            views: {
              'breakfast': {
                templateUrl: 'breakfast.html',
              }
            }
          })
		//this is the Lunch state URL
          .state('calories.lunch', {
            url: '/lunch',
            views: {
              'lunch': {
                templateUrl: 'lunch.html',
              }
            }
          })
		//this is the dinner state URL
          .state('calories.dinner', {
            url: '/dinner',
            views: {
              'dinner': {
                templateUrl: 'dinner.html',
              }
            }
          });
		//the defaulted URL state is the intro state
          $urlRouterProvider.otherwise('/');

        });