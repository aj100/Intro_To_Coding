(function() {
  'use strict';  
  
  angular
    .module('calculatorApp', [])
	.controller('calculatorCtrl', function($http, $scope) {
	  
    var num1;
    var num2;
    var op;
    var model = {
      currentDisplay : ""
    }

    var onNumberPress = function(nextDigit) {
      var result;

      if(op) {
        result = (num2 ? num2 : "") + "" + nextDigit;
        num2 = parseInt(result);
      } else {
        result = (num1 ? num1 : "") + "" + nextDigit;
        num1 = parseInt(result);
      }

      model.currentDisplay = result;
    }

    var clear = function() {
      num1 = undefined
      num2 = undefined
      op = undefined
      model.currentDisplay = ""
    }

    var opPress = function(operation){
      op = operation
    }

    var execute = function() {
      if(!num1 || !num2 || !op)
        return;

      var getParams = {
        url : op,
        method : 'GET',
        params : {num1 : num1, num2 : num2}
      }

      var onSuccess = function(result) {
        clear();
        model.currentDisplay = result.data.result + "";
      } 

      var onFail = function(err) {
        alert(err.statusText)
      }

      $http(getParams).then(onSuccess, onFail)
    }

    $scope.onNumberPress = onNumberPress
    $scope.model = model
    $scope.clear = clear
    $scope.opPress = opPress
    $scope.execute = execute
  });

})();

