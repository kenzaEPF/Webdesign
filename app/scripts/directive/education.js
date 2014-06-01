'use strict';
angular
    .module('webdesignApp').directive('educationDisplay',function(){
        return{
           
            restrict:'AEC',
            templateUrl:'views/education.html'
        }
    });