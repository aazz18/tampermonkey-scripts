// ==UserScript==
// @name         PMT PDF Bypass
// @namespace    http://tampermonkey.net/
// @version      2024-08-27
// @description  Bypasses the annoying PDF viewer that PMT shows when trying to view a PDF.
// @author       aazz18
// @match        https://www.physicsandmathstutor.com/pdf-pages/?pdf=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=physicsandmathstutor.com
// @grant        none
// ==/UserScript==

(function(){window.location.href=decodeURIComponent(window.location.href.split("https://www.physicsandmathstutor.com/pdf-pages/?pdf=")[1]);})();