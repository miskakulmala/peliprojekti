var gameTitle = function(game){
    var coals;
}
 
gameTitle.prototype = {
    
  	create: function(){
        
        var background = game.add.sprite(0, 0, 'forest');
        background.height=game.height;
        background.width=game.width;
        
        var logo = game.add.sprite(200,50,'coallogo');
        logo.width = 400;
        logo.height = 150;
        
        coals = game.add.physicsGroup();

        
        //Creating the randomly floating coals of the menu
        var y = 200;
        for (var i = 0; i < 9; i++)
        {
        var coal = coals.create(game.world.randomX, y, 'alien');
        coal.width = 40;
        coal.height = 40;
        coal.body.velocity.x = game.rnd.between(100, 300);
        y += 40;
        }
        
        //Creating the "play" and "help" -buttons and their features.
		var playButton = this.game.add.button(game.width/2,360,"playButton",this.playTheGame,this);
        playButton.width = 180;
        playButton.height = 260;
		playButton.anchor.setTo(0.5,0.5);
        
        playButton.onInputOver.add(over, this);
        playButton.onInputOut.add(out, this);
        
        function over() {
            playButton.y = playButton.y - 20;
        }
        
        function out() {
            playButton.y = 360;
        }
        
        var helpButton = this.game.add.button(320,520,"helpbutton",this.goToHelp,this);
        helpButton.width = 170;
        helpButton.height = 70;
	},
    update: function() {
        
        //Makes the randomly floating coals go through the screen again.
        function checkPos (coal) {
            if (coal.x > 800)
            {
                coal.x = -100;
            }
        }
        coals.forEach(checkPos,this);
    },
	playTheGame: function(){
		this.game.state.start("TheGame");
	},
    goToHelp: function() {
        this.game.state.start("Help");
    }
    
}