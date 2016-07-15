'use strict';
	var app=angular.module('TwitchTv',[]);
	app.controller('Twitch',['$scope','$http',function($scope,$http){
		
		$scope.streams=[];
		$scope.onstream=[];
		console.log("test1");
		var streamers="esl_sc2";
			console.log("test1");
			$scope.fetchOffline=function(streamers){
				var offlineapi='https://api.twitch.tv/kraken/channels/'+streamers;
				$http.get(offlineapi)
				.success(function(data){
				return data;
				})
				.error(function (data) {
				$scope.data = "Request failed";
				});
				return data;
			}
			
			 var fetchonline=function(streamers){
			
				var onlineapi='https://api.twitch.tv/kraken/channels/'+streamers;
			
				console.log(onlineapi);
				$http.get(onlineapi)
				.success(function(data){
				console.log(data.name);
				 var onstream=data;
				$scope.onstream.push({name:onstream.name,url:onstream.url});
				 //console.log(onstream);
				})
				.error(function (data) {
				$scope.data = "Request failed";
				});
				
			}
			
				var api='https://api.twitch.tv/kraken/streams/'+streamers;
				console.log(api);
				
				
				var offapi='https://api.twitch.tv/kraken/channel/'+streamers;
				//var offline;
				var all=$http.get(api).success(function(data){ 
				var check=data.stream;
				console.log(check);
				/*if(check==""){
					var offdata=fetchOffline(streamers);
					$scope.streams.push({name:offdata.name,game:'Offline'});
				}*/
				
				if(check==null){
				 return $http.get(offapi)
				 .then(function(offdata){
					return offdata;
				 });
				//console.log(offdata.name);
				//$scope.streams.push({name:data.name,game:"Offline"});
				//return offdata;			
				}
				else{
					var streams=data.stream;
					$scope.streams.push({ game: streams.channel.status,name:streams.channel.name,url:streams.channel.url,preview:streams.preview.small});
				
				}
					//fetchonline(streamers);
					
			
				//	$scope.streams.push({name:fetchonlinedata.name});
				
				});
				all.then(function(offdata){
					console.log(offdata.name);
					$scope.streams.push({name:offdata.name,game:"Offline"});
				});
		
		/*$scope.fetch=function(){
			
			
		}*/
	}]);
