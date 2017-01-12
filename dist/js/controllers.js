/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
angular.module('app.controllers', [])

.controller('loginCtrl', ['$scope', '$state', 'UsuariosService', 'SessaoService',
function ($scope, $state, UsuariosService, SessaoService) {
    $scope.loga = function(email, senha) {
        UsuariosService.buscaPorEmailESenha(email, senha).then(
            function(resposta) {
                var usuario = resposta.data;
                SessaoService.loga(usuario);
                $scope.$emit('login', usuario);
                $state.go('treinamentos');
            },
            function(resposta) {
                alert(resposta.data);
            }
        );
    
    };
}])

.controller('treinamentosCtrl', ['$scope', 'TreinamentosService',
function ($scope, TreinamentosService) {
    TreinamentosService.lista().then(
        function(resposta) {
            $scope.treinamentos = resposta.data;
        },
        function(resposta) {
            alert(resposta.data);
        }
    );
}])

.controller('treinamentoCtrl', ['$scope', '$stateParams', 'TreinamentosService',
function ($scope, $stateParams, TreinamentosService) {
    TreinamentosService.buscaPorId($stateParams.id).then(
        function(resposta) {
            var treinamento = resposta.data;
            
            var inicio = new Date();
            inicio.setTime(treinamento.inicio);
            treinamento.inicio = inicio;

            var fim = new Date();
            fim.setTime(treinamento.fim);
            treinamento.fim = fim;

            $scope.treinamento = treinamento;
        },
        function(resposta) {
            alert(resposta.data);
        }
    );
}]);
