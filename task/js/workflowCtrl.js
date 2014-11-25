'use strict';
var app = angular.module('app',[]);

app.controller('workflowCtrl', ['$scope', '$http', function($scope, $http){

	$scope.workflow = 'workflow';
	$scope.squares = [];

	$http.get('js/data.json').success(function(data){
		var expectArr = ['names', 'positions', 'transitions', 'container'];
		for(var i=0; i<expectArr.length; i++){
			if(! data.hasOwnProperty(expectArr[i])) return false;
		}

		$scope.workflow = data.container;
		for(var key in data.names){
			$scope.squares.push({
				key: key,
				name: data.names[key],
				position: data.positions[key] || {top:0, left:0},
				transitions: data.transitions[key] ? data.transitions[key].split(',') : []
			});
		}
	});
}]);