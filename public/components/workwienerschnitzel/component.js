angular
.module('app')
.component('workwienerschnitzel',{
    controller:'WorkWienerschnitzelController',
    templateUrl:'/components/workwienerschnitzel/template.html',
    bindToController: true
})
.controler('WorkWienerschnitzelController', function($scope, UserFactory,){
    $scope.user = UserFactory;
});