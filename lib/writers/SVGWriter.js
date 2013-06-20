var SVGWriter = function() {

};

SVGWriter.prototype = {
    setModel: function(model) {
        this._model = model;
        return this;
    },
    emit: function() {
        return '';
    }
};

module.exports = SVGWriter;
