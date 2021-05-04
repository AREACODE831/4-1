class Player {
  constructor() {
<<<<<<< HEAD
    this.r = 60; //this is actually the diameter! not radius
=======
    this.r = 60;
>>>>>>> f83c24e8f7a2e25bfe431661412be16a2c1132a1
    this.x = w / 2;
    this.y = h - this.r;
    // this.x = w;
    // this.y = h;
    // this.r = 60;
    this.speed = 2;
    this.direction = 'still';
<<<<<<< HEAD
    //  this.img = loadImage('asset/r.png');
=======
    this.img = loadImage('asset/r.png');
>>>>>>> f83c24e8f7a2e25bfe431661412be16a2c1132a1

  }

  display() {
<<<<<<< HEAD
    // fill(255);
    //  rect(this.x, this.y, this.r, this.r);
    // rect(this.x, this.y/10, this.r, this.r);
    //
    // rect(this.x, this.y, this.r, this.r);
    image(playerImg, this.x, this.y, this.r, this.r);
    //image(this.img, 0, 0);
    //image(this.img, 0, this.y/2, this.x, this.y);
    // Displays the image at point (0, height/2) at half size
    //image(img, 0, height / 2, img.width / 2, img.height / 2);
=======
  // fill(255);
  //  rect(this.x, this.y, this.r, this.r);
  // rect(this.x, this.y/10, this.r, this.r);
  //
  // rect(this.x, this.y, this.r, this.r);
  image(this.img, this.y, this.x, this.r, this.r);
  //  image(this.img, 0, 0);
    //image(this.img, 0, this.y/2, this.x, this.y);
    // Displays the image at point (0, height/2) at half size
  //image(img, 0, height / 2, img.width / 2, img.height / 2);
>>>>>>> f83c24e8f7a2e25bfe431661412be16a2c1132a1
  }

  move() {

    switch (this.direction) {
      case 'still':
        //don't move anything
        break;
      case 'up':
        //decrease y pos
<<<<<<< HEAD
        if (this.y - this.r / 2 > 0){
        this.y -= this.speed;
      }
=======
        this.y -= this.speed;
>>>>>>> f83c24e8f7a2e25bfe431661412be16a2c1132a1
        //y = y - speed;
        break;
      case 'down':
        //increase ypos
<<<<<<< HEAD
        if (this.y < h - this.r / 2){
        this.y += this.speed;
      }
        break;
      case 'right':
        //increase xpos
        if (this.x < w - this.r / 2) {
          this.x += this.speed;
        }
        break;
      case 'left':
        //decreasing xpos
        if (this.x - this.r / 2 > 0){
        this.x -= this.speed;
      }
=======
        this.y += this.speed;
        break;
      case 'right':
        //increase xpos
        this.x += this.speed;
        break;
      case 'left':
        //decreasing xpos
        this.x -= this.speed;
>>>>>>> f83c24e8f7a2e25bfe431661412be16a2c1132a1
        break;
      default:
        break;
    }
  }
}
