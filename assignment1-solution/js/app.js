console.log("eymanwtf");
(function (){
    angular.module("LunchCheck",[])
    .controller("LunchCheckController",LunchCheckController);

    LunchCheckController.$inject = ["$scope"];

    function LunchCheckController($scope){  
    $scope.checkIfTooMuch = function () {
        if ($scope.input){
            console.log("thereyouare");
            var list = $scope.input.split(',');
            if (list.length>3){
                $scope.output="You ate too much!";
            }
            else {
                $scope.output="Enjoy!";
            }
        }
        else{
            $scope.output="Please enter data first";
        }
        
    };

    }
})();