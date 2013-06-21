var should = require("should");
var expect = require("expect");
var API = require('../').API;
var Model = API.Model;
var SVGWriter = API.SVGWriter;
var Operations = API.Operations;
var Components = API.Components;
var Circle = require('../lib/model/components/Circle');
var ComponentFactory = require('../lib/model/components/ComponentFactory');
var ComponentTypes = require('../lib/model/components/ComponentTypes');

describe('BSDC', function() {
    it('should export API', function() {
        should.exist(API);
    });

    describe('API', function() {
        it('should export Components', function() {
           should.exist(Components);
        });
        describe('Components', function() {
           it('should include Circle', function() {
            should.exist(Components.Circle);
           });
        });
        it('should export Model', function() {
            should.exist(Model);
        });
        it('should export SVGWriter', function() {
            should.exist(SVGWriter);
        });
        it('should export Operations', function() {
            should.exist(Operations);
        });
        describe('exported operations', function() {
            it('should include addLayer', function() {
                should.exist(Operations.AddLayer);
            });
            it('should include removeLayer', function() {
                should.exist(Operations.RemoveLayer);
            });
        });
    });
});

describe('BSDC Model', function() {
    it('should support layers', function() {
        var model = Model();
        should.equal(model.getLayers().length, 0);
    });

    it('allow operations', function() {
    });
});


describe('BDSC', function() {
    describe('SVGWriter', function() {
        it('should emit a basic SVG', function() {
            var svgWriter = SVGWriter()
                .setModel(API.Model());
            should.equal(svgWriter.emit(), '');
        });
    })
});
