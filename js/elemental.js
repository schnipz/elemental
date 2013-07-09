//============================================================================//
//
//  elemental.js
//  
//  Author:     Mike Parsons
//  Date:       2013-07-09
//  Notes:      A collection of useful JS functions and utilities for use in 
//              your application.
//  
//----------------------------------------------------------------------------//
//  Elemental v0.3 (https://github.com/schnipz/elemental)
//  http://www.schnipz.co.uk
//  Copyright (C) 2013, Mike Parsons
//  MIT License
//============================================================================//

ELE = {};

ELE.Functions = {
    setupLinkTargets: function(){
        $('.targetBlank').attr('target','_blank');
        $('.targetParent').attr('target','_parent');
    },
    getTidyDate: function(dateTime){
        dateTime = dateTime || '';
        if(dateTime !== ''){
            var dateTimeSplit = dateTime.split('T');
            var dateArray = dateTimeSplit[0].split('-');
            var year = dateArray[0];
            var month = dateArray[1]-1;
            var day = dateArray[2];
            var date = new Date(year,month,day);
        }else{
            var date = new Date();
        }
        var mthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        return mthNames[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();
    },
    sortArray: function(a,b,order){
        order = order || 'ASC';
        if(order==='ASC'){
            return (a - b);
        }else if(order==='DESC'){
            return (b - a);
        }
    },
    removeFromArray: function(array,item){
        for(var i in array){
            if(array[i]===item){
                array.splice(i,1);
                break;
            }
        }
    },
    shuffleArray: function(array){
        var tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    },
    isTouchDevice: function(){
        if( $('html').hasClass('touch') ){
            return true;
        }else{
            return false;
        }
    },
    getUrlQueries: function(){
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(typeof query_string[pair[0]] === "undefined"){
                // If first entry with this name
                query_string[pair[0]] = pair[1];
            }else if(typeof query_string[pair[0]] === "string"){
                // If second entry with this name
                var arr = [ query_string[pair[0]], pair[1] ];
                query_string[pair[0]] = arr;
            }else{
                // If third or later entry with this name
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    },
    trimString: function(string,limit){
        limit = limit || 50;
        if( string.length > limit ){
            string = $.trim( string.substr(0,limit) ) + "...";
        }
        return string;
    },
    padDigits: function(number){   
        return (number < 10 ? '0' : '') + number;
    },
    isAndroid: function(){
        return navigator.userAgent.match(/Android/i);
    },
    isLegacyAndroid: function(){
        if( ELE.Functions.isAndroid ){
            var androidversion = parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android")+8));
            if( androidversion < 4 ){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    },
    isIOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    isLegacyIOS: function(){
        var isLegacy = false;
        var ua = navigator.userAgent;        
        if(/iP(hone|od|ad)/.test(ua)){
            var regex = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
            var iOSVersion = parseInt(regex[1], 10);
            if(iOSVersion < 6){
                isLegacy = true;
            }
        }                
        return isLegacy;
    },
    isWindows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    isBlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    isMobile: function(){
        var that = this;
        return (ELE.Functions.isAndroid() || ELE.Functions.isIOS() || ELE.Functions.isWindows() || ELE.Functions.isBlackBerry() );
    }
};

ELE.Debug = {
    status: false,
    startTime: $.now(),
    loadTime: function(label){
        if(ELE.Debug.status){
            console.log('[ '+label+' - '+( ( $.now() - ELE.Debug.startTime ) / 1000 )+'s ]');
        }
    }
};