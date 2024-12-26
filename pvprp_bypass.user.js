// ==UserScript==
// @name         PVPRP Download Bypass
// @namespace    http://tampermonkey.net/
// @version      2024-07-05
// @description  Bypasses the "Subscribe to Creator" check and downloads the requested file immediately
// @author       You
// @match        https://pvprp.com/pack*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pvprp.com
// @grant        none
// ==/UserScript==

(function() {'use strict'; const matches = document.documentElement.outerHTML.match(/if\(\$\(this\)\.attr\("href"\) == "(.*?)"\) \{/); if (matches) { window.location.href = "https://pvprp.com/" + matches[1]; }})();
