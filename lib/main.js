var Circle = require('./model/components/Circle');
var Square = require('./model/components/Square');
var SVGWriter = require('./writers/SVGWriter.js');
var operations = require('./operations.js');
var Model = require('./model.js');
var Layer = require('./Layer.js');

module.exports = {
    API: {
        Components: {
            Circle: function() { return new Circle },
            Square: function() { return new Square }
        },
        Model: function() { return new Model },
        Layer: function() { return new Layer },
        SVGWriter: function() { return new SVGWriter},
        Operations: operations
    }
};