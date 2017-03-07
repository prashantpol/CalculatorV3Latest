angular.module('starter.controllers', [])

 
.controller('CalCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

$scope.firstOperand="";
$scope.result="";
$scope.buttonTouched=function (num) {
  $scope.firstOperand=$scope.firstOperand+num;
  $scope.result=$scope.firstOperand;
  console.log('clicked');
}

$scope.test="Calculator";


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
