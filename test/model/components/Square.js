var assert = require('assert');
var should = require('should');
var Square = require('../../../').API.Components.Square;

describe('Square', function() {
    it('should instantiate', function() {
        var square = Square();
    });
    it('should write to svg', function() {
        var square = Square();
        should.equal(
            square.getSVG(),
            '<rect x="0" y="0" width="100" height="100" stroke="#FF0" stroke-width="1" fill="#0FF" />');
    });
});
