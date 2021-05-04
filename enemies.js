
class Enemy {
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 7;
    // this.r = 60;
    // this.x = random(w);
    // this.y = h - this.r;
    // this.img1 = loadImage('asset/hole.png');

  }
  display(){
    push();
    //fill(0);
    //ellipse(this.x, this.y, this.r, this.r);
    image(enemyImg, this.x, this.y, this.r, this.r);
  //  pop();

    //fill(0);
    //ellipse(this.x, this.y, this.r, this.r);
    //pop();
    // image(this.img1, this.x, this.x, this.r, this.r);
  }

  move(){
    this.y++;

  }
}
