
class Coin {
  constructor(){
    this.r = 50;
    this.x = random(w);
    this.y = 0 - this.r;
    // this.r = 60;
    // this.x = random(w);
    // this.y = h - this.r;
    // this.img1 = loadImage('asset/hole.png');

  }
  display(){
    //ellipse(this.x, this.y, this.r, this.r);
    image(coinImg, this.x, this.y, this.r*2, this.r*2);
    // image(this.img1, this.x, this.x, this.r, this.r);
  }

  move(){
    this.y++;
  }
}
