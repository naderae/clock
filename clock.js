
// we want the fastest hand to move 6 degrees every second.
// we want the minute hand to move 0.1 degress every second
// we want the hour hand to move 0.008 degrees every second.


var secondHand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');



var setDate = function(){
  var now = new Date();

  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();


  var secondsDegrees = ((seconds / 60) * 360) + 90; // this will give us the degress that the seconds corresponds to.
  var minutesDegrees = ((minutes / 60) * 360) + 90;
  var hoursDegrees = ((hours / 12) * 360) + 90;


  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

};

setInterval(setDate, 1000) // you want to run getDate every second
