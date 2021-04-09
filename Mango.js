class Mango{
    constructor(x,y,radius){
var options={
    isStatic:true,
    'restitution':0.5,
    'friction':1.0
}
this.radius=radius;
this.x=x
this.y=y
this.image=loadImage("Plucking mangoes/mango.png")
this.body=Bodies.circle(this.x,this.y,this.radius,options)


World.add(world,this.body)
    }
    display(){
        push();
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle)
fill(255,0,255)
imageMode(CENTER);
ellipseMode(CENTER)
image(this.image,0,0,this.radius*2,this.radius*2);
pop();
    }
}