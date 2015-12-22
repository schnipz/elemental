(function() {
  'use strict';

  /* global define */
  /* global require */

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      define([
        // Add dependencies here (comma seperated strings)
      ], factory);
    } else if (typeof module === 'object' && module.exports) {
      module.exports = factory(require(
        // Add dependencies here (comma seperated strings)
      ));
    } else {
      root.returnExports = factory(
        // Add dependencies here (comma seperated root.module)
      );
    }
  }(this, function(
    // Add dependencies here (comma seperated)
  ) {
    return {

      // Create module javascript here...

      /**
       *  Main RequireJS Triggers
       *  -------------------------------
       */
      onReady: function() {
        // Triggered on DOM ready
      },

      onLoad: function() {
        // Triggered on window load
      },

      onResize: function() {
        // Triggered on window resize
      }

    };
  }));

})();
