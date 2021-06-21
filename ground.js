class ground{

constructor(x,y,width,height){

var opstions={
    isStatic:true
}


this.body= Bodies.rectangle(x,y,width,height,opstions)
World.add(world,this.body)
this.width=width;
this.height=height;


}

display()

{
    push()
    fill ("brown")
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    pop()
}

}















































