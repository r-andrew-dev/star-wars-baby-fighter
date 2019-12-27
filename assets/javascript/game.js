
$(document).ready(function() {

    var byhp = 120;
    var behp = 100;
    var bjbhp = 150;
    var bjhp = 180;
    var isRunning = false;


function initializeGame () {
    byhp = 120;
    behp = 100;
    bjbhp = 150;
    bjhp = 180;
    isRunning = false;
    
    $(".enemies, .your-character, .fight-character, .fight-stage").empty();
    // Reset character div to show all four images 



}

$(".image-container-char").on("click", function () {

    if (isRunning) {
        return false;
    }

    else  {

        $("div.your-character").append("<h3>Your Character:</h3>, <div>this</div");
        $("div.enemies").append("<h3>Enemies:</h3>");
        
    }


} )


})




// Inital screen set up, hard coded in HTML

// Part One.
// When ANY character is chosen, other characters move to the ENEMIES stage and their background turn red.
// The CHOOSE AN ENEMY stage flag is dynamically created when ANY character is chosen. 
// Whichever character is chosen moves down and is labeled "your character"
// The above three lines should happen inside the character click event. 

// Part two.
// Once an enemy is clicked, the enemy moves down into the staging area and the 
// other enemies backgrounds turn back to white.
// The attack button is dynamically created. 


// Part three.
// When the attack button is clicked, text-based attacks are made. 
// The enemies attack amount should always be the same, whereas the player's
// character should gain in attack HP each time. 

// If the enemy reaches 0 HP, the player has won. a message stating "You've won!
// Choose another enemy to fight" should display. Another enemy is selected and the patten repeats
// until the player has defeated all of the enemies. 

// IF however the player reaches 0 HP before any of the enemies, it is game over. 
// A message alerting the player they have lost should appear, and a reset game button should display. 

// When reset game is selected, initializeGame function should run. 








