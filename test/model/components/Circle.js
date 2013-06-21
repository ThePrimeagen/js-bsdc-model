var assert = require('assert');
var should = require('should');
var Circle = require('../../../').API.Components.Circle;

describe('Square', function() {
    it('should instantiate', function() {
        var circle = Circle();
    });
    it('should write to svg', function() {
        var circle = Circle();
        should.equal(circle.getSVG(), '<circle cx="0" cy="0" r="100" stroke="#FF0" stroke-width="1" fill="#0FF"/>');
    });
});