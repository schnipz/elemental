(function() {
  'use strict';

  /* global define */
  /* global require */

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define([
        'elementalModule'
      ], factory);
    } else if (typeof module === 'object' && module.exports) {
      module.exports = factory(require(
        'elementalModule'
      ));
    } else {
      root.returnExports = factory(
        root.elementalModule
      );
    }
  }(this, function(
    elementalModule
  ) {
    return {

      onReady: function() {
        elementalModule.onReady();
      },

      onLoad: function() {
        elementalModule.onLoad();
      },

      onResize: function() {
        elementalModule.onResize();
      }

    };
  }));

})();
