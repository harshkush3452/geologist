class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 50, 10, options);
      this.width = 100;
      this.height = 30;
      World.add(world, this.body);
    };
    display(){
      var Ironpos = this.body.position;
      
  
      push();
      translate(Ironpos.x, Ironpos.y);
      rectMode(CENTER)
      strokeWeight(3);
      stroke('white')
      fill('red')
      rectMode(CENTER)
      rect(0,0, this.width, this.height);
      pop();
    };
  };
  