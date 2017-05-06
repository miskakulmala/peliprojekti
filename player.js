
    
    var player = {
        x: 300,
        y: 300,
        w: 45,
        h: 55,
        speed: 3,
        spriteX: 470,
        spriteY: 0
    };


    
   
    function changeSpeed(trueorfalse) {
        if (trueorfalse) player.speed += 1;
        else {
            if (player.speed > 1) player.speed -= 1;
        }
    };

    
    function reset() {
        player.x = 300;
        player.y = 300;
        player.speed = 4;
        
    };

    
    function collision() {
            for (var i in enemies) {
            if (
		      player.x <= (enemies[i].x + 32)
		      && enemies[i].x <= (player.x + 32)
		      && player.y <= (enemies[i].y + 32)
		      && enemies[i].y <= (player.y + 32)
	           ) enemies.splice(i,1);
            }  
    };
    
    
     function drawPlayer(context) {
        var x = player.x - (player.w / 2);
        var y = player.y - (player.h / 2);
        /*context.fillStyle = "white";
        context.fillRect(
        x,
        y,
        player.w,
        player.h);
        */
        
    };
    
    
    var keysDown = {};
    
    function movePlayer(direction) {
        switch (direction) {
            case "left":
                player.x -= player.speed;
                if (player.x < player.w/2) {
                    player.x = player.w/2;
                }
                player.spriteX = 430;
                player.spriteY = 1200;
                break;
            case "right":
                player.x += player.speed;
                if (player.x > 600-player.w/2) {
                    player.x = 600-player.w/2;
                }
                player.spriteY = 600;
                player.spriteX = 0;
                break;
            case "up":
                player.y -= player.speed;
                if (player.y < player.h/2) {
                    player.y = player.h/2;
                }
                player.spriteX = 0;
                player.spriteY = 1840;
                break;
            case "down":
                player.y += player.speed;
                if (player.y > 600-player.h/2) {
                    player.y = 600-player.h/2;
                }
                player.spriteX = 0;
                player.spriteY = 0;
                break;    
        }
    };
    
    window.addEventListener('keydown', function(e) {
        keysDown[e.keyCode] = true;
        event.preventDefault();
    });
    
    window.addEventListener('keyup', function(e) {
        delete keysDown[e.keyCode];
        player.spriteX = 470;
        player.spriteY = 0;
    });



    
    function update() {
        if (38 in keysDown) {
            movePlayer('up');
        }
        if (40 in keysDown) {
            movePlayer('down');
        }
        if (37 in keysDown) {
            movePlayer('left');
        }
        if (39 in keysDown) {
            movePlayer('right');
        }
    };
    
