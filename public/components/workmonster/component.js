angular
.module('app')
.component('workmonster', {
    controller: 'WorkMonsterController',
    templateUrl: '/components/workmonster/template.html',
    bindToController: true //required for $scope to work properly
})
.controller('WorkMonsterController', function($scope, UserFactory){
    $scope.user = UserFactory;
})