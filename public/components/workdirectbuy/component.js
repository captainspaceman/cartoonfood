angular
.module('app')
.component('workdirectbuy',{
    controller: 'WorkDirectBuyController',
    templateUrl: 'components/workdirectbuy/template.html',
    bindToController: true
})
.controller ('WorkDirectBuyController', function($scope, UserFactory){
    $scope.user = UserFactory;
});