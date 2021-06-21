class Sand{

    constructor(x,y,radius){
    
    var opstions={
        restitution:0.2,
        density:0.1,
        friction:0.3
    }
    
    
    this.body= Bodies.circle(x,y,radius,opstions)
    World.add(world,this.body)
    this.radius= radius
    
    
    }
    
    display()
    
    {
        push()
        translate (this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        fill ("brown")
        rectMode(CENTER)
        circle(0,0,this.radius)
        pop()
    }
    
    }