var AddLayer = function(index) {
    this.index = index;
};

var RemoveLayer = function(index) {
    this.index = index;
};

module.exports = {
    AddLayer: function(index) {return new AddLayer(index);},
    RemoveLayer: function(index) {return new RemoveLayer(index);}
};