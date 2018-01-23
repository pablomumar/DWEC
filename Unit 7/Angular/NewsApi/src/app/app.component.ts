import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  function ($scope, $http) {
    $scope.home = "This is the homepage";

    $scope.getRequest = function () {
      console.log("I've been pressed!");
      $http.get("http://url.com/get?name=Elliot")
        .then(function successCallback(response){
          $scope.response = response;
        }, function errorCallback(response){
          console.log("Unable to perform get request");
        });
    };

  };
}
