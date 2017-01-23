(function(){
  "use strict";

var runClock = document.getElementById('hexConversion');
var isHovering = false;

function clockDisplay(){
// gives currentTime the value of the current circulating time
var currentTime = new Date();

//gives hours the current hours only
var hours =  (currentTime.getHours());
var minutes = (currentTime.getMinutes());
var seconds = (currentTime.getSeconds());
//gives the percentage of a minute that the current seconds represents
var progress = seconds/60 * 100;

var hexHours = hours.toString(16);
var hexMinutes = minutes.toString(16);
var hexSeconds = seconds.toString(16);
// console.log(hexHours, hexMinutes, hexSeconds);

var hoursNode = document.getElementById('hours');
var minutesNode = document.getElementById('minutes');
var secondsNode = document.getElementById('seconds');

var colorChange = ('#' + hours + minutes + seconds);
var colorCode = ('#' + hexHours + hexMinutes + hexSeconds);

// var color = '#' + hours + minutes + seconds;
//selects elements by id and prints out the hours minutes and seconds onto the screen
// document.getElementById('hours').innerHTML = ("00" + hours);
// document.getElementById('minutes').innerHTML = ("00" + minutes);
// document.getElementById('seconds').innerHTML = ("00" + seconds);

document.getElementById('progressBar').style.width = progress + "%";

document.getElementById('background').style.backgroundColor = colorChange;

if(isHovering){
  hoursNode.innerHTML = hexHours;
  minutesNode.innerHTML = hexMinutes;
  secondsNode.innerHTML = hexSeconds;
}else{
  hoursNode.innerHTML = ('0' + hours).slice(-2);
  minutesNode.innerHTML = ('0' + minutes).slice(-2);
  secondsNode.innerHTML = ('0' + seconds).slice(-2);
}
// console.log(hoursNode);
// hoursNode.innerHTML = hours;
// minutesNode.innerHTML = minutes;
// secondsNode.innerHTML = seconds;


}

function mouseOverHandler(){
  isHovering = true;
}

function mouseOutHandler(){
  isHovering = false;
}

runClock.addEventListener('mouseover', mouseOverHandler);
runClock.addEventListener('mouseout', mouseOutHandler);


// makes clock tick every second
setInterval(clockDisplay, 1000);
//runs the clockDisplay function
clockDisplay();














}());
