  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2p_KEIpuFWLy7PCQFLowxoK7l6Lun1nU",
    authDomain: "cartoon-food-website.firebaseapp.com",
    databaseURL: "https://cartoon-food-website.firebaseio.com",
    projectId: "cartoon-food-website",
    storageBucket: "cartoon-food-website.appspot.com",
    messagingSenderId: "946637767561"
  };
  firebase.initializeApp(config);

angular
.module('app', ['ui.router','firebase', 'ui.bootstrap', 'ui.grid', 'ui-notification', 'app.home', 'app.admin'])
.config(function($urlRouterProvider, NotificationProvider){
    $urlRouterProvider.otherwise('/');

    NotificationProvider.setOptions({
        delay: 5000,
        startTop: 50,
        startRight: 40,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'bottom'
    });
})
// Below is the beginner way to configure application variables
// When you are ready for various environments:
// https://www.jvandemo.com/how-to-configure-your-angularjs-application-using-environment-variables/
.constant('config', {
    //see components/user/components.js
    defaultState: 'home',
    defaultAdminState: 'admin.users'
})

//07202018 moves all of the js from the /home and /admin folders to this js file. 
//home
angular
.module('app.home',[])
.config(function($stateProvider){
  $stateProvider
});

  // .state({
  //   name: 'home',
  //   url: '/',
  //   controller: 'HomeController',
  //   templateUrl: 'app/home/home.html'
  // })

//admin
angular
.module('app.admin',[])
.config(function($stateProvider){
    $stateProvider
});