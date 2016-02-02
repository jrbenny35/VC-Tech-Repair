'use strict';

var myApp = angular.module('VCTR',[

    'ui.router',
    'ngAnimate',
    'controllers',
    'ngResource',
    'ngMaterial',
    'ngMessages',
    'ngMdIcons',
    'angularMoment'

]);

myApp.config(function ($stateProvider, $locationProvider) {


    $stateProvider
        .state('admin', {
            url: '/',
            templateUrl: 'partials/admin',
            controller: 'AdminCtrl'
        })
        .state('repairForm', {
            url: '/repair_form',
            templateUrl: 'partials/repair',
            controller: 'RepairFormCtrl'
        });


    $locationProvider.html5Mode(true);
});

myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');

});

//Resources
myApp.factory('Repair', function ($resource) {
   return $resource('/api/repair/:id', {id: '@_id'},
   {
     update: {
       method: 'PUT',
       params: {
         id: '@id'
       }
     },
   });
});

myApp.config(function ($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function (date) {
        return moment(date).format('LL');
    };
});
