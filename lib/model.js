var Layer = require('./Layer');
var _ = require('lodash');

var Model = function() {
    /**
     * @type {Array.<Layer>}
     * @private
     */
    this._layers = [];
};

/**
 * From a serialized object to a model.
 * @param obj
 */
Model.fromObject = function(obj) {
    var model = new Model();

    _.each(obj.layers, function(layer) {
        model.addLayer(Layer.fromObject(layer));
    });

    return model;
};

Model.prototype = {
    getLayers: function() {
        return this._layers;
    },

    /**
     * Adds a layer to the model
     * @param {Layer} layer
     * @returns {Model}
     */
    addLayer: function(layer) {
        this._layers.push(layer);
        return this;
    },

    /**
     * Serializes the model to a dictionary
     * @returns {Object}
     */
    toObject: function() {
        var obj = {
            layers: []
        };

        _.each(this._layers, function(layer) {
            obj.layers.push(layer.toObject());
        });

        return obj;
    },

    /**
     * Stringifies the dictionary.
     * @returns {String}
     */
    serialize: function() {
        return JSON.stringify(this.toObject());
    }
};


module.exports = Model;