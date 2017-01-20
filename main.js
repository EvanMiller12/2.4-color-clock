(function(){
  "use strict";

function clockDisplay(){
// gives currentTime the value of the current circulating time
var currentTime = new Date();
//gives hours the current hours only
var hours =  currentTime.getHours();
//gives minutes the current minutes only
var minutes = currentTime.getMinutes();
//gives seconds the current seconds only
var seconds = currentTime.getSeconds();
//gives the percentage of a minute that the current seconds represents
var progress = seconds/60 * 100;

// var color = '#' + hours + minutes + seconds;
//selects elements by id and prints out the hours minutes and seconds onto the screen
document.getElementById('hours').innerHTML = ("0" + hours).slice(-2);
document.getElementById('minutes').innerHTML = ("0" + minutes).slice(-2);
document.getElementById('seconds').innerHTML = ("0" + seconds).slice(-2);

document.getElementById('progressBar').style.width = progress + "%";

}
// makes clock tick every second


setInterval(clockDisplay, 1000);
//runs the clockDisplay function
clockDisplay();














}());
