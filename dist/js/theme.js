"use strict";document.addEventListener("DOMContentLoaded",(()=>{const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=document.querySelector("html"),a=document.querySelector(".menu__change-theme"),c=document.querySelector(".html-icon").querySelectorAll(".text"),r=document.querySelector(".css-icon-text"),o=document.querySelector(".node-js-icon").querySelectorAll(".text");new MutationObserver((e=>{const t="dark"===e[0].target.dataset.theme?"#fff":"#000";c.forEach((e=>{e.setAttribute("fill",t)})),o.forEach((e=>{e.setAttribute("fill",t)})),r.setAttribute("fill",t)})).observe(t,{attributes:!0});const s=()=>{let a=t.dataset.theme;switch(a){case"dark":a="light";break;case"light":a="dark";break;default:a=""+(e?"dark":"light")}t.dataset.theme=a,localStorage.setItem("theme",a)},l=()=>{"dark"===t.dataset.theme?a?.classList.remove("icon-sun"):a?.classList.add("icon-sun")};a?.addEventListener("click",(()=>{s(),l()}));const d=localStorage.getItem("theme");d?t.dataset.theme=d:s(),l()}));