angular.module('devangelist.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('DeveloperCtrl', function($scope, $ionicLoading, Developers) {

  $scope.developers = [];

  $ionicLoading.show({
    template: '<i class="ion-loading-c"></i>',
    noBackdrop: true
  });

  var end = 20;

  Developers.getData().then(function(developers){
    $scope.developers = developers;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.loadMore = function() {
    Developers.getMoreData(end).then(function(developers){
      $scope.developers = developers;
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
    end += 10;
  };

  $scope.goToUrl = function(url){
    window.open(url, '_blank', 'location=yes');
  }
})

.controller('LocationCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope, $stateParams) {

  $scope.goToUrl = function(url){
    window.open(url, '_blank', 'location=yes');
  }

});


