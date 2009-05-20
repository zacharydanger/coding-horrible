// Coding Horrible!
// ==UserScript==
// @name          Coding Horrible
// @namespace     http://sanitycheckfail.com/
// @description   Script to make Coding Horror pages better.
// @include http://codinghorror.com/*
// @include http://*.codinghorror.com/*
// ==/UserScript==


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('* { font-weight: normal ! important; }'); //take care of Jeff's random bold fetish