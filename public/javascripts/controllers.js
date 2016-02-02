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

    $scope.saveRepairForm = function(){
        $scope.repair.$save().then(function(){
            $state.go('admin');
        })
    }//End save function

}]);

module.controller('AdminCtrl', ['$scope', 'Repair', '$state', function ($scope, Repair, $state){

    $scope.repair = Repair.query();

    // Delete Post
    $scope.deletePost = function(repairId) {
      Blog.delete({id: repairId});
      $state.go('admin');
  };//End Delete Post function


}]);
