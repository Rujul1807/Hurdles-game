class Frontform{
constructor(){
this.input=createInput("name");
this.button=createButton("Play");
this.topic=createElement('h2');

}

hide(){
    this.button.hide();
    this.input.hide();
    this.topic.hide();
}
display(){
    this.topic.html("WELCOME TO HURDLES GAME");
    this.input.position(displayWidth/2-50,displayHeight/2-50);
    this.topic.position(displayWidth/2-100,displayHeight/2-100);
    this.button.position(displayWidth/2+100,displayHeight/2+100)
    

this.button.mousePressed(()=>{
    this.button.hide();
    this.input.hide();
    this.topic.hide();   
athlete.name=this.input.value;
playerCount+=1;
athlete.index=playerCount;
athlete.updateCount(playerCount);
athlete.update();



})
}
}