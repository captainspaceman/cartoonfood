angular
.module('app')
.component('contact', {
    controller: 'ContactController',
    templateUrl: '/components/contact/template.html',
    bindToController: true //required for $scope to banner
})
.controller('ContactController',function($scope, UserFactory){
    $scope.user = UserFactory;
});