angular
.module('app')
.component('workxero',{
    controller: 'WorkXeroController',
    templateUrl: '/components/workxero/template.html',
    bindToController: true
})
controller('WorkXeroController', function($scope, UserFactory,){
    $scope.user = UserFactory;
});