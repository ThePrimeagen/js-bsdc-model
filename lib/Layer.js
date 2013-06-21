var _ = require('lodash');
var ComponentFactory = require('./model/components/ComponentFactory');

var Layer = function() {
    this._elements = [];
};

/**
 * Creates a layer from an object
 * @param {Object} obj
 * @returns {Layer}
 */
Layer.fromObject = function(obj) {
    var layer = new Layer();

    _.each(obj.elements, function(obj) {
        layer.addElement.push(ComponentFactory.createComponentFromObject(obj));
    });

    return layer;
}

Layer.prototype = {

    /**
     * Gets the elements from this layer.
     * @returns {Array}
     */
    getElements: function() {
        return this._elements;
    },

    /**
     * Adds the element to the element list
     * @param {Circle} el
     * @returns {Layer}
     */
    addElement: function(el) {
        this._elements.push(el);
        return this;
    },

    /**
     * Serializes the layer into a POJO
     * @returns {Object}
     */
    toObject: function() {
        var obj = {
            elements: []
        };

        _.each(this._elements, function(element) {
            obj.elements.push(element.toDictionary());
        });

        return obj;
    }
};

module.exports = Layer;