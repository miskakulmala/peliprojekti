var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
        console.log("moi")
		this.game.load.image('alien', 'assets/smallcoal.gif');
        this.game.load.image('forest','assets/background.jpg');
        this.game.load.image('player', 'assets/obama-sprite.png');
        this.game.load.image('peat','assets/turve.png');
        this.game.load.image('playButton', 'assets/playmenu.png')
        //   this.game.load.image('blob','assets/blob.gif');
        this.game.load.audio('backgroundmusic', ['assets/gamemusic.mp3', 'assets/gamemusic.ogg']);
        this.game.load.audio('coal','assets/nakkimukisound.mp3');
        this.game.load.audio('sad', 'assets/sadmusic.mp3');
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}