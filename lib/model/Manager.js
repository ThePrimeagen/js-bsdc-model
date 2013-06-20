var Manager = function(model) {
    this._model = model;
    this._queuedOperations = [];
};
Manager.prototype = {
    enqueueOperation: function(operation) {
        this._queuedOperations.push(operation);
    },
    dispose: function() {
        this._queuedOperations = null;
        this._model = null;
    }
};

module.exports = Manager;
