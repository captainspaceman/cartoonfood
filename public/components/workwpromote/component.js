angular
.module('app')
.component('workwpromote',{
    controller: 'WorkWpromoteController',
    templateUrl: 'components/workwpromote/template.html',
    bindtoController: true
})
.controller('WorkWpromoteController', function($scope, UserFactory,){
    $scope.user = UserFactory;
});