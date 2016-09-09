var reminder = angular.module('reminder',[]);
    reminder.controller('mainCtrl',['$scope',
        function($scope){
//           右侧的选项卡的圆球
           $scope.cricle = [ 'green','yellow','blue','orange','purple','brow','pink' ];
           $scope.scricle =$scope.cricle[0];
           $scope.setcricle =function(i){
           	   $scope.scricle =$scope.cricle[i];
           }
           
//         原始的数组
           $scope.database = [
               {   id:1000,
                   threm:'green',
                   listname:'新列表1',
                   todos:[
                       {id:0,name:'内容列表1',isDone:false}
                   ]
               }
           ];
            $scope.currentlist = $scope.database[0];
            $scope.setcurrent = function(i){
                $scope.currentlist = $scope.database[i];
            }
            
        //  添加一条数组
            $scope.addlist = function(){
            	var len =$scope.database.length;
            	    
            	var newarr =
               {   id:'1001'+len,
                   threm: $scope.cricle[len%7],
                   listname:'新列表'+(len+1),
                   todos:[
                       {id:0,name:'内容列表1',isDone:false}
                   ]
               };
             
                  $scope.database.push(newarr)
             };
//           删除一条数组
            $scope.removelist = function(id){
            	  $scope.database.slice(id,1)
            }




//          右边的Li添加一条li
            $scope.addli = function(){
            	var arr ={
            		id:3,name:'新建内容',isDone:false
            	}
            	$scope.currentlist.todos.push(arr)
            }
             
             
        }]);