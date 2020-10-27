class Player {
    constructor (){

        //propertes 
        this.x = 0;
        this.y = windowHeight/2;
        this.name = null;
        this.index = null;
        this.score = 0;

    }
     
    readPlayerCount(){
        database.ref("playerCount").on("value", function (data) {
            playerCount = data.val();    
        })
    }

    updatePlayerCount(count){
        database.ref("/").update({
            playerCount : count

        })
    }
    

    updatePlayerInfo(){
        database.ref("player_"+ this.index).update({
            name : this.name,
            score : this.score,
            yPosition : this.y,
            xPosition : this.x

           })
           
    }


}