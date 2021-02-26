class Boy{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.image = loadImage("boy.png");
       
        this.x = x;
        this.y = y;
        console.log("Boyy = "+ this.y);
        this.boy = Bodies.rectangle(x,y, 200,400,options);
       
        World.add(world,this.boy);


    }
    display(){

        
        imageMode(CENTER);
        image(this.image, this.x,this.y, 200,400);

    }
}