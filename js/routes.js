angular.module('app.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'pages/login.html',
    controller: 'loginCtrl'
  })

  .state('treinamentos', {
    url: '/treinamentos',
    templateUrl: 'pages/treinamentos.html',
    controller: 'treinamentosCtrl'
  })

  .state('treinamento', {
    url: '/treinamento/:id',
    templateUrl: 'pages/treinamento.html',
    controller: 'treinamentoCtrl'
  });

  $urlRouterProvider.otherwise('/login');

});
