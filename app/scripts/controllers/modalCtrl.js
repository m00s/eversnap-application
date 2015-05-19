angular.module('eversnapApp.controllers')
  .controller('ModalInstanceCtrl', function ($scope, $modalInstance, photoId, Facebook, AccessToken) {
    $scope.photoId = photoId;
    $scope.access_token = AccessToken.get();

    $scope.getPhoto = function() {
      Facebook.api('/' + photoId + '?access_token=' + $scope.access_token, function(response) {
        $scope.photo = response;
      });
    };

    $scope.getUser = function() {
      Facebook.api('/me', function(response) {
        $scope.user = response;
        Facebook.api('/' + $scope.user.id + '/picture', function(response) {
          $scope.user.picture = response.data;
        });
      });
    };

    (function init() {
      $scope.getUser();
      $scope.getPhoto();
    })();

    $scope.close = function () {
      $modalInstance.close();
    };
});
