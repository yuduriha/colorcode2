"use strict";
window.onload = function () {
    var cnt = 0;
    var list = getElement('color-list');
    setInterval(function () {
        var color = convertColor(cnt);
        setColorCodeText(color);
        var mainBox = getElement("color-box");
        setColor(mainBox, color);
        setRGBBoxes(color);
        cnt = (cnt + 1) % 1000000;
    }, 1);
};
function getElement(id) {
    return document.getElementById(id);
}
function setColorCodeText(color) {
    var elemet = getElement("txt-color-code");
    if (elemet) {
        elemet.innerText = color;
    }
}
function setColor(elemet, color) {
    if (elemet) {
        elemet.style.backgroundColor = color;
    }
}
function setHeight(elemet, h) {
    if (elemet) {
        elemet.style.height = h + "px";
    }
}
function convertColor(num) {
    return "#" + ("000000" + num).slice(-6);
}
function setRGBBoxes(color) {
    var r = +color.slice(1, 3);
    var g = +color.slice(3, 5);
    var b = +color.slice(5, 7);
    setRGBBox("r", r, 10000);
    setRGBBox("g", g, 100);
    setRGBBox("b", b, 1);
}
function setRGBBox(tag, val, mask) {
    var element = getElement("box-" + tag);
    if (!element)
        return;
    setHeight(element, val);
}
