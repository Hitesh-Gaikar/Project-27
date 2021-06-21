class Rubber{

    constructor(x,y,radius){
    
    var opstions={
        restitution:1,
        density:2,
        friction:0.3
    }
    
    
    this.body= Bodies.circle(x,y,radius,opstions)
    World.add(world,this.body)
    this.radius= 2*radius
    
    
    }
    
    display()
    
    {
        push()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        fill ("yellow")
        rectMode(CENTER)
        circle(0,0,this.radius)
        pop()
    }
    
    }