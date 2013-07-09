//============================================================================//
//
//  elemental.js
//  
//  Author:     Mike Parsons
//  Date:       2013-07-09
//  Notes:      A simple namespaced JS framework to build on. Change "EXAMPLE" 
//              to suit your project name.
//  
//----------------------------------------------------------------------------//
//  Elemental v0.3 (https://github.com/schnipz/elemental)
//  http://www.schnipz.co.uk
//  Copyright (C) 2013, Mike Parsons
//  MIT License
//============================================================================//

EXAMPLE = {
    init: function(){
        // Executed on document ready...
        EXAMPLE.DOM.init();

        // Bind window resize actions.
        var resizeTimer;
        $(window).bind('load resize',function(){
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(EXAMPLE.resize, 200);
        });
    },
    resize: function(){
        // Executed on window resize...
        EXAMPLE.DOM.resize();
    }
};

EXAMPLE.DOM = {
    init: function(){
        EXAMPLE.DOM.bindEvents();
    },
    update: function(){},
    resize: function(){},
    bindEvents: function(){}
};

//---[ HERE WE GO... ]--------------------------------------------------------//
$(document).ready(EXAMPLE.init);
//----------------------------------------------------------------------------//