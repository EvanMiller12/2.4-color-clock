(function(){
  "use strict";

  function clockDisplay(){
 
    var currentTime = new Date();

    var hours =  ('0' + currentTime.getHours()).slice(-2);
    var minutes = ('0' + currentTime.getMinutes()).slice(-2);
    var seconds = ('0' + currentTime.getSeconds()).slice(-2);

    var hoursNode = document.getElementById('hours');
    var minutesNode = document.getElementById('minutes');
    var secondsNode = document.getElementById('seconds');

    var clock = document.getElementById('clock');
    var colorCode = ('#' + hours + minutes + seconds);
    
    clock.style.backgroundColor = colorCode;
    
    var progress = seconds/60 * 100;
    document.getElementById('progressBar').style.width = progress + "%";

    if(isHovering){
      hoursNode.innerHTML = "#" + hours;
      minutesNode.innerHTML = '0' + minutes;
      secondsNode.innerHTML = '0' + seconds;
    }else{
      hoursNode.innerHTML = hours + ":";
      minutesNode.innerHTML = minutes + ":";
      secondsNode.innerHTML = '0' + seconds;
    }

    clock.addEventListener('mouseover', mouseOverHandler);
    clock.addEventListener('mouseout', mouseOutHandler);
   }

    var isHovering = false;

    function mouseOverHandler(){
      isHovering = true;
    }

    function mouseOutHandler(){
      isHovering = false;
    }

  setInterval(clockDisplay, 1000);
 
  clockDisplay();
}());
