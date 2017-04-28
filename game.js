var interval = 0;
var h1PositionLeft = 0;
var direction = [];
var lapCount = [];
var finished = [];
var order = [];
var ranked = [];
var timer;
var numberOfFinishers = 0;
var speed = [];
var turningPoint1 = [];
var turningPoint2 = [];
var turningPoint3 = [];
var turningPoint4 = [];
var bettingMoney = 100;
var betValue;
var bettingHorse;
var laps;
var odds = [];

for (var i = 0; i < 4; i++) {
  odds[i] = 2;
}

function startClick() {
  betValue = document.getElementById('amount').value;
  laps = document.getElementById('lapCount').value;
  if (laps > 0) {
    if (bettingMoney > 0 && betValue <= bettingMoney && betValue > 0) {
      for (var i = 0; i < 4; i++) {
        direction[i] = 'right';
        lapCount[i] = 0;
        finished[i] = 'no';
        ranked[i] = false;
        speed[i] = 1;
        var horseID = 'horse' + (i+1);
        var horse = document.getElementById(horseID);
        horse.style.top = ((i * 4) + 4) + 'vh';
        horse.style.left = 20 + 'vw';
        var result = 'result' + (i + 1);
        document.getElementById(result).className = '';

        turningPoint1[i] = Math.ceil((window.innerWidth/100)*70) + ((window.innerWidth/100)*Math.ceil(Math.random() * 10));
        turningPoint2[i] = Math.ceil((window.innerHeight/100)*70) + ((window.innerWidth/100)*Math.ceil(Math.random() * 10));
        turningPoint3[i] = Math.ceil((window.innerWidth/100)*2.5) + ((window.innerWidth/100)*Math.ceil(Math.random() * 10));
        turningPoint4[i] = Math.ceil((window.innerHeight/100)*2.5) + ((window.innerWidth/100)*Math.ceil(Math.random() * 10));
      }
      numberOfFinishers = 0;
      timer = setInterval(myInterval, 1);
      document.getElementById('start').disabled = true;
      var dropdown = document.getElementById('bethorse');



      document.getElementById('funds').innerHTML = (bettingMoney - betValue);
      bettingMoney = bettingMoney - betValue;
      bettingHorse = dropdown.options[dropdown.selectedIndex].value;
      console.log('Laps: ' + laps);
      console.log('Horse bet on: ' + bettingHorse);
      console.log('Amount bet: ' + betValue);
      console.log('Betting Money left:' + bettingMoney);
    }
    else {
      alert('You do not have enough money for that bet!');
    }
  }
  else {
    alert('Please enter a valid lap count');
  }
}

function resultsScreen() {
  var winner;
  var winnerDigit;
  for (var i = 0; i < 4; i++) {
    var horseID = 'horse' + (order[i] + 1);
    var result = 'result' + (i + 1);
    console.log(result);
    console.log(order[i]);
    document.getElementById(result).className = horseID;
    if (i == 0) {
      winner = horseID;

    }
  }
  winnerDigit = order[0];
  if (winner == bettingHorse) {
    bettingMoney = bettingMoney + (betValue * odds[winnerDigit]);
    document.getElementById('funds').innerHTML = bettingMoney;
  }

  for (var i = 0; i < 4; i++) {
    if (i == winnerDigit) {
      odds[i] = odds[i] / 2;
      var oddsReference = 'odds' + (i + 1)
      document.getElementById(oddsReference).innerHTML = odds[i];
    }
    else {
      var oddsReference = 'odds' + (i + 1)
      odds[i] = odds[i] * 2;
      document.getElementById(oddsReference).innerHTML = odds[i];
    }
  }
  if (bettingMoney == 0) {
    alert('You are out of money!');
  }
}

function move() {
  for (var i = 0; i < 4; i++) {
    var horseID = 'horse' + (i+1);
    var horse = document.getElementById(horseID);
    if (lapCount[i] == laps && horse.offsetLeft > (window.innerWidth/(7/2))) {
      horse.className = 'horse standRight';
      finished[i] = 'yes'
      if (ranked[i] == false) {
        ranked[i] = true;
        //console.log(numberOfFinishers);
        order[numberOfFinishers] = i;
        //console.log('finishing order: ' + order[numberOfFinishers]);
        numberOfFinishers++;
      }
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
      //console.log(turningPoint1[i]);
      if (horseLeft >= turningPoint1[i]) {
        console.log('Down ' + horseID + ' ' +horseLeft);
        direction[i] = 'down';
        speed[i] = Math.ceil(Math.random() * 2);
      }
    }
    else if (direction[i] == 'down') {
      //console.log(turningPoint2[i]);
      if (horseTop >= turningPoint2[i]) {
        console.log('Left ' + horseID + ' ' +horseTop);
        direction[i] = 'left';
        speed[i] = Math.ceil(Math.random() * 2);
      }
    }
    else if (direction[i] == 'left') {
      //console.log(turningPoint3[i]);
      if (horseLeft <= turningPoint3[i]) {
        console.log('Up ' + horseID + ' ' +horseLeft);
        direction[i] = 'up';
        speed[i] = Math.ceil(Math.random() * 2);
        lapCount[i] = lapCount[i] + 1;
        console.log(lapCount[i]);
      }
    }
    else if (direction[i] == 'up') {
      //console.log(turningPoint4[i]);
      if (horseTop <= turningPoint4[i]) {
        console.log('Right ' + horseID + ' ' +horseTop);
        direction[i] = 'right';
        speed[i] = Math.ceil(Math.random() * 2);
      }
    }
  }
  move();
}

function myLoadEvent() {
  var start = document.getElementById('start');
  start.addEventListener('click', startClick);
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
