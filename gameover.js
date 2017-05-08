var gameOver = function(game){
    var endText;
}
 
gameOver.prototype = {
  	create: function(){
        var b = game.add.sprite(0, 0, 'forest');
        b.height=600;
        b.width=800;
        
            var style = {
                font: '34px Rajdhani',
                fill: '#000',
                align: 'center'
            };
        if (win) {
            endText = game.add.text(120, 220, "You won the game!", style);
        }
        else {
            endText = game.add.text(120, 220, "You scored: " + score, style);
        }
        
  		//var gameOverTitle = this.game.add.sprite(160,160,"gameover");
		//gameOverTitle.anchor.setTo(0.5,0.5);
        if (!win) {
            var endTextPic = this.game.add.sprite(100,80,'gameover');
        }
		var playButton = this.game.add.button(game.width/2 + 200,320,"playAgainButton",this.playTheGame,this);
        playButton.width = 180;
        playButton.height = 300;
		playButton.anchor.setTo(0.5,0.5);
        
        playButton.onInputOver.add(over, this);
        playButton.onInputOut.add(out, this);
        
        function over() {
            playButton.y = playButton.y - 20;
        }
        
        function out() {
            playButton.y = 320;
        }
        var helpButton = this.game.add.button(320,520,"helpbutton",this.goToHelp,this);
        helpButton.width = 170;
        helpButton.height = 70;
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	},
    goToHelp: function() {
        this.game.state.start("Help");
    }
}