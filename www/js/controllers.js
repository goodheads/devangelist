angular.module('devangelist.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('DeveloperCtrl', function($scope, $ionicLoading, Developers) {
  $scope.developers = [];

  $ionicLoading.show({
    template: '<i class="ion-loading-c"></i>',
    noBackdrop: true
  });

  Developers.getData().then(function(developers){
    $scope.developers = developers;
    console.log("Developers", $scope.developers);
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }
})

.controller('LocationCtrl', function($scope) {

})

.controller('AboutCtrl', function($scope, $stateParams) {
});


