'use strict';

angular.module('webdesignApp')
  .controller('EnglishCtrl', function ($scope,$http)
  	{
  		$http.get('english.json')
	.success(function(data){
		$scope.Nom=data.Nom;
		$scope.Prenom=data.Prenom;
		$scope.Date=data.Date;
		$scope.Ville=data.Ville;
		$scope.EducationFirst=data.EducationFirst;
		$scope.EducationSecond=data.EducationSecond;
		$scope.ExperienceFirst=data.ExperienceFirst;
		$scope.ExperienceSecond=data.ExperienceSecond;
		$scope.LanguageFirst=data.LanguageFirst;
		$scope.LanguageSecond=data.LanguageSecond;
		$scope.LanguageThird=data.LanguageThird;
		$scope.Interest=data.Interest;
	});
  	});