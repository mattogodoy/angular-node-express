// Creamos el módulo de la aplicación
var myApp = angular.module('myApp', []);

// Creamos un controlador para los cursos, utilizando la factory correspondiente
myApp.controller('CursosController', ['cursosFactory', '$scope', function(cursosFactory, $scope) {
  // Obtenemos los cursos
  $scope.cursos = cursosFactory.getCursos()
    .then(function(response) {
      // Datos obtenidos OK. Los pasamos al $scope
      $scope.cursos = response;
    }, function(error) {
      // Ocurrió un error
      console.log("ERROR:", error);
    });
}]);

// Creamos una nueva receta del tipo Factory para obtener los cursos del servidor
myApp.factory('cursosFactory', ['$http', '$q', function cursosFactory($http, $q) {
  var serverUrl = 'http://localhost:5001/getData';
  var cursosFactory = {};

  cursosFactory.getCursos = function(){
    // Obtenemos los cursos por HTTP y devolvemos una promesa
    return $http({ method: 'POST', url: serverUrl})
      .then(function(response){
        // Promesa cumplida! Devolvemos el listado de cursos
        return response.data;
      }, function(response) {
        // Ocurrió un problema. Rechazamos la promesa
        return $q.reject(response.data);
      });
  };

  return cursosFactory;
}]);