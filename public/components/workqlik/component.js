angular
.module('app')
.component('workqlik',{
    controller: 'WorkQlikController',
    templateUrl: 'components/workqlik/template.html',
    bindToController: true
})
.controller('WorkQlikController', function($scope, UserFactory){
    $scope.user = Userfactory;
});