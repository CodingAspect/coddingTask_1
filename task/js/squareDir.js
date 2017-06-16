app.directive('square', ['$timeout', function($timeout){
	return {
		scope:{
			key: '=',
			name: '=',
			position: '=',
			transitions: '='
		},
		restrict: 'E',
		replace:true,
		template: '<div class="square" id="{{key}}" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}"></div>',
		link: function($scope, $element, $attrs){
			$scope.draw = function(){
				var connector = {
					connector:'StateMachine',
					paintStyle:{lineWidth:2, strokeStyle:'#208EC9'},
					endpoint:'Blank',
					anchor:'Continuous',
					overlays:[['PlainArrow', {location:1, width:15, length:10}]]
				};
				for(var key in $scope.transitions){
					jsPlumb.connect({
						source: $scope.key,
						target: $scope.transitions[key]
					}, connector);
				}
			};

			$timeout($scope.draw); // Start drawing after first $digest
		}
	};
}]);