var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
		this.game.load.image('alien', 'assets/smallcoal.gif');
        //this.game.load.image('alien','assets/smilingcoal.gif')
        this.game.load.image('forest','assets/background.jpg');
        //this.game.load.image('player', 'assets/obama-sprite.png');
        this.game.load.image('peat','assets/peat.png');
        //this.game.load.image('playButton', 'assets/playmenu.png');
        this.game.load.image('playButton','assets/playbutton.png')
        this.game.load.image('playAgainButton','assets/playagainbutton.png')
        this.game.load.image('coallogo','assets/coallogo.png');
        this.game.load.image('gameover','assets/gameover.png');
        
        this.game.load.image('helpbutton','assets/helpbutton.png');
        this.game.load.image('backbutton','assets/backbutton.png');
        
        
        this.game.load.spritesheet('soundsprite','assets/soundpic.png',2000,2000)
        //   this.game.load.image('blob','assets/blob.gif');
        this.game.load.audio('backgroundmusic', 'assets/pelimusa.mp3');
        this.game.load.audio('coal','assets/voittosound.mp3');
        this.game.load.audio('sad', 'assets/sadmusic.mp3');
        this.game.load.audio('slap', 'slap.mp3');
        this.game.load.spritesheet('playersprite','assets/SpriteSheet.png',460,600);
        this.game.load.spritesheet('healthbar', 'assets/healthbar.png',204,30);
        this.game.load.image('diamond', 'assets/diamond.png');
        this.game.load.audio('diamondSound', 'assets/diamond.mp3');
        this.game.load.script('font.rajdhani','//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}