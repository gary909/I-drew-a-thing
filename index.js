
window.onload = function () {
    var button = document.getElementById("previewButton");
    button.onclick = previewHandler;
}

window.onload = function () {
    var canvas = document.getElementById("tshirtCanvas");
    var context = canvas.getContext("2d");
    context.fillRect(10, 10, 100, 100);
}


var selectObj = document.getElementById("backgroundColor");
var index = selectObj.selectedIndex;
var bgColor = selectObj[index].value;

var selectObj = document.getElementById("shape");
var index = selectObj.selectedIndex;
var shape = selectObj[index].value;

var selectObj = document.getElementById("foregroundColor");
var index = selectObj.selectedIndex;
var fgColor = selectObj[index].value;