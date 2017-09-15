'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the portfolioApp
 */
angular.module('babyBelugaApp')
  .controller('ContactCtrl', function () {
this.title = 'Contact Me';
this.statement = 'erbarnacle@gmail.com';
this.namePLaceholder = 'Your Name';
this.emailPlaceholder = 'Your Email Address';
this.msgPlaceholder = 'Type Your Message';
this.send = 'Send';
  });
