'use strict';

describe('Directive: esPhotoComments', function () {

  // load the directive's module
  beforeEach(module('eversnapApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<es-photo-comments></es-photo-comments>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the esPhotoComments directive');
  }));
});
