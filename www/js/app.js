// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','pascalprecht.translate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$translateProvider) {

var en_translations = {
    "1" : "1. Add button give's addition of two numbers",
    "2" : "2. Subract button gives subraction of two numbers" ,
    "3" : "3. Division button gives division of two numbers" ,
    "4" : "4. Multiply numbers gives multiplication of two numbers" 


  }
  
  var hi_translations = {
     "1" : "1. जोड़ें बटन आपको दो संख्याओं को जोड़ते हैं",
    "2" : "2. घटाएं बटन दो नंबरों का खंडन देता है" ,
    "3" : "3. डिवीजन बटन में दो नंबर का विभाजन होता है" ,
    "4" : "4. गुणा संख्या दो संख्याओं का गुणन देता है" 
 
  }

   var mr_translations = {
     "1" : "1. दोन संख्यांचा जोडा बटण देणे च्या व्यतिरिक्त",
    "2" : "2. घटाएं बटन दो नंबरों का खंडन देता है" ,
    "3" : "3. डिवीजन बटन में दो नंबर का विभाजन होता है" ,
    "4" : "4. गुणाकार संख्या दोन संख्यांचा गुणाकार देते" 
 
  }
  

   var gr_translations = {
     "1" : "1. બે નંબરો ઉમેરો બટન આપી વધુમાં",
    "2" : "2. બાદબાકી બટન બે નંબરો બાદબાકી" ,
    "3" : "3. વિભાગ બટન બે નંબરો વિભાજન આપે" ,
    "4" : "4. ગુણાકાર નંબરો બે નંબરો ગુણાકાર આપે" 
 
  }
  
  
  $translateProvider.translations('en',en_translations);
  
  $translateProvider.translations('hi',hi_translations);

    $translateProvider.translations('mr',mr_translations);

  $translateProvider.translations('gr',gr_translations);

  
  $translateProvider.preferredLanguage('en');
  
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.calculatorhome', {
    url: '/calculatorhome',
    views: {
      'tab-calculatorhome': {
        templateUrl: 'templates/tab-calculatorhome.html',
        controller: 'CalCtrl'
      }
    }
  })
 

  .state('tab.information', {
    url: '/information',
    views: {
      'tab-information': {
        templateUrl: 'templates/tab-information.html',
        controller: 'InfoCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/calculatorhome');

});
