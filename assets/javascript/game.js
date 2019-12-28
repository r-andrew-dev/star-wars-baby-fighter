
$(document).ready(function() {

    var byhp = 120;
    var behp = 100;
    var bjbhp = 150;
    var bjhp = 180;
    var isRunning = false;
    var enemySelected = false;

    // Creates a clone of the character div with all four characters to be able to 
    // retore later. 
    var divClone = $("div.characters").clone(true);


function initializeGame () {
    byhp = 120;
    behp = 100;
    bjbhp = 150;
    bjhp = 180;
    isRunning = false;
    enemySelected = false;


    // Returns four characters to start position.
    $(divClone.clone(true)).appendTo(".game-start");


    // clears other divs on the page to return appearance to the same as the start.
    $("div.enemies, div.your-character, div.fight-character, div.fight-stage").empty();
    

    // Hides buttons and VS, displays "CHOOSE CHARACTER" message.
    $("button").hide();
    $(".battle-flag").hide();
    $(".start-message").show();
 



}

$(".buttons").on("click", ".reset", function () {
    initializeGame();
})

$(".image-container-char").on("click", function () {

    if (isRunning && enemySelected) {
        return false;
    }

    else  {

        isRunning = true;
        $(this).hide();
        $("div.your-character").append("<h3>Your Character:</h3>")
        $(this).appendTo("div.your-character")
        $("div.characters").hide()
        $(".start-message").hide();
        $("div.enemies").append("<h3 class='enemy-flag'>CHOOSE AN ENEMY:</h3>");
        $(".characters").appendTo("div.enemies");
        $(this).show();
        $("div.characters").show();
        $("div.enemies div.image-container-char").addClass("image-enemies");
    

        enemySelected = true;
        $(".image-enemies").on("click" , function () {

        $(this).hide();
        $(".enemy-flag").hide();
        $("div.fight-character").append("<h3>Destroy them!</h3>")
        $(this).appendTo("div.fight-character")
        $("div.your-character").after("<p class=battle-flag>VS</p>")
        $("div.buttons").append("<button class='attack'>ATTACK</button>", "<button class='reset'>RESET GAME</button>");
        $(this).show()

        // $("button.reset").on("click", function () {
        //     initializeGame();
        // })

        
        

})

    }


})

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
