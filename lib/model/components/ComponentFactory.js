var ComponentTypes = require('./ComponentTypes');
var Circle = require('./Circle');

module.exports = {
    /**
     * Creates the component from an object.
     * @param {Object} obj
     */
    createComponentFromObject: function(obj) {
        if (obj.type === ComponentTypes.Circle) {
            return new Circle(obj);
        }
    }
}