// ==UserScript==
// @name Failbetter Games Forum Navigation Also On Top
// @namespace Failbetter Games Forum Navigation Also On Top
// @author Laurvin
// @description Copies the paging to the top of the page.
// @version 1
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL xxx
// @include http://community.failbettergames.com/*
// @include https://community.failbettergames.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant none
// @run-at document-idle
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function ()
{
  $(".pager").clone().appendTo(".location");
});