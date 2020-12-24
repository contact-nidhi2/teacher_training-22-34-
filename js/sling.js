class Sling{
    constructor(bodyA,pointB){
        var options={
          bodyA : bodyA,
          pointB : pointB,
          stiffness:1,
          length:220,
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);

    }
    display(){
        var posA =this.sling.bodyA.position;
        var posB= this.sling.pointB;
        strokeWeight(4);
        line(posA.x,posA.y,posB.x,posB.y);
    }
}
