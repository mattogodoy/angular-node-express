function GetData($scope, $http) {
  var serverUrl = 'http://localhost:5001/getData';
  setTimeout(function() {
    $http({
      method: 'POST',
      url: serverUrl
    })
      .success(function(data) {
        $scope.profesores = data; // respuesta del servidor
      });
  }, 2000);
}