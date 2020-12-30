class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setDensity (this.body, 7)
    this.route = [];
    this.smoke = loadImage("sprites/smoke.png")
  }
  display() {
    super.display();

    if(this.body.velocity.x > 5){
      this.route.push ([this.body.position.x, this.body.position.y])
    }

   for(var i = 0; i < this.route.length; i++){
    image(this.smoke, this.route[i][0], this.route[i][1])

   }
  }
}
