angular
.module('app')
.component('workchase',{
    controller:'WorkChaseContoller',
    templateUrl:'components/workchase/template.html',
    bindToController: true
})
.controller('WorkChaseController', function($scope, UserFactory){
    $scope.user = UserFactory;
});