'use strict';

/**
 * @ngdoc overview
 * @name babyBelugaApp
 * @description
 * # babyBelugaApp
 *
 * Main module of the application.
 */
angular
  .module('babyBelugaApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  	$urlRouterProvider.otherwise('/');

  	$stateProvider
  	.state('home', {
  		url: '/',
  		templateUrl: 'views/home.html',
  		controller: 'HomeCtrl as home'
  	})
  	.state('about', {
  		url: '/about',
  		templateUrl: 'views/about.html',
  		controller: 'AboutCtrl as about'
  	})
  	.state('portfolio', {
  		url: '/portfolio',
  		templateUrl: 'views/portfolio.html',
  		controller: 'PortfolioCtrl as portfolio'
  	})
  	.state('pricing', {
  		url: '/pricing',
  		templateUrl: 'views/pricing.html',
  		controller: 'PricingCtrl as pricing'
  	})
  	.state('contact', {
  		url: '/contact',
  		templateUrl: 'views/contact.html',
  		controller: 'ContactCtrl as contact'
  	});
 }]);
