'use strict';

describe('Directive: esAlbum', function () {

  // load the directive's module
  beforeEach(module('eversnapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<es-album></es-album>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the esAlbum directive');
  }));
});
