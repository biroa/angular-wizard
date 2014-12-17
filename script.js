"use strict";

var App = angular.module("setupWizard",["ngRoute"]);

App.controller("mainCtrl",function  ($scope,$routeParams) {
	
	var wizardSteps  = ['test1','test2','test3','test4','test5','finish'];
	var indexElement = wizardSteps.indexOf($routeParams['linkID']);
	var nameOfIndex  = $routeParams['linkID']; 
	var lastStep = wizardSteps[wizardSteps.length-1];

	$scope.wizard = {};
	$scope.wizard['finish'] = 'fa fa-flag-o';

	$scope.message = "hash index in the array:" + indexElement ;
	$scope.debug = $routeParams;

	if(nameOfIndex == lastStep){
	    $scope.wizard[lastStep] = 'fa fa-flag';
	}	

	
	for( var i = 0; i < wizardSteps.length; i++ ){
	    
	    if(wizardSteps[i] != lastStep){
		    if( i < indexElement  ) {
			$scope.wizard[wizardSteps[i]] = "fa fa-check-square-o";
	    	    } else if( i == indexElement ) {
			$scope.wizard[wizardSteps[i]] = "fa fa-check-square";		
		    } else {
	    	    $scope.wizard[wizardSteps[i]] = "fa fa-square-o";
		}
	    }
	    
	}
	
});

App.config(function  ($routeProvider,$locationProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider
	.when("/step/:linkID",{
		templateUrl : "wizardTemplate.html" , controller : "mainCtrl"
	})
	.otherwise({
		templateUrl : "wizardTemplate.html"
	});
});
