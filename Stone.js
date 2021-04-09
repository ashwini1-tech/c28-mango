class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.radius=radius
        this.image=loadImage("Plucking mangoes/stone.png")
        this.body=Bodies.circle(x,y,radius/2,options)
        
        
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}