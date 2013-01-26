/*
 * Elemental 0.1 - elemental.js (https://github.com/schnipz/elemental)
 * http://www.schnipz.co.uk
 * Copyright (C) 2012 Mike Parsons
 * MIT License
 */

ELEMENTAL = {
	init: function(){
		ELEMENTAL.FUNCTIONS.DEBUG.loadTime('ELEMENTAL.init');
		// Begin JS...
	}
}

//---[ USEFUL FUNCTIONS ]-----------------------------------------------------//

ELEMENTAL.FUNCTIONS = {
	isAndroid: function(){
		return navigator.userAgent.match(/Android/i);
	},
	isBuggyAndroid: function(){
		if( ELEMENTAL.FUNCTIONS.isAndroid ){
			var androidversion = parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android")+8));
			if( androidversion < 4 ){ return true; }else{ return false; }
		}else{ return false; }
	},
    isIOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    isWindows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    isBlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
	isMobile: function(){
		var that = this;
		return (that.isAndroid() || that.isIOS() || that.isWindows() || that.isBlackBerry() );
	},
	DEBUG: {
		status: false,
		startTime: $.now(),
		loadTime: function(label){
			if(ELEMENTAL.FUNCTIONS.DEBUG.status){
				console.log('[ '+label+' - '+( ( $.now() - ELEMENTAL.FUNCTIONS.DEBUG.startTime ) / 1000 )+'s ]');
			}
		}
	}
}

//---[ HERE WE GO... ]--------------------------------------------------------//
$(document).ready(function(){
	ELEMENTAL.FUNCTIONS.DEBUG.loadTime('$(document).ready');
	ELEMENTAL.init();
});
//----------------------------------------------------------------------------//