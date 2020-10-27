class Game {

    constructor(){

    }    


    readGameState(){
        database.ref("gameState").on("value",(data) => {    //callBack 
            onlineGameState =  data.val();    
          })
         
    }


    updateGameState(state){
        database.ref("/").update({
            gameState : state
            
        })
    
    }

    start(){
        
        //creation of player.
        if(onlineGameState === 0){
            player = new Player();
            player.readPlayerCount();
            form = new Form();
            form.showOrder();
        }


    }


}