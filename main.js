(function(){
  "use strict";
// gives currentTime the value of the current circulating time
var currentTime = new Date();

var hours = currentTime.getHours();  //gives hours the current hours only
var minutes = currentTime.getMinutes(); //gives minutes the current minutes only
var seconds = currentTime.getSeconds(); //gives seconds the current seconds only

var colons = hours + ":" + minutes + ":" + ":" seconds;


// keeps the hours from going over 12
var hours = function(hours){
  if (hours > 12){
    return hours - 12;
  }else{
    return hours;
  }
}
// above makes hours go to zero so this makes the value be 12 when the value is zero
var hours = function (hours){
  if (hours == 0){
    return 12;
  }else{
    return hours;
  }
}
// puts a zero infront of minutes when the value is less than 10
var minutes = function(minutes){
  if (minutes < 10){
    return 0 + minutes;
  } else {
    return minutes + '';
  }
  }

// puts a zero infront of seconds when the value is less than 10
var seconds = function(seconds){
  if (seconds < 10){
    return 0 + seconds;
  }else{
    return minutes + '';
  }
}

// function logCurrentTime(){
//   var elapsed = secondsToInterval(currentTime);
//
//   printToScreen(elapsed);
// }
//
// function elapsed(){
//   clockDisplay = currentTime();
//
// }















}());
