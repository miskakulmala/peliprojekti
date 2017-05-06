window.onload = function() {
    
    function getRandomInteger(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    
    var randomNumber = getRandomInteger(1,10);
    
    function compareNumbers(first, second) {
        if (first == second) return true;
        else return false;
    }
    
       
    function guessTheNumber() {
        var guess = parseInt(document.getElementById("number").value);
        //console.log(guess);
        console.log(randomNumber);
        if (Number.isInteger(guess) && (guess > 0) && (guess <= 10)) {
            if (compareNumbers(guess,randomNumber)) {
                window.alert("You got it right!<3");
                randomNumber = getRandomInteger(1,10);
            }
            else window.alert("Sorry, you got it wrong!");
        }
        else window.alert("The number you submitted isn't right!");
    } 

    
    document.getElementById("button").onclick = function(){guessTheNumber()};
    
    
    
    
}