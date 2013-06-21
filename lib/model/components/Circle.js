var _ = require('lodash');
var ComponentTypes = require('./ComponentTypes');

var DEFAULT_STYLE = {
    x: 0,
    y: 0,
    radius: 100,
    strokeColor: '#FF0',
    strokeWidth: 1,
    fillColor: '#0FF'
};

var circleComponentTemplate = _.template(
    '<circle cx="<%= x %>" ' +
    'cy="<%= y %>" ' +
    'r="<%= radius %>" ' +
    'stroke="<%= strokeColor %>" ' +
    'stroke-width="<%= strokeWidth %>" ' +
    'fill="<%= fillColor %>"/>');

/**
 * Creates a new circle with the default styles passed in
 * @constructor
 */
var Circle = function(obj) {
    _.assign(this, DEFAULT_STYLE);
    _.extend(this, obj);

    // ensures that the circle has the correct type
    this.type = ComponentTypes.Circle;
};

Circle.prototype = {
    getSVG: function() {
        return circleComponentTemplate(this.toObject());
    },

    /**
     * Serializes the circle into a POJO.
     * @returns {Object}
     */
    toObject: function() {

        return {
            x: this.x,
            y: this.y,
            radius: this.radius,
            strokeColor: this.strokeColor,
            strokeWidth: this.strokeWidth,
            fillColor: this.fillColor,
            type: this.type
        }
    }
};

module.exports = Circle;
