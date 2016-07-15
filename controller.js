'use strict';
	var app=angular.module('TwitchTv',[]);
	app.controller('Twitch',['$scope','$http',function($scope,$http){
		
		$scope.streams=[];
		console.log("test1");
		var streamers=["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
		
		var api='https://api.twitch.tv/kraken/streams/';
		
		console.log("test2");
		$http.get(api)
			.success(function(data){ 
			var streams=data.streams;
			angular.forEach(streams,function(v,k){
			$scope.streams.push({ game: v.game,url:v.channel.url,preview:v.preview.small,name:v.channel.display_name});
			console.log(v.game);
				})
			}).
			error(function (data) {
			$scope.data = "Request failed";
			});
		/*$scope.fetch=function(){
			
			
		}*/
	}]);
