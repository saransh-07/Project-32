class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stiffness:0.5
        }
        this.sling = Constraint.create(options);
       
        this.pointB = pointB;
        World.add(world,this.sling);
    }
    
    fly(){
this.sling.bodyA = null;
}
attach(body){
    this.sling.bodyA = body;
}  

    display(){
        
        if(this.sling.bodyA){
        stroke ("green");
        strokeWeight(2);
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}
