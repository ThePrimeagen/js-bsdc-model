var assert = require('assert');
var should = require('should');
var Circle = require('../../../').API.Components.Circle;
var ComponentFactory = require('./../../../lib/model/components/ComponentFactory');
var ComponentTypes = require('./../../../lib/model/components/ComponentTypes');

describe('Square', function() {
    it('should instantiate', function() {
        var circle = new Circle();
    });

    it('should write to svg', function() {
        var circle = new Circle();
        should.equal(circle.getSVG(), '<circle cx="0" cy="0" r="100" stroke="#FF0" stroke-width="1" fill="#0FF"/>');
    });

    it('should support going to an object.', function() {
        var circle = new Circle();

        circle.x = 50;
        circle.y = 75;
        circle.radius = 10.5;

        var tocObj = circle.toObject();

        tocObj.x.should.equal(50);
        tocObj.y.should.equal(75);
        tocObj.radius.should.equal(10.5);
    });

    it('should support going from an object.', function() {
        var circle = ComponentFactory.createComponentFromObject({
            type: ComponentTypes.Circle,
            x: 50,
            y: 66,
            radius: 2
        });

        circle.x.should.equal(50);
        circle.y.should.equal(66);
        circle.radius.should.equal(2);
    });
});