var Layer = function() {
    this._elements = [];
};

Layer.prototype = {

    /**
     * Gets the elements from this layer.
     * @returns {Array}
     */
    getElements: function() {
        return this._elements;
    },

    /**
     * Serializes the layer into a POJO
     * @returns {Object}
     */
    toDictionary: function() {
        var obj = {
            elements: []
        };

        _.each(this._elements, function(element) {
            obj.elements.push(element.toDictionary());
        });

        return obj;
    }
};
