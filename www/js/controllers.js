angular.module('starter.controllers', [])

 
.controller('CalCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

 //  $scope.firstNumber="";
 //  $scope.secondNumber="";
 //  $scope.result="";
 //  $scope.operator="";

 // $scope.buttonTouched = function (num) {
 //  console.log(num);
 //  if($scope.firstNumber!="")
 //  {
 //      if(num == '+' || num == "-" || num == '/' || num == '*')
 //      {
 //        $scope.operator=num;

         
 //         if($scope.secondNumber!="")
 //         {
 //               $scope.doCalc(num);
 //         }
 //         else

 //         {
 //          $scope.result =$scope.result + num;
 //         }
 //      }
 //       else
 //      {
 //        $scope.secondNumber=num;
 //        $scope.result =$scope.result + num;
 //      }
   
 //  }
 //  else
 //  {
 //       if($scope.operator=="")
 //      {
 //        $scope.firstNumber=num;
 //        $scope.result =$scope.result + num;
 //      }
     
 //  }
 //  if($scope.operator=="=")
 //  {
 //        var val = $scope.firstNumber + $scope.operator + $scope.secondNumber
 //        console.log('String value of equation >> ' + val)
 //        var cal = eval(val)
 //        $scope.result = cal
 //  }

 // };

 // $scope.doCalc=function (sign) {
 //   // body...
 //   $scope.result= $scope.firstNumber + sign + $scope.secondNumber;
 // };
   $scope.firstOperand = "";
  $scope.secondOperand = "";
  $scope.isFirstOperand = true
  $scope.operator = "";
  $scope.isCalculationDone = false;
  $scope.result = "";
  $scope.buttonTouched = function (num) {
     console.log(num);
    if ($scope.isCalculationDone) {
      $scope.isCalculationDone = false
      $scope.isFirstOperand = true
      $scope.operator = "";
      $scope.firstOperand = "";
      $scope.secondOperand = "";
      $scope.result = "0.0";
    }
    if (num == 'AC') {
      $scope.isCalculationDone = false
      $scope.isFirstOperand = true
      $scope.operator = "";
      $scope.firstOperand = "";
      $scope.secondOperand = "";
      $scope.result = "0.0";
    } else if (num == '+' || num == "-" || num == '/' || num == '*') {
      console.log("Operator")
      console.log(num);
      if ($scope.isFirstOperand!="") {
        $scope.operator = num
        $scope.result = $scope.result + num
        $scope.isFirstOperand = false
      }
      else if($scope.calcdone==true)
      {
        $scope.operator = num
        $scope.result = $scope.result + num
        $scope.isFirstOperand = false
      }
    } else if (num == '=') {
      // console.log($scope.isFirstOperand);
      // console.log($scope.firstOperand);
      // console.log($scope.operator);
      // console.log($scope.secondOperand);
      if (!$scope.isFirstOperand) {
        var val = $scope.firstOperand + $scope.operator + $scope.secondOperand
        console.log('String value of equation >> ' + val)
        var cal = eval(val)
        $scope.result = cal
        $scope.r=cal;
        $scope.isCalculationDone = false
        $scope.calcdone=true;
        $scope.firstOperand=cal
        $scope.secondOperand=0
        $scope.operator=="";
        console.log('operator' + $scope.operator);
      //  console.log(cal)
      }
    }
    else if(num=="+/-")
    {
      console.log($scope.secondOperand)
            console.log($scope.operator)
      if(($scope.secondOperand=="" || $scope.secondOperand==0) && $scope.operator=="")
      {
        if($scope.firstOperand!="")
        {
          $scope.result=$scope.result * -1
        }
      }
      console.log("Reached here");
    } else {
      if ($scope.isFirstOperand) {
        $scope.firstOperand = $scope.firstOperand + num;
      } else {
        $scope.secondOperand = $scope.secondOperand + num;
      }
      if ($scope.result == '0.0') {
        $scope.result = ""
      }
      $scope.result = $scope.result + num;
    }
  }

$scope.test = "Calculator";

})

.controller('InfoCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
