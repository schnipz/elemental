(function() {
  'use strict';

  /* global require */
  /* global requirejs */

  requirejs.config({
    baseUrl: 'src/js/',
    paths: {
      domReady:         'imports/third-party/domReady/domReady',
      underscore:       'imports/third-party/underscore-1.8.3/underscore.min',
      elemental:        'imports/main',
      elementalModule:  'imports/modules/_module'
    },
    shim: {
      'underscore': {
        exports: '_'
      }
    }
  });

  require(['domReady', 'underscore', 'elemental'], function(domReady, _, elemental) {
    if (elemental !== undefined) {
      elemental.onReady();
      domReady(function() {
        elemental.onLoad();
      });
      window.onresize = _.debounce(elemental.onResize, 250);
    }
  });

})();
