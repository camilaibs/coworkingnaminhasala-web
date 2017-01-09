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
    var usuarios = [
        {
            email: 'camila@coworkingnaminhasala.com',
            senha: '123123'
        }
    ];

    var buscaPorEmailESenha = function(email, senha) {
        return usuarios.find(function(usuario) {
            return usuario.email === email && usuario.senha == senha;
        });
    };

    return {
        buscaPorEmailESenha: buscaPorEmailESenha
    };
}])

.service('TreinamentosService', ['$http', function($http){
    var treinamentos = [
        {
            id: 1,
            titulo: 'Backizinho fala comigo, por favor, por favor...',
            inicio: new Date(2017, 0, 8, 19, 0, 0, 0),
            fim: new Date(2017, 0, 8, 21, 0, 0, 0),
            onde: 'https://www.youtube.com/watch?v=8IaxMX9wkD0',
            emails: ['camila@coworkingnaminhasala.com', 'pessoinha@email.com', 'outro@email.com']
        },
        {
            id: 2,
            titulo: 'Vamos Back, abre o jogo, fala logo quem você é!',
            inicio: new Date(2017, 0, 11, 19, 0, 0, 0),
            fim: new Date(2017, 0, 11, 21, 0, 0, 0),
            onde: 'https://www.youtube.com/watch?v=bNfHHgVSKNM',
            emails: ['amila@coworkingnaminhasala.com', 'pessoinha@email.com', 'outro@email.com']
        }
    ];

    var lista = function() {
        return treinamentos;
    };

    var buscaPorId = function(id) {
        return treinamentos.find(function(treinamento) {
            return treinamento.id == id;
        });
    };

    return {
        lista: lista,
        buscaPorId: buscaPorId
    };
}]);
