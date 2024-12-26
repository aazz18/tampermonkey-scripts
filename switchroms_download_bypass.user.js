// ==UserScript==
// @name         SwitchROMs download bypass
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Auto redirects SwitchROMs download process.
// @author       aazz18
// @match        *://file.switchrom.net/download/*
// @match        *://switchrom1.com/download/*
// @match        *://waewz.com/download/*
// @match        *://idealfollow.in/download/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=switchrom.net
// @grant        none
// ==/UserScript==
(function(){"use strict";var e=document.querySelector("a.dlbtn.wp-block-button__linkvk.clickable");var n=e.href;window.location.href=n})();
