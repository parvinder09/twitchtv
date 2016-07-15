'use strict';
	var app=angular.module('TwitchTv',[]);
	app.controller('Twitch',['$scope','$http',function($scope,$http){
	
		
		$scope.all=function(){
		$scope.streams=[];
		
		console.log("test1");
		var streamers=["comster404","brunofin","freecodecamp","esl_sc2", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
			
			var twitchChannel=function(i){
				var api='https://api.twitch.tv/kraken/streams/'+streamers[i];
				var offapi='https://api.twitch.tv/kraken/channels/'+streamers[i];
				//console.log(api);
				console.log(streamers[i]);
				$http.get(api).success(function(data){
					var check=data.stream;
					console.log(streamers[i]+" " +check);
					if(check===null){
						$http.get(offapi).success(function(offdata){
						var preview
						if(offdata.logo==null){
						preview="https://static-cdn.jtvnw.net/ttv-static/404_preview-300x230.jpg";
						}
						else{
						preview=offdata.logo;
						}
							$scope.streams.push({name:offdata.name,game:"Offline",url:offdata.url,preview:preview});
						});
					}
					else if(check===undefined){
						$scope.streams.push({name:streamers[i],game:"Account Closed"});
					}
					else {
					var streams=data.stream;
					$scope.streams.push({ game: streams.channel.status,name:streams.channel.name,url:streams.channel.url,preview:streams.preview.small});
						}
					
				
				}).
			error(function (data) {
				var pre="https://static-cdn.jtvnw.net/ttv-static/404_preview-300x230.jpg";
				$scope.streams.push({name:streamers[i],game:"Account Closed",preview:pre,url:"https://www.twitch.tv/"});
			});
				
			}
			for(var i=0;i<streamers.length;i++){
				twitchChannel(i);
			}
			}
			$scope.online=function(){
		$scope.streams=[];
		
		console.log("test1");
		var streamers=["comster404","brunofin","freecodecamp","esl_sc2", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
			
			var twitchChannel=function(i){
				var api='https://api.twitch.tv/kraken/streams/'+streamers[i];
				var offapi='https://api.twitch.tv/kraken/channels/'+streamers[i];
				//console.log(api);
				console.log(streamers[i]);
				$http.get(api).success(function(data){
					var check=data.stream;
					var undef="undefined";
					console.log(check);
					if(check!=null){
					var streams=data.stream;
					$scope.streams.push({ game: streams.channel.status,name:streams.channel.name,url:streams.channel.url,preview:streams.preview.small});
					}
				});
				
			}
			for(var i=0;i<streamers.length;i++){
				twitchChannel(i);
			}
			}
			
			$scope.offline=function(){
		$scope.streams=[];
		
		console.log("test1");
		var streamers=["comster404","brunofin","freecodecamp","esl_sc2", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
			
			var twitchChannel=function(i){
				var api='https://api.twitch.tv/kraken/streams/'+streamers[i];
				var offapi='https://api.twitch.tv/kraken/channels/'+streamers[i];
				//console.log(api);
				console.log(streamers[i]);
				$http.get(api).success(function(data){
					var check=data.stream;
					var undef="undefined";
					console.log(check);
					if(check===null){
						$http.get(offapi).success(function(offdata){
						var preview
						if(offdata.logo==null){
						preview="https://static-cdn.jtvnw.net/ttv-static/404_preview-300x230.jpg";
						}
						else{
						preview=offdata.logo;
						}
							$scope.streams.push({name:offdata.name,game:"Offline",url:offdata.url,preview:preview});
						});
					}	
				}).
			error(function (data) {
				var pre="https://static-cdn.jtvnw.net/ttv-static/404_preview-300x230.jpg";
				$scope.streams.push({name:streamers[i],game:"Account Closed",preview:pre,url:"https://www.twitch.tv/"});
			});
			}
			for(var i=0;i<streamers.length;i++){
				twitchChannel(i);
			}
			}
	}]);
