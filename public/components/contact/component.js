angular
.module('app')
.component('contact', {
    controller: 'ContactController',
    templateUrl: '/components/contact/template.html',
    bindToController: true //required for $scope to work
})
.controller('ContactController',function($scope, UserFactory){
    $scope.user = UserFactory;
});