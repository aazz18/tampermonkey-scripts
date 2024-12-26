// ==UserScript==
// @name         A Level Maths Revision PDF Viewer
// @namespace    http://tampermonkey.net/
// @version      2024-09-04
// @description  Maths
// @author       aazz18
// @match        https://alevelmathsrevision.com/pdf-viewer/?file=/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=alevelmathsrevision.com
// @grant        none
// ==/UserScript==

window.location.href=document.body.innerHTML.match(/<a id="downloadLink" style="font-weight: bold;" href="([^"]*)"/)[1];
