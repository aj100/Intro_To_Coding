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
      var num1Str = num1 ? num1 : ""
      var num2Str = num2 ? num2 : ""
      var currentNumStr = op ? num2Str : num1Str
      model.currentDisplay += currentNumStr + nextDigit
    }

    var clearClick = function() {
      num1 = undefined
      num2 = undefined
      op = undefined
      model.currentDisplay = ""
    }

    $scope.onNumberPress = onNumberPress
    $scope.model = model
    $scope.clearClick = clearClick

    $http({
      url: 'add', 
      method: "GET",
      params: {num1: 34, num2: 57}
    }).then(
  		  function(result){ console.log(result)},
  		  function(err){ console.log(err)}
	  	);
  	})
})();

