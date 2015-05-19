'use strict';

describe('Directive: esAlbumThumbnail', function () {

  // load the directive's module
  beforeEach(module('eversnapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<es-album-thumbnail></es-album-thumbnail>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the esAlbumThumbnail directive');
  }));
});
