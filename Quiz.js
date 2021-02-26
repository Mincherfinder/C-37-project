class Quiz{
 constructor(){}
    
getState(){
  var getStateRef = database.ref('gameState')  
  gameStateRef.on("value", function(data){
    myGameState = data.val()})
}

updateState(state){
  database.ref('/').update({gameState:state})
}

 async start(){
        if (gameState == 0){
            contestant = new Contestant()
            var countRef =await database.ref('contestantCount').once("value");

            if(countRef.exists()){

                myContestantCount = countRef.val();
                contestant.getCount();
            }

            question = new Question
            question.display();
        }
 }
 

}