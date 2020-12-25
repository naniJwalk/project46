class illuison{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,20,100);
        this.width=20;
        this.height=100;
        this.image = loadImage("skeleton.jpg");
        World.add(world,this.body);
    }
    updateY(){     
    if(frameCount%200===0)  { 
        Matter.Body.setPosition(this.body, {x:random(0,1000), y:random(0,1000)})
    }
    }
    showIlluison(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,20,100);
    }
}