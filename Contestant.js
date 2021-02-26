class Contestant{
    
    constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      mycontestant = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      distance:this.answer
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestant');
    contestantInfoRef.on("value",(data)=>{
      allContestant = data.val();
    })
  }

} 