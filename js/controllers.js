angular.module('app.controllers', [])

.controller('loginCtrl', ['$scope', '$state', 'UsuariosService', 'SessaoService',
function ($scope, $state, UsuariosService, SessaoService) {
    $scope.loga = function(email, senha) {
        var usuario = UsuariosService.buscaPorEmailESenha(email, senha);
        if (usuario) {
            SessaoService.loga(usuario);
            $scope.$emit('login', usuario);
            $state.go('treinamentos');
        } else {
            alert('Email e/ou senha incorretos.');
        }
    };
}])

.controller('treinamentosCtrl', ['$scope', 'TreinamentosService',
function ($scope, TreinamentosService) {
    $scope.treinamentos = TreinamentosService.lista();
}])

.controller('treinamentoCtrl', ['$scope', '$stateParams', 'TreinamentosService',
function ($scope, $stateParams, TreinamentosService) {
    $scope.treinamento = TreinamentosService.buscaPorId($stateParams.id);
}]);
