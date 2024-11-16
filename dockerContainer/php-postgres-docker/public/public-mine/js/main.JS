//Zugriff auf Elemente 
var studies = document.getElementsByClassName("articleButton")[0];
var work = document.getElementsByClassName("articleButton")[1];
var expertise = document.getElementsByClassName("articleButton")[2];
var hobies = document.getElementsByClassName("articleButton")[3];

var buttons = document.getElementsByClassName("articleButton");

for (var i=0; i<4; i++){
    buttons[i].innerHTML = i+1 + ". Button";
}

//event handler
// element.addEventListener(event, function, useCapture);
// document.addEventListener("DOMContentLoaded", function() {}