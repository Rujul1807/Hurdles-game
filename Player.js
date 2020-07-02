class Player{
constructor(){
this.index=null;
this.distance=0;
this.name=null;
this.rank=null;

}
getCount(){
    var playerCountref=database.ref('playerCount');
    playerCountrefref.on("value",(data)=>{
    playerCount=data.val();

    })
}
 updateCount(count){
   database.ref('/').update({
       playerCount:count
   });
    }
update(){
var playerIndex="athletes/athlete"+this.index;
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})

}
getRank(){
  database.ref('Rank').on("value",(data)=>{
    this.rank=data.val();

  })  
}
static updateRank(rank){
    database.ref('/').update();
 Rank:rank
}

}