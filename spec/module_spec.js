describe('testing module definition', function() {

  beforeEach(module('sf'));

  it('should load the module successfully', function() {
    expect(window.sf).toBeDefined();
  });

});
