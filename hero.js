class ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':1.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = radius*2;
      this.height = radius*2;
      this.image = loadImage("images/Superhero-01.png");
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("grey");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  