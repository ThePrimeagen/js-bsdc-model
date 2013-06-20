var _ = require('lodash');

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

var Circle = function() {
    _.assign(this, DEFAULT_STYLE);
};

Circle.prototype = {
    getSVG: function() {
        return circleComponentTemplate(this.toObject());
    },
    toObject: function() {
        return {
            x: this.x,
            y: this.y,
            radius: this.radius,
            strokeColor: this.strokeColor,
            strokeWidth: this.strokeWidth,
            fillColor: this.fillColor
        }
    },
    fromObject: function(object) {
        _.assign(this, object);
    }
};

module.exports = function() {
    var circle = new Circle;
    return circle;
};
