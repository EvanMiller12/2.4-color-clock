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

// keeps the hours from going over 12
var hoursCount = function(hours){
  if (hours > '12'){
    return hours - '12';
  }else{
    return hours;
  }
}
// above makes hours go to zero so this makes the value be 12 when the value is zero
var hoursCount = function (hours){
  if (hours == '0'){
    return '12';
  }else{
    return hours;
  }
}
// puts a zero infront of minutes when the value is less than 10
var minutesCount = function(minutes){
  if (minutes < 10){
    return '0' + minutes;
  } else {
    return minutes + '';
  }
  }

// puts a zero infront of seconds when the value is less than 10
var secondCount = function(seconds){
  if (seconds < 10){
    return '0' + seconds;
  }else{
    return minutes + '';
  }
}

//prints out the hours minutes and seconds onto the screen
document.getElementById('hours').innerHTML = ("0" + hours).slice(-2);
document.getElementById('minutes').innerHTML = ("0" + minutes).slice(-2);
document.getElementById('seconds').innerHTML = ("0" + seconds).slice(-2);

setTimeout(clockDisplay, 1000);

}

clockDisplay();













}());
