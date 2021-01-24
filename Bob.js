class bob{
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':1.5,
          'friction':1,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
	  this.height = height;
    
    

    
    Matter.Bodies.circle(x,y,20,20)

   
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     
      
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("white");

      stroke("black");
      fill("violet");
      ellipse(0, 0, this.width, this.height);
     
      pop();
    }
    
  }

  

 

 
  
  
  