class Stone {
    constructor(x, y) {
      var options = {
        'density':15,
        'friction': 1,
        'restitution':1.5
      };
      this.body = Bodies.rectangle(x, y, 50, 10, options);
      this.width = 100;
      this.height =100;
      World.add(world, this.body);
    };
    display(){
      var Stonepos = this.body.position;
      
      push();
      translate(Stonepos.x,Stonepos.y);
      rectMode(CENTER)
      strokeWeight(3);
      stroke('white')
      fill('green')
      rectMode(CENTER)
      rect(0,0, this.width, this.height);
      pop();
    };
  };
  