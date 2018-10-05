angular
.module('app')
.component('workprincess',{
    controller: 'ContactPrincessController',
    templateUrl: 'components/workprincess/template.html',
    bindToController: true
})
.controller('ContactPrincessController', function($scope, UserFactory){
    $scope.User = UserFactory;
});