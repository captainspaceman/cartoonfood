angular
.module('app')
.component('workbrickhouse', {
    controller: 'WorkBrickHouseController',
    templateUrl: ('/components/workbrickhouse/template.html'),
    bindToController: true
})
.controller('WorkBrickHouseController', function($scope, UserFactory){
    $scope.user = UserFactory;
});