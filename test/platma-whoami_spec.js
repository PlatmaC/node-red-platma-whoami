const helper = require('node-red-node-test-helper');
const lowerNode = require('../platma-whoami.js');

describe('platma-whoami Node', function () {
  afterEach(function () {
    helper.unload();
  });

  it('should be loaded', function (done) {
    const flow = [{ id: 'n1', type: 'platma-whoami', name: 'platma-whoami' }];
    helper.load(lowerNode, flow, function () {
      const n1 = helper.getNode('n1');
      n1.should.have.property('name', 'platma-whoami');
      done();
    });
  });
});
