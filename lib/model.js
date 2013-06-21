var Layer = require('./Layer');
var _ = require('lodash');

var Model = function() {
    /**
     * @type {Array.<Layer>}
     * @private
     */
    this._layers = [];
};

Model.prototype = {
    getLayers: function() {
        return this._layers;
    },

    /**
     * Serializes the model to a dictionary
     * @returns {Object}
     */
    toDictionary: function() {
        var obj = {
            layers: []
        };

        _.each(this._layers, function(layer) {
            obj.layers.push(layer.toDictionary());
        });

        return obj;
    },

    /**
     * Stringifies the dictionary.
     * @returns {String}
     */
    serialize: function() {
        return JSON.stringify(this.toDictionary());
    }
};


module.exports = Model;