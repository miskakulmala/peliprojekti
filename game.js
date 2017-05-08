/*
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create , update: update});
*/


//var game = new Phaser.Game(800, 600, Phaser.AUTO,'game');

//var game = new Phaser.Game(800, 600, Phaser.CANVAS, "game");
        //        var game = new Phaser.Game(800, 600, Phaser.AUTO,'game');



var score;
var scoreText;
//var blobSpeed = -40;
var soundToggle;
var timer;
var diamonds;
var health;
var hlth;

var theGame = function() {
   

var player;
var aliens;
var blobs;
//var mysprite;

var music;

};

theGame.prototype = {


create: function() {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    score = 0;
    
    //window.addEventListener(game.input.keyboard.isDown(Phaser.Keyboard.DOWN),event.preventDefault())
    
    this.timer=this.game.time.events.loop(5000,this.moveDiamond,this);
    
function createAliens(y) {
    var alien = aliens.create((game.width-40)*Math.random(), Math.random() * (game.height - 40), 'alien');
    alien.width = 40;
    alien.height = 40;
    alien.checkWorldBounds = true;
}
    

function createBlobs(y) {
    var blob = blobs.create((game.width-25) * Math.random() + 25, y * Math.random(), 'peat');
    blob.width = 50;
    blob.height = 50;
    blob.checkWorldBounds = true;
    blob.body.velocity.x = Math.random() * 150;
    blob.body.velocity.y = Math.random() * 150;
    game.physics.enable(blob, Phaser.Physics.ARCADE);
    blob.body.collideWorldBounds = true;
    blob.body.bounce.setTo(1, 1);  
}
    
   
    health = 200;
        
    var b = game.add.sprite(0, 0, 'forest');
    b.height=600;
    b.width=800;
    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    
    //  We only want world bounds on the left and right
    game.physics.setBoundsToWorld();
    
    music = game.add.audio('backgroundmusic');
    coalSound = game.add.audio('coal');
    loseSound = game.add.audio('sad');
    diamondSound = game.add.audio('diamondSound');
    slap = game.add.audio('slap');
    music.loopFull();
    
    hlth = game.add.sprite(200, 15, 'healthbar');
    hlth.frame = 0;

    //player = game.add.sprite(game.width/2, game.height/2, 'player');
    player = game.add.sprite(game.width/2, game.height/2, 'playersprite');
    player.frame = 1;
    player.anchor.setTo(0.5, 0.5);
    player.width = 50;
    player.height = 50;
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    

    aliens = game.add.group();
    aliens.enableBody = true;
    aliens.physicsBodyType = Phaser.Physics.ARCADE;

    
    blobs = game.add.group();
    blobs.enableBody = true;
    blobs.physicsBodyType = Phaser.Physics.ARCADE;
    
    diamonds = game.add.group();
    diamonds.enableBody = true;
    diamonds.physicsBodyType = Phaser.Physics.ARCADE;
    //diamond = game.add.sprite(Math.random() * (game.width - 40) , Math.random() * (game.heigth - 40), 'diamond');
    //diamond.height = 40; 
    //diamond.width = 40;
    //game.physics.arcade.enable(diamond);
    
    this.soundToggle = this.game.add.button(this.game.world.width - 150, 15, 'soundsprite', this.toggleSound, this);
    if (this.game.sound.mute) {
       this.soundToggle.frame = 1;
    } else {
        this.soundToggle.frame = 0;
    }
    
    //this.soundToggle.anchor.setTo(0.5, 0.5);
    this.soundToggle.width = 50;
    this.soundToggle.height = 50;
    
    
    for (var y = 0; y < 4; y++)
    {
        createAliens(y);
    }
    
    for (var y = 0; y < 4; y++)
    {
        createBlobs(y);
    }
    

  

},
toggleSound: function() {		
      if (this.game.sound.mute) {
          this.game.sound.mute = false;
          this.soundToggle.frame = 0;
      } else {
          this.game.sound.mute = true;
          this.soundToggle.frame = 1;
      }
    },/*
moveDiamond: function() {
    diamonds.removeAll();
    var diamond = diamonds.create((game.width-40)*Math.random(), Math.random() * (game.height - 40), 'diamond');
        diamond.width = 40;
        diamond.height = 40;
        diamond.checkWorldBounds = true;
},
        
*/
    
moveDiamond: function() {
    var diamond = diamonds.create((game.width-40)*Math.random(), Math.random() * (game.height - 40), 'diamond');
        diamond.width = 40;
        diamond.height = 40;
        diamond.checkWorldBounds = true
        setTimeout(function(){ 
            diamonds.removeAll(); 
        }, 2000)
},
    
    
update: function() {

    blobs.forEach(function(item) {
        item.body.velocity.x = 1.0004*item.body.velocity.x;
        item.body.velocity.y = 1.0004*item.body.velocity.y;
    });
    
    
function createAliens(y) {
    var alien = aliens.create((game.width-40)*Math.random(), Math.random() * (game.height - 40), 'alien');
    alien.width = 40;
    alien.height = 40;
    alien.checkWorldBounds = true;
}
    

function diamondCollision(player, diamond) {
    //diamond.body.x = Math.random() * (game.width - 40);
    //diamond.body.y = Math.random() * (game.height - 40);
    diamonds.remove(diamond);
    diamondSound.play();
    score += 5;
    scoreText.text = 'Score: ' + score;
}
    
function collisionHandler(player, alien) {
    aliens.remove(alien);
    var newY = Math.random() * 3;
    createAliens(newY);  
    console.log(score);
    coalSound.play();
    score += 1;
    scoreText.text = 'Score: ' + score;
}

function blobCollision(player, blob) {
    health -= 2;
    if (health != 0) {
        slap.play();
    }
    
    
    if (health == 0) {
        this.game.state.start("GameOver");
        loseSound.play();
        music.mute = true;
    } else if (health == 160) {
        hlth.frame = 1;
    } else if (health == 120) {
        hlth.frame = 2; 
    } else if (health == 80) {
        hlth.frame = 3; 
    } else if (health == 40) {
        hlth.frame = 4; 
    }    
    
}
    game.physics.arcade.overlap(player, aliens, collisionHandler, null, this);
    game.physics.arcade.overlap(player, blobs, blobCollision, null, this);
    game.physics.arcade.overlap(player, diamonds, diamondCollision, null, this);
    
    
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        player.x -= 4;
        player.frame = 9;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        player.x += 4;
        player.frame = 4;
    }
    

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        player.y -= 4;
        player.frame = 12;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        player.y += 4;
        player.frame = 2;
    }
    

},


};

