class Sling{

    constructor(bodyA,pointB){

        var options = {
            stiffness :0.01,
            length :1,
            bodyA : bodyA,
            pointB: pointB
        }
       
        this.bodyA = bodyA;
        this.pointB = pointB;
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling)
    }
    fly(){

        console.log("Fly")
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA=body;
    }
    
    display(){
       if(this.sling.bodyA){
			var pointA=this.bodyA.position;
			var pointB=this.pointB
            console.log("point: "+pointB.x);

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
    }
}