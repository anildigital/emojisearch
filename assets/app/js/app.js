'use strict';

/* App Module */

angular.module('emojicopy', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/emojis', {templateUrl: 'partials/emoji-list.html',   controller: EmojiListCtrl}).
      otherwise({redirectTo: '/emojis'});
}]);
