"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#progress__wrapper"),t=e.querySelectorAll(".progress-item");let n=!1;const o=e=>{const t=window.pageYOffset+e.getBoundingClientRect().top,n=window.pageYOffset+e.getBoundingClientRect().bottom,o=window.pageYOffset,r=window.pageYOffset+document.documentElement.clientHeight;return n>o&&t<r},r=(e,t,n)=>{setTimeout((()=>{e.innerHTML=`${n.toFixed(0)}${t}`}),20*n)};window.addEventListener("scroll",(()=>{o(e)&&(n||(n=!0,t.forEach((e=>{const t=e.querySelector(".progress-item__percent"),n=parseInt(t.innerHTML);e.querySelector(".progress-item__fill").style.marginRight=100-n+"%";for(let e=1;e<=n;e+=.5)r(t,"%",e)}))))})),o(e)}));