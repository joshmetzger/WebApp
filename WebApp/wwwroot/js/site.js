﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function moveVid() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}