/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
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
