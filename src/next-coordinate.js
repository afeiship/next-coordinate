(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxCoordinate = nx.declare('nx.Coordinate', {
    methods: {
      init: function (inX, inY) {
        this.x = inX;
        this.y = inY;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCoordinate;
  }

}());
