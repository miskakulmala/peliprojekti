$(document).ready( function () {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    document.body.appendChild(canvas);
    var button = document.getElementById('button');
    
    document.querySelector("#slowbutton").onclick = function() {
        changeSpeed(false)
    }
    
    document.querySelector("#fastbutton").onclick = function() {
        changeSpeed(true)
    }
    
    document.querySelector("#resetbutton").onclick = function() {
        reset();
        enemies.splice(0,8);
        createEnemy();
    }
    

    var playerImage = new Image();
    playerImage.src = "https://openclipart.org/image/2400px/svg_to_png/215080/SpriteSheet.png";
    var coalImage = new Image();
    coalImage.src = "background.jpg"



    function sprite (options) {		
        var that = {};			
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        
        that.render = function () {

        // Draw the animation
        that.context.drawImage(
           that.image,
           player.spriteX,
           player.spriteY,
           450,
           580,
           player.x-player.w/2,
           player.y-player.h/2,
           player.w,
           player.h);
        };
        return that;
    }

    var coin = sprite({
        context: canvas.getContext("2d"),
        width: 100,
        height: 100,
        image: playerImage
    });
    
    

    
    createEnemy();
    
    var render = function() {
        context.fillStyle = "#000000";
        context.fillRect(0, 0, 600, 600);
        context.drawImage(coalImage,0,0,canvas.width,canvas.height)
        drawEnemy(context);
        drawPlayer(context);
        coin.render();
        
    };
    

    
    
    function main() {
        render();
        update();
        move();
        requestAnimationFrame(main);
        collision();
    };

    main(); 
    
});