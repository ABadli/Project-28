constructor(x,y,r){
    var options = {
        isStatic : false,
        restitution : 0,
        friction : 1,
        density : 1.2

    }
    console.log("Stone: "+x)
    this.image = loadImage("stone.png");
    this.x = x;
    this.y = y;
    this.r = r;
    this.stone = Bodies.circle(this.x,this.y,this.r/2,options);
    console.log("Stone: "+this.stone.position.x);
    World.add(world, this.stone);
}

display(){
    var pos = this.stone.position;

    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    ellipseMode(RADIUS)
    image(this.image,0,0,this.r*2,this.r*2);
    pop();

}