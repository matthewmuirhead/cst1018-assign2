var interval = 0;
var h1PositionLeft = 0;
var direction = [];
var stopMoving = [];
var finished = [];
var order = [];
var ranked = [];
var timer;
var numberOfFinishers = 0;
var speed = [];
var turningPoint = [];

for (var i = 0; i < 4; i++) {

}

function startClick() {
  for (var i = 0; i < 4; i++) {
    direction[i] = 'right';
    stopMoving[i] = 'no';
    finished[i] = 'no';
    ranked[i] = false;
    speed[i] = 1;
    var horseID = 'horse' + (i+1);
    var horse = document.getElementById(horseID);
    horse.style.top = ((i * 4) + 4) + 'vh';
    horse.style.left = 20 + 'vw';
  }
  timer = setInterval(myInterval, 1);
  document.getElementById('start').disabled = true;
}

function resultsScreen() {
  for (var i = 0; i < 4; i++) {
    var horseID = 'horse' + (order[i] + 1);
    var result = 'result' + (i + 1);
    console.log('Horse ID: ' + horseID);
    // console.log(result);
    document.getElementById(result).className = horseID;
  }
}

function move() {
  for (var i = 0; i < 4; i++) {
    var horseID = 'horse' + (i+1);
    var horse = document.getElementById(horseID);

    if (stopMoving[i] == 'yes' && horse.offsetLeft > (window.innerWidth/2)) {
      horse.className = 'horse standRight';
      finished[i] = 'yes'
      if (ranked[i] == false) {
        ranked[i] = true;
        //console.log(numberOfFinishers);
        order[numberOfFinishers] = i;
        console.log('finishing order: ' + order[numberOfFinishers]);
        numberOfFinishers++;
      }
    }

    if (finished[i] == 'yes') {

    }

    else {
      if (direction[i] == 'right') {
        horse.className = 'horse runRight';
        var h1PositionLeft = horse.offsetLeft;
        horse.style.left = h1PositionLeft + speed[i] + 'px';
      }
      if (direction[i] == 'left') {
        horse.className = 'horse runLeft';
        var h1PositionLeft = horse.offsetLeft;
        horse.style.left = h1PositionLeft + - + speed[i] + 'px';
      }
      if (direction[i] == 'up') {
        horse.className = 'horse runUp';
        var h1PositionTop = horse.offsetTop;
        horse.style.top = h1PositionTop + - + speed[i] + 'px';
      }
      if (direction[i] == 'down') {
        horse.className = 'horse runDown';
        var h1PositionTop = horse.offsetTop;
        horse.style.top = h1PositionTop + speed[i] + 'px';
      }
    }
  }
  if (finished[0] == 'yes' && finished[1] == 'yes' && finished[2] == 'yes' && finished[3] == 'yes') {
    document.getElementById('start').disabled = false;
    clearInterval(timer);
    resultsScreen();
  }
}

function myInterval() {
  for (var i = 0; i < 4; i++) {
    var horseID = 'horse' + (i+1);
    var horse = document.getElementById(horseID);
    var horseLeft = horse.offsetLeft;
    var horseTop = horse.offsetTop;
    if (direction[i] == 'right') {
      //console.log(Math.ceil(window.innerWidth / 10));
      turningPoint[i] = Math.ceil(Math.random() * Math.ceil(window.innerWidth / 5));
      console.log(turningPoint[i]);
      if (horseLeft >= Math.ceil(window.innerWidth - (turningPoint[i] + (window.innerWidth/20)))) {
        direction[i] = 'down';
        speed[i] = Math.ceil(Math.random() * 2);
      }
    }
    else if (direction[i] == 'down') {
      turningPoint[i] = Math.ceil(Math.random() * Math.ceil(window.innerWidth / 10));
      console.log(turningPoint[i]);
      if (horseTop >= Math.ceil(window.innerHeight - (turningPoint[i] + (window.innerHeight/100)))) {
        direction[i] = 'left';
        speed[i] = Math.ceil(Math.random() * 2);
      }
    }
    else if (direction[i] == 'left') {
      turningPoint[i] = Math.ceil(Math.random() * Math.ceil(window.innerWidth / 15));
      console.log(turningPoint[i]);
      if (horseLeft <= Math.ceil(turningPoint[i] + (window.innerWidth/100))) {
        direction[i] = 'up';
        speed[i] = Math.ceil(Math.random() * 2);
        stopMoving[i] = 'yes';
      }
    }
    else if (direction[i] == 'up') {
      turningPoint[i] = Math.ceil(Math.random() * Math.ceil(window.innerWidth / 15));
      console.log(turningPoint[i]);
      if (horseTop <= Math.ceil(turningPoint[i] + (window.innerHeight/100))) {
        direction[i] = 'right';
        speed[i] = Math.ceil(Math.random() * 2);
      }
    }
    turningPoint[i] = 0;
  }
  move();
}

function myLoadEvent() {
  var start = document.getElementById('start');
  start.addEventListener('click', startClick);

}

document.addEventListener('DOMContentLoaded', myLoadEvent);
