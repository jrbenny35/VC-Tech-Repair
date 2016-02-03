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
