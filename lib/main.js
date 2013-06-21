var Circle = require('./model/components/Circle');
var Square = require('./model/components/Square');
var SVGWriter = require('./writers/SVGWriter.js');
var operations = require('./operations.js');
var Model = require('./model.js');

module.exports = {
    API: {
        Components: {
            Circle: Circle,
            Square: Square
        },
        Model: function() { return new Model },
        SVGWriter: function() { return new SVGWriter},
        Operations: operations
    }
};