// ==UserScript==
// @name         智学网自欺欺人改分脚本
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  考的差？分数低？不存在的
// @author       于潍畅
// @match        https://www.zhixue.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// ==/UserScript==

window.onload = (function() {
    'use strict';

    console.log("Start OK");
    var wantnum;
    var wantonenum;

    console.log("time sleep");
    setTimeout(function () {
        wantnum = document.querySelector('span.specific').innerText.replace(/[^0-9]/ig,"");
        //console.log(wantnum);
        document.querySelector('.increase').innerText = wantnum;
        //Write the total score
        //写总分

        wantonenum = document.querySelector('span.ml_10').innerText.replace(/[^0-9]/ig,"");
        let lis = document.querySelectorAll('.blue');
        lis.forEach(function (li) {
            li.innerText=wantonenum;
        })
        //Write each section
        //写入每一科

    }, 1700);



})();
