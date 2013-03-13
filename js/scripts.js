/*
 * Elemental v0.2.1 - scripts.js (https://github.com/schnipz/elemental)
 * http://www.schnipz.co.uk
 * Copyright (C) 2013, Mike Parsons
 * MIT License
 */

// NOTE: Change "EXAMPLE" to suit your project.

EXAMPLE = {
	init: function(){
		// Executed on document ready...
		ELEMENTAL.DEBUG.loadTime('EXAMPLE.init()');

		EXAMPLE.DOM.init();

		// Bind window resize actions.
		var resizeTimer;
		$(window).bind('load resize',function() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function(){
				EXAMPLE.resize();
			}, 200);
		});
	},
	resize: function(){
		// Executed on window resize...
		ELEMENTAL.DEBUG.loadTime('EXAMPLE.resize()');

		EXAMPLE.DOM.resize();
	}
};

EXAMPLE.DOM = {
	init: function(){
		ELEMENTAL.DEBUG.loadTime('EXAMPLE.DOM.init()');

		EXAMPLE.DOM.bindEvents();
	},
	update: function(){
		ELEMENTAL.DEBUG.loadTime('EXAMPLE.DOM.update()');

	},
	resize: function(){
		ELEMENTAL.DEBUG.loadTime('EXAMPLE.DOM.resize()');

	},
	bindEvents: function(){
		ELEMENTAL.DEBUG.loadTime('EXAMPLE.DOM.bindEvents()');

	}
};

//---[ HERE WE GO... ]--------------------------------------------------------//

$(document).ready(function(){
	ELEMENTAL.DEBUG.loadTime('DEBUGGING ACTIVE');
	EXAMPLE.init();
});

//----------------------------------------------------------------------------//