class Form {

    constructor() {
    
      this.button = createButton();
      this.button1 = createButton();
      this.button2 = createButton();
      this.greeting = createElement('h3');
      this.title = createElement('h2');
      this.greeting1 = createElement('h3');
      this.greeting2 = createElement('h3')
    }
   
  
    display(){
      this.title.html("Fear");
      this.title.position(displayWidth/2 - 50, 0);
  
      fill("green")
      this.button.position(100,100)
      this.button1.position(700,300)
      this.button2.position(900,100);
      
      this.button.mousePressed(()=>{
        gameState=1
        fill("green")
        this.button.position (random(0,1000),random(0,1000));
        fill("white")
        this.greeting.html("Good Job");
        this.greeting.position(this.button.position.x, this.button.position.y)
        this.greeting1.hide();
        this.greeting2.hide();
        this.title.hide();
      });
      this.button1.mousePressed(()=>{
        fill("green")
      this.button1.position (random(0,1000),random(0,1000));
      fill("white")
      this.greeting1.html("Almost there");
      this.greeting1.position(this.button1.position.x,this.button1.position.y);
      this.greeting.hide();
      this.greeting2.hide()
      this.title.hide();
      gameState=2;
});
      this.button2.mousePressed(()=>{
        fill("green");
      this.button2.position (random(0,1000),random(0,1000));
      fill("white");
      this.greeting2.html("Not Working:(");
      this.greeting2.position(this.button2.position.x,this.button2.position.y);
      this.greeting1.hide();
      this.greeting.hide();
      this.title.hide();
      gameState=1
      });
    }
  }

  