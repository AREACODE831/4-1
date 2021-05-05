'use strict';


let state = 'title';
let cnv;
let points = 1;
let lives = 3;
let w = 600;
let h = 600;
let player;
let coins = [];
let enemies = [];
//let bg;
let playerImg;
let coinImg;
let enemyImg;
let titleImg;


function preload() {
  playerImg = loadImage('asset/r.png');
  coinImg = loadImage('asset/hole.png');
  enemyImg = loadImage('asset/e.png');
  titleImg = loadImage('asset/title.png');
}


function setup() {
  cnv = createCanvas(w, h);
  //bg = loadImage('asset/hole.jpg');
  frameRate(50);
  imageMode(CENTER);
  rectMode(CENTER);
  textFont('Futura');

  player = new Player();

  //coins[0] = new Coin();
  coins.push(new Coin());
  enemies.push(new Enemy());
}

function draw() {
  //background(bg);

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    case 'game over':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked);
      break;
    default:
      break;
  }

  // if (state === 'title') {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  //
  // } else if (state === 'level 1' && points > 50) {
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // } else {
  //
  // }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key == ' ') {
    player.direction = 'still';
  }
}


function keyReleased() {

  let numberKeysPressed = 0;

  if (keyIsDown(LEFT_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(DOWN_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(UP_ARROW)) {
    numberKeysPressed++;
  }
  console.log(numberKeysPressed);
  if (numberKeysPressed == 0){
  player.direction = 'still';
}
}

function title() {
  background(147, 103, 255);
  textSize(80);
  textFont('monospace');
  fill(255);
  textAlign(CENTER);
  //text('Rabbit Hole', w / 2, h / 5);
  image(titleImg, w / 2, h / 3, 300, 250);

  textSize(30);
  text('click anywhere to start!', w / 2, h / 1.1);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(107, 242, 217);
  //text('click for points', w/2, h - 30);

//frequency of coin droping

  if (random(1) <= 0.01) {
    coins.push(new Coin());
  }
  if (random(1) <= 0.02) {
    enemies.push(new Enemy());
  }

  player.display();
  player.move();

  // coins[0].display();
  // coins[0].move();

  //iterating through coins array to display and move them
  //using for loop
  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
  }

  //using foreach loop
  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })

  //using for of loop
  // for (let coin of coins){
  //   coin.display();
  //   coin.move();
  // }

  //check for collision, if there is a collision increase points by 1 and splice that coin out of array.
  //need to iterate backwards through array

  for (let i = coins.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      //console.log('coin is out of town');

    }
  }

  //enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      points--;
      console.log(points);
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
      //console.log('enemies is out of town');

    }
  }

  text(`pOiNtS: ${points}`, w / 7, h / 15);

//check point values to win or lose the game.
  if (points >= 7){
    state = 'you win';
  } else if (points <= -1){
    state = 'game over';
  }

}

function level1MouseClicked() {
  // points++;
  // //points += 1;
  // //points = points + 1;
  // console.log('points = ' + points);
  // if (points >= 10){
  //   state = 'you win';
  // }


}

function youWin() {
  background(255, 126, 177);
  textSize(50);
  textFont('Futura');
  stroke(255);
  text('Hello, Alice.', w / 2, h / 2);

  textSize(30);
  text('click anywhere to restart!', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'title';
  points = 1;
}

function gameOver() {

  background( 107, 215, 255);
  textSize(50);
  textFont('Futura');
  stroke(255);

  //check number of lives
  if (lives >= 0){
    //if you have a life, you lose one.
    // text(lives + ' lives left', w / 2, h / 2);
    // text(lives + ' lives left', w / 2, h / 2);
    text(`lives left: ${lives}`, w /2, h / 2);
    textSize(20);
    text('continue? click anywhere.', w / 2, h * 3 / 4);
  } else {
    //game over
    text('Go back to the reality.', w / 2, h / 2);
    textSize(20);
    text('click anywhere to restart!', w / 2, h * 3 / 4);
  }

}

function gameOverMouseClicked(){
  if (lives >= 0){ //this means they have 0 lives going into it.
  lives--;
  state = 'level 1';

} else {
  state = 'title';
}
  points = 1;

}
