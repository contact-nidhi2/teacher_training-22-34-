class Pendulum{
    constructor(x,y,color){
        var options ={
            density :1.2,
            stiffness:0.04,

        }
        this.radius =70;
        this.color=color;
        this.body = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();

    }
}