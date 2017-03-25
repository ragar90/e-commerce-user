'use strict';

/**
 * @ngdoc function
 * @name eCommerceUserApp.controller:NotifyCtrl
 * @description
 * # NotifyCtrl
 * Controller of the eCommerceUserApp
 */
angular.module('eCommerceUserApp')
  .controller('NotifyCtrl', ['$routeParams', 'Notify',  "$location", "sessionService", 'endpoint', "$scope",function ($routeParams, Notify,  $location, sessionService, endpoint, $scope) {
		var _this=this;
		var saveOrder = Notify.saveOrder;
		var sO = new saveOrder();
		sO
		.$get({guest_token:sessionService.get("token")},function(data){
		  if(data.status == "success") {
			_this.success = data;
		  }
		},function(data){
		  if(data.status == "401") {
			sessionService.get("token");
		  }
		})
	}])