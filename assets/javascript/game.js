
$(document).ready(function () {

    var byhp = 120;
    var behp = 100;
    var bjbhp = 150;
    var bjhp = 180;
    var isRunning = false;
    var enemySelected = false;

    // Creates a variable to hold a clone of the character div with all four characters to be able to 
    // retore later. 
    var divClone = $("div.characters").clone(true)

    function initializeGame() {
        byhp = 120;
        behp = 100;
        bjbhp = 150;
        bjhp = 180;
        isRunning = false;
        enemySelected = false;

        // adding clone of div characters back to top of game.
        $(divClone.clone(true)).appendTo(".game-start");


        // clears other divs on the page to return appearance to the same as the start.
        $("div.enemies, div.your-character, div.fight-character, div.fight-stage").empty();


        // Hides buttons and VS, displays "CHOOSE CHARACTER" message.
        $("button").hide();
        $(".battle-flag").hide();
        $(".start-message").show();


        }

        // creating a click event for user to choose a character.
        $(".image-container-char").on("click", function (game) {

            if (isRunning) {
                return false;
            }

            else {

                // cloning character div after click listener has been added.
               divClone = $("div.characters").clone(true)
             
             
                // setting boolean to true to prevent game from selecting multiple characters as your character.
                isRunning = true;
                
                // hides the user selected character in the character div.
                $(this).hide();

                // adds words to the 'your character' div.
                $("div.your-character").append("<h3>Your Character:</h3>")

                // adds the user selected character to the your character div.
                $(this).appendTo("div.your-character")

                // hides remaining characters
                $("div.characters").hide()

                // hides choose your character
                $(".start-message").hide();

                // adds words to enemy div
                $("div.enemies").append("<h3 class='enemy-flag'>CHOOSE AN ENEMY:</h3>");
                
                // adds remaining characters to enemies div
                $(".characters").appendTo("div.enemies");
               
                // reveals selected character in your character div.
                $(this).show();

                // reveals remaining characters in enemies div
                $("div.characters").show();

                // adds class to characters in enemies div for use later.
                $("div.enemies div.image-container-char").addClass("image-enemies");

              
                // creating a click event for user to select an enemy
                $(".image-enemies").on("click", function () {

                    if (enemySelected) {
                        return false;
                    }
    
                    else {

                    enemySelected = true;
                    $(this).hide();
                    $(".enemy-flag").hide();
                    $("div.fight-character").append("<h3>Destroy them!</h3>")
                    $(this).appendTo("div.fight-character")
                    $("div.your-character").after("<p class=battle-flag>VS</p>")
                    $("div.buttons").append("<button class='attack'>ATTACK</button>", "<button class='reset'>RESET GAME</button>");
                    $(this).show()


                }

            })


            }

        })

    $(".buttons").on("click", ".reset", function () {
        initializeGame();
        game();
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
