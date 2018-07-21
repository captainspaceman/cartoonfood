angular
.module('app')
.component('work', {
    controller: 'WorkController',
    templateUrl: '/components/work/template.html',
    bindToController: true //required for $scope to work
})