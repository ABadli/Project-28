class Ground{

    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ground = Bodies.rectangle(x,y,width,height);
        World.add(world, this.ground);
        
    }

    display(){
        var pos = this.ground.position;

     //   console.log("Ground display" + this.x + this.y+this.width+this.height)

       // push();
      //  translate(pos.x,pos.y);
      //  rectMode(CENTER);
        fill("brown");
        rect(this.x,this.y,this.width,this.height);
      //  pop();
    }
}