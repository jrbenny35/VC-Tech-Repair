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
        })
        .state('repairFormEdit', {
          url: '/repair_form/:id/edit',
          templateUrl: 'partials/repair',
          controller: 'RepairFormEditCtrl'
        })
        .state('repairFormView', {
          url: '/repair_form/:id/view',
          templateUrl: 'partials/repairView',
          controller: 'RepairFormViewCtrl'
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

'use strict';

var module = angular.module('controllers',[
]);

module.controller('LeftNavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function () {
        $mdSidenav('left').toggle();
    };


    $scope.close = function () {
        $mdSidenav('left').close();
    }

}]);

module.controller('RepairFormCtrl', ['$scope', 'Repair', '$state', function ($scope, Repair, $state){

    $scope.repair = new Repair();

    $scope.repair.date = new Date();

    $scope.saveRepairForm = function(){
        $scope.repair.$save().then(function(){
            $state.go('admin');
        })
    }//End save function

}]);

module.controller('RepairFormEditCtrl', ['$scope', 'Repair', '$state', '$stateParams', function ($scope, Repair, $state, $stateParams){

  //Edit Post
  $scope.repair = Repair;
  $scope.repair = Repair.get({id: $stateParams.id});

  $scope.saveRepairForm = function(){
      $scope.repair.$save().then(function(){
          $state.go('admin');
      })
  }//End save function


}]);

module.controller('RepairFormViewCtrl', ['$scope', 'Repair', '$state', '$stateParams', function ($scope, Repair, $state, $stateParams){

    $scope.repair = Repair.get({id: $stateParams.id});

}]);


module.controller('AdminCtrl', ['$scope', 'Repair', '$state', function ($scope, Repair, $state){

    $scope.repair = Repair.query();

    // Delete Post
    $scope.deletePost = function(repairId) {
      Repair.delete({id: repairId});
  };//End Delete Post function


}]);
