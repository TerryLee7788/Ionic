angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, Playlists) {
  $scope.playlists = Playlists.all();
})

.controller('PlaylistDetail', function($scope, $stateParams, Playlists) {
  $scope.playlist = Playlists.get($stateParams.playlistId);
})

.controller('BrowsesCtrl', function($scope, Browses, $http) {
    // var browseslists = [];

    // $http.get('http://localhost:8100/js/test_data.json')
    //     .success(function(data, status, headers, config){
    //         console.log('***success***')
    //         console.log(status)
    //     })
    //     .error(function(data, status, headers, config){
    //         console.log('***error***')
    //         console.log('data: %o, status: %o', data, status)
    //     })
    //     .then(function(res){
    //         console.log('then')
    //         $scope.browseslists = res.data;
    //         console.log('data: ', $scope.browseslists);
    //     })

  console.log('test: ', Browses.all());
  $scope.browseslists = Browses.all();
})