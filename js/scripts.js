/*
 * Elemental v0.2 - scripts.js (https://github.com/schnipz/elemental)
 * http://www.schnipz.co.uk
 * Copyright (C) 2013, Mike Parsons
 * MIT License
 */

// NOTE: Change "EXAMPLE" to suit your project.

EXAMPLE = {
	init: function(){
		// Executed on document ready...
		ELEMENTAL.FUNCTIONS.DEBUG.loadTime('EXAMPLE.init');

		// Bind window resize events.
		var resizeTimer;
		$(window).resize(function(){
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(EXAMPLE.resize, 200);
		});

		// Begin JS...

	},
	resize: function(){
		// Executed on window resize...
		ELEMENTAL.FUNCTIONS.DEBUG.loadTime('EXAMPLE.resize');

	}
};

//---[ HERE WE GO... ]--------------------------------------------------------//

$(document).ready(function(){
	ELEMENTAL.FUNCTIONS.DEBUG.loadTime('$(document).ready');
	EXAMPLE.init();
});

//----------------------------------------------------------------------------//