angular
.module('app')
.component('worktruecar',{
    controller: 'WorkTrueCarController',
    templateUrl: '/components/worktruecar/template.html',
    bindToController: true //required to make $scope work
})

.controller('WorkTrueCarController', function($scope, UserFactory,){
    $scope.user = UserFactory;
})