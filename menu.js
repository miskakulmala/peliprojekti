var gameTitle = function(game){
    var rats;
}
 
gameTitle.prototype = {
    
  	create: function(){
        var b = game.add.sprite(0, 0, 'forest');
        b.height=600;
        b.width=800;
        
        var text = game.add.sprite(200,50,'coallogo');
        text.width = 400;
        text.height = 150;
        
        rats = game.add.physicsGroup();
        
        var y = 80;
        
        for (var i = 0; i < 9; i++)
        {
        var rat = rats.create(game.world.randomX, y, 'alien');
        rat.width = 40;
        rat.height = 40;
        rat.body.velocity.x = game.rnd.between(100, 300);
        y += 48;
        }
        


        
        
        
		//var gameTitle = this.game.add.sprite(game.width/2,160,"peat");
		//gameTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(game.width/2,320,"playButton",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
        
        playButton.onInputOver.add(over, this);
        playButton.onInputOut.add(out, this);
        
        function over() {
            playButton.y = playButton.y - 20;
        }
        
        function out() {
            playButton.y = 320;
        }
	},
    update: function() {
        function checkPos (rat) {

        if (rat.x > 800)
        {
        rat.x = -100;
        }
        }
        rats.forEach(checkPos,this);
    },
	playTheGame: function(){
		this.game.state.start("TheGame");
	},
    
}