var _ = require('lodash');
var ComponentTypes = require('./ComponentTypes');

var DEFAULT_STYLE = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    strokeColor: '#FF0',
    strokeWidth: 1,
    fillColor: '#0FF',
    type: ComponentTypes.Square
};

var squareComponentTemplate = _.template(
    '<rect x="<%= x %>" ' +
        'y="<%= y %>" ' +
        'width="<%= width %>" ' +
        'height="<%= height %>" ' +
        'stroke="<%= strokeColor %>" ' +
        'stroke-width="<%= strokeWidth %>" ' +
        'fill="<%= fillColor %>"/>');

var Square = function() {
    _.assign(this, DEFAULT_STYLE);
};

Square.prototype = {
    getSVG: function() {
        return squareComponentTemplate(this.toDictionary());
    },
    fromObject: function(object) {
        _.assign(this, object);
    },

    /**
     * Serializes the circle into a POJO.
     * @returns {Object}
     */
    toDictionary: function() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            strokeColor: this.strokeColor,
            strokeWidth: this.strokeWidth,
            fillColor: this.fillColor,
            type: this.type
        }
    }
};

module.exports = function() {
    var square = new Square;
    return square;
};
