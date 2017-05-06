var gameOver = function(game){}
 
gameOver.prototype = {
  	create: function(){
        var b = game.add.sprite(0, 0, 'forest');
        b.height=600;
        b.width=800;
        
  		//var gameOverTitle = this.game.add.sprite(160,160,"gameover");
		//gameOverTitle.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(game.width/2,340,"playButton",this.playTheGame,this);
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
	playTheGame: function(){
		this.game.state.start("TheGame");
	}
}