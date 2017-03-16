var interval = 0;
var h1PositionLeft = 0;
var direction = [];

for (var i = 0; i < 4; i++) {
  direction[i] = 'right';
}

function startClick() {
  setInterval(myInterval, 10);
}

function move() {
  for (var i = 0; i < 4; i++) {
    var horseID = 'horse' + (i+1);
    var horse = document.getElementById(horseID);
    if (direction[i] == 'right') {
      horse.className = 'horse runRight';
      var h1PositionLeft = horse.offsetLeft;
      horse.style.left = h1PositionLeft + 1 + 'px';
    }
    if (direction[i] == 'left') {
      horse.className = 'horse runLeft';
      var h1PositionLeft = horse.offsetLeft;
      horse.style.left = h1PositionLeft + -1 + 'px';
    }
    if (direction[i] == 'up') {
      horse.className = 'horse runUp';
      var h1PositionTop = horse.offsetTop;
      horse.style.top = h1PositionTop + -1 + 'px';
    }
    if (direction[i] == 'down') {
      horse.className = 'horse runDown';
      var h1PositionTop = horse.offsetTop;
      horse.style.top = h1PositionTop + 1 + 'px';
    }
  }

}

function myInterval() {
  var horse1 = document.getElementById('horse1');
  var h1PositionLeft = horse1.offsetLeft;
  var h1PositionTop = horse1.offsetTop;
  if (h1PositionLeft == window.innerWidth - 200 && direction[0] != 'down') {
    direction[0] = 'down'
  }
  else if (h1PositionTop == window.innerHeight - 180 && direction[0] != 'left') {
    direction[0] = 'left'
  }
  else if (h1PositionLeft == 20 && direction[0] != 'up') {
    direction[0] = 'up'
  }
  else if (h1PositionTop == 20 && direction[0] != 'right') {
    direction[0] = 'right'
  }

  var horse2 = document.getElementById('horse2');
  var h2PositionLeft = horse2.offsetLeft;
  var h2PositionTop = horse2.offsetTop;
  if (h2PositionLeft == window.innerWidth - 230 && direction[1] != 'down') {
    direction[1] = 'down'
  }
  else if (h2PositionTop == window.innerHeight - 200 && direction[1] != 'left') {
    direction[1] = 'left'
  }
  else if (h2PositionLeft == 30 && direction[1] != 'up') {
    direction[1] = 'up'
  }
  else if (h2PositionTop == 30 && direction[1] != 'right') {
    direction[1] = 'right'
  }

  var horse3 = document.getElementById('horse3');
  var h3PositionLeft = horse3.offsetLeft;
  var h3PositionTop = horse3.offsetTop;
  if (h3PositionLeft == window.innerWidth - 260 && direction[2] != 'down') {
    direction[2] = 'down'
  }
  else if (h3PositionTop == window.innerHeight - 260 && direction[2] != 'left') {
    direction[2] = 'left'
  }
  else if (h3PositionLeft == 50 && direction[0] != 'up') {
    direction[2] = 'up'
  }
  else if (h3PositionTop == 50 && direction[0] != 'right') {
    direction[2] = 'right'
  }

  var horse4 = document.getElementById('horse4');
  var h4PositionLeft = horse4.offsetLeft;
  var h4PositionTop = horse4.offsetTop;
  if (h4PositionLeft == window.innerWidth - 300 && direction[3] != 'down') {
    direction[3] = 'down'
  }
  else if (h4PositionTop == window.innerHeight - 300 && direction[3] != 'left') {
    direction[3] = 'left'
  }
  else if (h4PositionLeft == 80 && direction[3] != 'up') {
    direction[3] = 'up'
  }
  else if (h4PositionTop == 80 && direction[3] != 'right') {
    direction[3] = 'right'
  }

  move();
}

function myLoadEvent() {
  var start = document.getElementById('start');
  start.addEventListener('click', startClick);

}

document.addEventListener('DOMContentLoaded', myLoadEvent);
