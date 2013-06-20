var Circle = require('./model/components/Circle');
var SVGWriter = require('./writers/SVGWriter.js');
var operations = require('./operations.js');
var Model = require('./model.js');

module.exports = {
    API: {
        Components: {
            Circle: Circle
        },
        Model: function() { return new Model },
        SVGWriter: function() { return new SVGWriter},
        Operations: operations
    }
};