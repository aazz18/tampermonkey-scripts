// ==UserScript==
// @name        Scribd Document Downloader
// @namespace   Scribd Document Downloader
// @grant       none
// @version     1.0
// @author      aazz18
// @description https://scribd.vdownloaders.com bypass
// @match       *://www.scribd.com/document/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=scribd.com
// ==/UserScript==

!function(){let o=window.location.href.split("scribd.com/document/")[1],t=`https://ilide.info/docgeneratev2?fileurl=https://scribd.vdownloaders.com/pdownload/${o}`;window.location.href=t}();
