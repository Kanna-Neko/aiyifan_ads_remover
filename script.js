// ==UserScript==
// @name         Aiyifan_ad_remover
// @namespace    https://github.com/Kanna-Neko/aiyifan_ads_remover
// @version      2024-11-30
// @description  try to take over the world!
// @author       Kannaneko
// @match        https://www.yfsp.tv/play/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yfsp.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        let main = document.getElementById('main-player');
        if(!main) {
            setTimeout(() => {
                let main = document.getElementById('main-player');
                main_work(main);
            },3000)
        }else {
            main_work(main);
        }
    }
    function main_work(element) {
        console.log("start bind",element);
        let ad = document.querySelector('.publicbox.ng-star-inserted')?.remove();
        var observerOptions = {
            childList: true, // 观察目标子节点的变化，是否有添加或者删除
            attributes: true, // 观察属性变动
            subtree: true, // 观察后代节点，默认为 false
        };
        function callback(mutationList, observer) {
            document.querySelector('vg-pause-f')?.remove();
            console.log("change", mutationList);
        }

        var observer = new MutationObserver(callback);
        observer.observe(element, observerOptions);
    }
    // Your code here...
})();
