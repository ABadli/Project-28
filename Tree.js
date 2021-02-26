class Tree{
    constructor(x,y){
        
        var options = {
            isStatic : true
        }
        this.image=loadImage("tree.png");
        this.x = x;
        this.y = y;
        this.tree = Bodies.rectangle(x,y,50,300,options);

        World.add(world, this.tree);


    }

    display(){
        var pos = this.tree.position;

       // console.log("Tree Display")
        fill("red");
        //rect(this.x,this.y,50,300);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,500,700);
       
    }
}