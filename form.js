class Form {

    constructor(){
        this.input = createInput("Enter your name");
        this.button = createButton("Play");
        this.title = createElement("h1");
        this.greeting  = createElement("h2");
        
      }

      showOrder(){
        
        this.title.html("Car Racing Game");
        this.title.position(width/2 - 50, 0);
    
        


        this.input.position(width/2 , height/2);
        this.button.position(width / 2 , height / 2 + 50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            //object name thing.
            player.name = this.input.value();
            

            playerCount = playerCount + 1;
            player.index = playerCount ; 
    
            player.updatePlayerCount(playerCount);
             
            player.updatePlayerInfo();

            this.greeting.html("Hello " + player.name);            
            this.greeting.position(width/2 - 30 , height/2 - 50);
              
        })
     }  

}

//first we need to read the playerCount value from the database
//we need to store it in global variable 
// Increment the value and update it back in the database

// .update -  appends the data to the database
// .set - remove the previusone and resets the databse data  
// .on - reads the data