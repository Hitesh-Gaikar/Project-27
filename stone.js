class Stone{

    constructor(x,y,width,height){
    
    var opstions={
        restitution:0.3,
        density:0.5,
        friction:0.5
    }
    
    
    this.body= Bodies.rectangle(x,y,width,height,opstions)
    World.add(world,this.body)
    this.width=width;
    this.height=height;
    
    
    }
    
    display()
    
    {
        push()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        fill ("gray")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
    
    }
    