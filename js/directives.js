angular.module('app.directives', [])

.directive('navbar', function($timeout) {
  return {
    restrict: 'E',
    templateUrl: 'pages/navbar.html',
    controller: function ($rootScope, $scope, $state, SessaoService) {
      $scope.usuario = SessaoService.busca();

      $rootScope.$on('login', function(event, usuario) {
        $scope.usuario = usuario;
      });

      $scope.desloga = function() {
        SessaoService.desloga();
        $scope.usuario = null;
        $state.go('login');
      };

      $scope.redireciona = function() {
        if ($scope.usuario) {
          $state.go('treinamentos');
        } else {
          $state.go('login');
        };
      }
    }
  };
});