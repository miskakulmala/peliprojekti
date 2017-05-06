        
    var smallCoal = new Image();
    smallCoal.src = "smallcoal.gif"
    


    function getRandomInteger(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    

    var enemies = [];



    function createEnemy() {
        for (i = 0; i < 8; i++) {
            var randomX = getRandomInteger(20,580);
            var randomY = getRandomInteger(20,580);
            var enemy = {
                x: randomX,
                y: randomY,
                w: 40,
                h: 40,
                speed: 4,
                direction: getRandomInteger(0,3)
            };
            enemies.push(enemy)
        }
    }

    
    function changeDirection() {
        for (var i in enemies) {
            enemies[i].direction = getRandomInteger(0,3);
        }
    }

    setInterval(function(){changeDirection();},400);

    

    function move() {
        //var directionIndex = getRandomInteger(0,3)
        $.each(enemies, function(index,enemy){
                switch (enemy.direction) {
                case 0:
                    enemy.x -= enemy.speed;
                    if (enemy.x < 20) {
                    enemy.x = 20;
                    }
                    break;
                case 1:
                    enemy.x += enemy.speed;
                    if (enemy.x > 580) {
                    enemy.x = 580;
                    }
                    break;
                case 2:
                    enemy.y -= enemy.speed;
                    if (enemy.y < 20) {
                    enemy.y = 20;
                    }
                    break;
                case 3:
                    enemy.y += enemy.speed;
                    if (enemy.y > 580) {
                    enemy.y = 580;
                    }
                    break;    
                }
            });
         }



    window.addEventListener('click', function () {
        var xCor = event.offsetX;
        var yCor = event.offsetY;
        for (var i in enemies) {
             var x = enemies[i].x - (enemies[i].w / 2);
             var y = enemies[i].y - (enemies[i].h / 2);   
            if (xCor > x && xCor < x + enemies[i].w && yCor > y && yCor < y + enemies[i].h) {
                enemies.splice(i,1);
            }
        }
    })    


    
    

     function drawEnemy(context) {
         $.each(enemies, function(index,enemy){
             var x = enemy.x - (enemy.w / 2);
             var y = enemy.y - (enemy.h / 2);
             context.fillStyle = "red";
             context.drawImage(smallCoal,x,y,enemy.w,enemy.h)
             /*context.fillRect(
            x,
            y,
            enemy.w,
            enemy.h);
            */
         })

    };
    
    
    