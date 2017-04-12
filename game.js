var interval = 0;
var h1PositionLeft = 0;
var direction = [];
var stopMoving = [];
var finished = [];
var order = [];
var timer;
var numberOfFinishers = 0;

for (var i = 0; i < 4; i++) {

}

function startClick() {
  for (var i = 0; i < 4; i++) {
    direction[i] = 'right';
    stopMoving[i] = 'no';
    finished[i] = 'no';
    var horseID = 'horse' + (i+1);
    var horse = document.getElementById(horseID);
    horse.style.top = ((i * 4) + 4) + 'vh';
    horse.style.left = 20 + 'vw';
  }
  timer = setInterval(myInterval, 1);
  document.getElementById('start').disabled = true;
}

function resultsScreen() {
  for (var i = 1; i < 5; i++) {
    var horseID = 'result' + order[i];
    var result = 'result' + i;
    //console.log(order[i]);
    // console.log(result);
    document.getElementById(result).className = horseID;
  }
}

function move() {
  for (var i = 0; i < 4; i++) {
    var horseID = 'horse' + (i+1);
    var horse = document.getElementById(horseID);

    if (finished[0] == 'yes' && finished[1] == 'yes' && finished[2] == 'yes' && finished[3] == 'yes') {
      document.getElementById('start').disabled = false;
      clearInterval(timer);
      resultsScreen();
    }

    if (stopMoving[i] == 'yes' && horse.offsetLeft > 400) {
      horse.className = 'horse standRight';
      finished[i] = 'yes'
    }

    if (finished[i] == 'yes') {
      numberOfFinishers++;
      console.log(numberOfFinishers);
      order[numberOfFinishers] = i;
    }

    else {
      var speed = 1 //Math.ceil(Math.random() * 3);
      if (direction[i] == 'right') {
        horse.className = 'horse runRight';
        var h1PositionLeft = horse.offsetLeft;
        horse.style.left = h1PositionLeft + speed + 'px';
      }
      if (direction[i] == 'left') {
        horse.className = 'horse runLeft';
        var h1PositionLeft = horse.offsetLeft;
        horse.style.left = h1PositionLeft + - + speed + 'px';
      }
      if (direction[i] == 'up') {
        horse.className = 'horse runUp';
        var h1PositionTop = horse.offsetTop;
        horse.style.top = h1PositionTop + - + speed + 'px';
      }
      if (direction[i] == 'down') {
        horse.className = 'horse runDown';
        var h1PositionTop = horse.offsetTop;
        horse.style.top = h1PositionTop + speed + 'px';
      }
    }
  }
}

function myInterval() {
  var horse1 = document.getElementById('horse1');
  var h1PositionLeft = horse1.offsetLeft;
  var h1PositionTop = horse1.offsetTop;
  if (h1PositionLeft == window.innerWidth - 250 && direction[0] != 'down') {
    console.log(h1PositionLeft/10);
    direction[0] = 'down';
  }
  else if (h1PositionTop == window.innerHeight - 200 && direction[0] != 'left') {
    direction[0] = 'left';
  }
  else if (h1PositionLeft == 20 && direction[0] != 'up') {
    direction[0] = 'up';
    stopMoving[0] = 'yes';
  }
  else if (h1PositionTop == 20 && direction[0] != 'right') {
    direction[0] = 'right';
  }

  var horse2 = document.getElementById('horse2');
  var h2PositionLeft = horse2.offsetLeft;
  var h2PositionTop = horse2.offsetTop;
  if (h2PositionLeft >= window.innerWidth - 230 && direction[1] != 'down') {
    direction[1] = 'down';
  }
  else if (h2PositionTop >= window.innerHeight - 200 && direction[1] != 'left') {
    direction[1] = 'left';
  }
  else if (h2PositionLeft <= 30 && direction[1] != 'up') {
    direction[1] = 'up';
    stopMoving[1] = 'yes';
  }
  else if (h2PositionTop <= 30 && direction[1] != 'right') {
    direction[1] = 'right';
  }

  var horse3 = document.getElementById('horse3');
  var h3PositionLeft = horse3.offsetLeft;
  var h3PositionTop = horse3.offsetTop;
  if (h3PositionLeft == window.innerWidth - 260 && direction[2] != 'down') {
    direction[2] = 'down';
  }
  else if (h3PositionTop == window.innerHeight - 260 && direction[2] != 'left') {
    direction[2] = 'left';
  }
  else if (h3PositionLeft == 50 && direction[0] != 'up') {
    direction[2] = 'up';
    stopMoving[2] = 'yes';
  }
  else if (h3PositionTop == 50 && direction[0] != 'right') {
    direction[2] = 'right';
  }

  var horse4 = document.getElementById('horse4');
  var h4PositionLeft = horse4.offsetLeft;
  var h4PositionTop = horse4.offsetTop;
  if (h4PositionLeft == window.innerWidth - 300 && direction[3] != 'down') {
    direction[3] = 'down';
  }
  else if (h4PositionTop == window.innerHeight - 300 && direction[3] != 'left') {
    direction[3] = 'left';
  }
  else if (h4PositionLeft == 80 && direction[3] != 'up') {
    direction[3] = 'up';
    stopMoving[3] = 'yes';
  }
  else if (h4PositionTop == 80 && direction[3] != 'right') {
    direction[3] = 'right';
  }

  move();
}

function myLoadEvent() {
  var start = document.getElementById('start');
  start.addEventListener('click', startClick);

}

document.addEventListener('DOMContentLoaded', myLoadEvent);
