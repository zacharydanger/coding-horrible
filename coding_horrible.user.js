// Coding Horrible!
// ==UserScript==
// @name          Coding Horrible
// @namespace     http://sanitycheckfail.com/
// @description   Script to make Coding Horror pages better.
// @include http://codinghorror.com/*
// @include http://*.codinghorror.com/*
// ==/UserScript==

// Add jQuery (borrowed from http://joanpiedra.com/jquery/greasemonkey/)
var GM_JQ = document.createElement('script');
GM_JQ.src = 'http://jquery.com/src/jquery-latest.js';
GM_JQ.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_JQ);

// Check if jQuery's loaded
function GM_wait() {
 	if(typeof unsafeWindow.jQuery == 'undefined') {
		window.setTimeout(GM_wait,100);
	} else {
		$ = unsafeWindow.jQuery;
		letsJQuery();
	}
}
GM_wait();
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
function pad(n){return n<10 ? '0'+n : n}

// All your GM code must be inside this function
function letsJQuery() {
	//override Jeff's random bold fetish
	$("b, strong").css('font-weight', 'normal');

	//replace all links to coding horror archives with links to random dilbert comic from today all the way back to the first one in 1989.
	$("a:regex(href, *codinghorror.com/blog/archives/*)").each(function() {
    var raw = randomDate(new Date(1989, 3, 1), new Date()),
        output = raw.getFullYear()+'-'+(pad(raw.getMonth()+1))+'-'+pad(raw.getDate());
		    new_url = 'http://www.dilbert.com/strips/comic/';
		$(this).attr('href', new_url + output);
	});
}
