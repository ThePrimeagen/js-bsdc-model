var _ = require('lodash');
var ComponentTypes = require('./ComponentTypes');

var DEFAULT_STYLE = {
    x: 0,
    y: 0,
    radius: 100,
    strokeColor: '#FF0',
    strokeWidth: 1,
    fillColor: '#0FF',
    type: ComponentTypes.Circle
};

var circleComponentTemplate = _.template(
    '<circle cx="<%= x %>" ' +
    'cy="<%= y %>" ' +
    'r="<%= radius %>" ' +
    'stroke="<%= strokeColor %>" ' +
    'stroke-width="<%= strokeWidth %>" ' +
    'fill="<%= fillColor %>"/>');

var Circle = function() {
    _.assign(this, DEFAULT_STYLE);
};

Circle.prototype = {
    getSVG: function() {
        return circleComponentTemplate(this.toObject());
    },
    toObject: function() {
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
            radius: this.radius,
            strokeColor: this.strokeColor,
            strokeWidth: this.strokeWidth,
            fillColor: this.fillColor,
            type: this.type
        }
    }
};

module.exports = function() {
    var circle = new Circle;
    return circle;
};
