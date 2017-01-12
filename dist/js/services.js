/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
angular.module('app.services', [])

.service('SessaoService', [function(){
    var loga = function(usuario) {
        var usuarioJson = angular.toJson(usuario);
        localStorage.setItem('usuario', usuarioJson);
    };

    var busca = function(usuario) {
        var usuarioJson = localStorage.getItem('usuario');
        return angular.fromJson(usuarioJson);
    };

    var desloga = function() {
        localStorage.removeItem('usuario');
    };

    return {
        loga: loga,
        busca: busca,
        desloga: desloga
    };
}])

.service('UsuariosService', ['$http', function($http){
    var api = 'http://localhost:8080';

    var buscaPorEmailESenha = function(email, senha) {
        var usuario = {
            email: email,
            senha: senha
        };
        return $http.post(api + '/', usuario);
    };

    return {
        buscaPorEmailESenha: buscaPorEmailESenha
    };
}])

.service('TreinamentosService', ['$http', function($http){
    var api = 'http://localhost:8080';

    var lista = function() {
        return $http.get(api + '/treinamentos');
    };

    var buscaPorId = function(id) {
        return $http.get(api + '/treinamentos/' + id);
    };

    return {
        lista: lista,
        buscaPorId: buscaPorId
    };
}]);
