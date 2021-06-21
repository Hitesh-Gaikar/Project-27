class Hammer{

    constructor(x,y,width,height){
    
    var opstions={
        restitution:0.3,
        density:5,
        friction:0.5
    }
    
    
    this.body= Bodies.rectangle(x,y,width,height,opstions)
    World.add(world,this.body)
    this.width=width;
    this.height=height;
    
    
    }
    
    display()
    
    {
this.body.position.x= mouseX;
this.body.position.y= mouseY;        

        push()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        fill ("red")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
    
    }